import { lazy, LazyExoticComponent } from 'react';
import { Web } from '../web/router/Web';
import { LoginRegistro } from '../auth/pages/LoginRegistro';


type JsxElement = ()=>JSX.Element


interface Route {

    name:string,
    path:string,
    to:string,
    Component: LazyExoticComponent<JsxElement> | JsxElement
}

const Admin = lazy(()=>import('../admin/router/Admin'))  


export const routes:Route[] = [
    
    {
        name:'Web',
        path:'/*',
        to:'/*',
        Component: Web
    },    
    {
        name:'Admin',
        path:'/admin/*',
        to:'/admin/*',
        Component: Admin
    },
    {
        name:'Login',
        path:'/login',
        to:'/login',
        Component: LoginRegistro
    },    
    {
        name:'Registro',
        path:'/registro',
        to:'/registro',
        Component: LoginRegistro
    },
    {
        name:'ResetPassword',
        path:'/resetPassword',
        to:'/resetPassword',
        Component: LoginRegistro
    },
    {
        name:'ChangePassword',
        path:'/changePassword',
        to:'/changePassword',
        Component: LoginRegistro
    }       
    
 
]

    