export const getToken = (): string | null => {
    const token = localStorage.getItem('token') ?? 
    sessionStorage.getItem('token')

    return token;
}

export const saveToken = (token: string, rememberMe: boolean): void => {
    if(rememberMe) {
        localStorage.setItem('token', token);
    } else {
        sessionStorage.setItem('token', token);
    }

}

export const removeToken = (): void => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
} 