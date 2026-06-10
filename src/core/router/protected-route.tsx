import React, { type ReactNode }  from "react";
import { getToken } from "@core/helpers/storage";
import { Navigate } from "react-router-dom";


type Props = {
    readonly children: ReactNode;
}

const ProtectedRoute: React.FC<Props> = ({children}) => {
    const token = getToken();
    return  token ? <>{children}</> : <Navigate to="/login"/>    
}

export default ProtectedRoute;