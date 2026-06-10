import type { LoginCredentials } from "../entities/login-credentials";


export const loginUser = async (credentials: LoginCredentials): Promise<string> => {
    const url = 'http://localhost:8000/auth/login';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            credentials
        )
    });

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message);
    }

    const token = data.accessToken;

    return token;
}   