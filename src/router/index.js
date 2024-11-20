import Home from './home';
import React from 'react';
import { Navigate } from "react-router-dom";
// 分包 懒加载
// import About from './about';
const About = React.lazy(() => import('./about'));

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    // {
    //     path: "*",
    //     element: <Navigate to="/home" />,
    // }
]


export default routes