import React, { useRef, useState } from "react";
import "./CodeInput.css";
import Button from "../Button/Button";
import { useEmailContext } from "../../context/EmailContext";
import type { UserInfo } from "../../types/types";
import { validateEmail } from "../../services/validate-api";
import { useNavigate } from "react-router-dom";

const CODE_LENGTH = 6;

const CodeInput = () => {
    const [code, setCode] = useState<string>("");
    const [error, setError] = useState<string | null>("");
    const { email, setLoading } = useEmailContext();
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
            const verifiedUserId = await validateEmail(user);
            if (verifiedUserId) {
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
            {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                <div key={i} className="pin-box">
                    {code[i] || ""}
                </div>
            ))}
            {error && <div id="email-error" className="error-message">{error}</div>}
            <div className="pin-button">
                <Button type="submit">Verify</Button>
            </div>
        </form>
    );
};

export default CodeInput;