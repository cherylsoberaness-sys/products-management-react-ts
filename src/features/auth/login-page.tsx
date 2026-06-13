import { getToken } from "@core/helpers/storage";
import { Layout } from "../../core/components/layout/layout";
import { LoginForm } from "@features/auth/components/login-form/login-form";
import { Navigate } from "react-router-dom";


const LoginPage: React.FC = () => {
    console.log('LOGIN PAGE LOADED');

    const token = getToken();
    
    return token ?
        <Navigate to={'/products'}/> : 
        <Layout appTitle="Frieren's Library Management" subTitle="Login">
            <LoginForm />
        </Layout>

}

export default LoginPage