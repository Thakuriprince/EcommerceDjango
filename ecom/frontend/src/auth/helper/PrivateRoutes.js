import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from ".";


const PrivateRoutes = ({component: Component,...rest}) => {
    let location = useLocation();
    return(
        <Route 
            {...rest}
            render= {(props) => 
                isAuthenticated()
                    ? (
                        <Component {...props} />
                    )
                    : (
                        
                    <Navigate to="/signin" state={{ from: location }} replace />
                    
                    )}
        />
    )
}

export default PrivateRoutes;