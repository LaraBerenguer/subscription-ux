import React, { useRef, useState } from "react";
import "./CodeInput.css";
import Button from "../Button/Button";


const CODE_LENGTH = 6;

const CodeInput = () => {
    const [code, setCode] = useState<string>("");    
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, CODE_LENGTH);
        setCode(value);
    };

    const handleClick = () => {
        inputRef.current?.focus();
    };

    

    return (
        <>
            <form className="pin-wrapper" onClick={handleClick}>
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
                <div className="pin-button">
                    <Button type="submit">Verify</Button>
                </div>
            </form>
        </>

    );
};

export default CodeInput;