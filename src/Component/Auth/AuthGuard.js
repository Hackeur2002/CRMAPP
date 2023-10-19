import React from 'react';
import { Navigate } from 'react-router-dom';
import { ServiceUtilisateur } from '../../ServiceUtilisateur';

function AuthGuard({children}) {

    if(!ServiceUtilisateur.isLogged()){
        return <Navigate to="/login" />
    }
    return children
}

export default AuthGuard;