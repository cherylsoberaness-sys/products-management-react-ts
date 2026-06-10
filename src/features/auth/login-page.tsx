import { getToken } from "@core/helpers/storage";
import { Layout } from "../../core/components/layout/layout";
import { getMenuOptions,  } from "../../core/components/menu/menu-options";
import { LoginForm } from "./components/login-form";
import { Navigate } from "react-router-dom";


const LoginPage: React.FC = () => {
    console.log('LOGIN PAGE LOADED');

    const token = getToken();
    
    return token ?
        <Navigate to={'/products'}/> : 
        <Layout menuOptions={getMenuOptions()}>
            <LoginForm />
        </Layout>

}

export default LoginPage