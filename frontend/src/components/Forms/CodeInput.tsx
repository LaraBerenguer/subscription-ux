import React, { useRef, useState } from "react";
import "./CodeInput.css";
import Button from "../Button/Button";
import { useEmailContext } from "../../context/EmailContext";
import type { UserId, UserInfo } from "../../types/types";
import { validateEmail } from "../../services/validate-api";
import { useNavigate } from "react-router-dom";
import ResendCode from "../ResendCode/ResendCode";

const CODE_LENGTH = 6;

const CodeInput = () => {
    const [code, setCode] = useState<string>("");
    const { email, setUserId, setLoading, error, setError } = useEmailContext();
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, CODE_LENGTH);
        setCode(value);
    };

    const handleClick = () => {
        inputRef.current?.focus();
    };

    const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const user: UserInfo = { "email": email, "code": code };
            const response: UserId = await validateEmail(user);

            if (response) {
                setUserId(response);
                navigate("/plans");
            }
            setLoading(false);
        } catch (error) {
            console.error("Error during verification:", error);
            setError(error instanceof Error ? error.message : "Invalid code or email");
            setLoading(false);
        }
    };

    return (
        <form className="pin-wrapper" onClick={handleClick} onSubmit={handleVerify}>
            <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                pattern="\d*"
                autoFocus
                value={code}
                onChange={handleChange}
                maxLength={CODE_LENGTH}
                className="pin-hidden-input"
            />
            <div className="pin-box-wrapper">
                {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                    <div key={i} className="pin-box">
                        {code[i] || ""}
                    </div>
                ))}
            </div>
            <div className="pin--resend-code">
                <ResendCode />
            </div>
            {error && <div id="pin--email-error" className="error-message">{error}</div>}
            <div className="pin--button">
                <Button type="submit">Verify</Button>
            </div>
        </form>
    );
};

export default CodeInput;