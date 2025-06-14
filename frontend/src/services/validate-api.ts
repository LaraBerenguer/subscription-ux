import { API_URL, END_POINTS } from '../config';
import type { UserId, UserInfo } from '../types/types';

export const validateEmail = async (user: UserInfo): Promise<UserId> => {
  try {
    const response = await fetch(`${API_URL}/${END_POINTS.email.validate}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();

    if (response.status === 400) {
      console.error('Invalid email address');
      throw new Error(data.error || 'Something went wrong');
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return data;

  } catch (error) {
    console.error('Error verifying code', error);
    throw error;
  };
};
