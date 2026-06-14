import { useState } from "react"
import type { LoginCredentials } from "@features/auth/entities/login-credentials";
import { loginUser } from "@features/auth/services/login-repo";
import { saveToken } from "@core/helpers/storage";
import { useNavigate } from "react-router-dom";
import './login-form.css'

const initialCredentials: LoginCredentials = { 
    username: '',
    password: '',
    rememberMe: false
}




export const LoginForm: React.FC = () => {
    const [credentials, setCredentials] = useState<LoginCredentials>(initialCredentials);
    const [errorMessage, setErrorMessage] = useState<null | string>(null)
    const navigate = useNavigate();

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        
        try {
            const token = await loginUser(credentials);
            saveToken(token, credentials.rememberMe);
            navigate("/products");
        } catch (error) {
            const message = error instanceof Error ? error.message : 'credenciales incorrectas' 
            setErrorMessage(message);
        }   
        
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target
        setCredentials ({

            ...credentials,
            [name]: event.target.type === 'checkbox' ? event.target.checked : value

        });

    }
      

    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" autoComplete="username" value={credentials.username} onChange={handleChange}/>
                </label>
                <label>
                    Password:   
                    <input type="password" name="password" autoComplete="current-password" value={credentials.password} onChange={handleChange}/>
                </label>
                <label className="remember" htmlFor="">
                    Remember me:
                    <input type="checkbox" name="rememberMe" checked={credentials.rememberMe} onChange={handleChange} />
                </label>
                <button type="submit">Login</button>
            </form>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    )
}  