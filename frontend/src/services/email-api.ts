import { API_URL, END_POINTS } from '../config';

//get code
export const getValidationCode = async (email: string): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/${END_POINTS.email.sendCode}?email=${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 400) {
      console.error('Invalid email address');
      throw new Error('Invalid email address');
    }

    if (response.status === 429) {
      console.error('Rate limited: Please wait before requesting another code');
      throw new Error('Please wait before requesting another code');
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.status === 200;

  } catch (error) {
    console.error('Error fetching code', error);
    throw error;
  };
};
