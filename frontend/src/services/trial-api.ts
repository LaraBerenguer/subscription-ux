import { API_URL, END_POINTS } from "../config";
import type { UserId } from "../types/types";

export const startTrial = async (userId: UserId): Promise<boolean> => {
    try {
        const response = await fetch(`${API_URL}/${END_POINTS.trial.start}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userId)
        });        

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.status === 200;

    } catch (error) {
        console.error('Error starting trial', error);
        throw error;
    };
};