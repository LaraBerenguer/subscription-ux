import { useContext } from "react";
import { EmailContext } from "../context/emailContext";
import type { UserId } from "../types/types";

export const useEmailContext = () => {
    const context = useContext(EmailContext);
    if (!context) {
        throw new Error('useEmailContext must be used within an EmailProvider');
    }

    return {
        ...context,
        userId: context.userId as UserId,
        isUserIdAvailable: !!context.userId
    };
};