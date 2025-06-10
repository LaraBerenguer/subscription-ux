import { API_URL, END_POINTS } from "../config";

//get code
export const getValidationCode = async (email: string) => {
    try {
        const response = await fetch(`${API_URL}/${END_POINTS.email.sendCode}?email=${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const code = await response.json();
        return code;
    } catch (error) {
        console.error('Error fetching code', error);
        throw error;
    }
};