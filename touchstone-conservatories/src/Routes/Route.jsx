import React from 'react';
import Main from '../Pages/Main';
import Welcome from '../Pages/Welcome';
import About from '../Pages/About';
import Feedback from '../Pages/Feedback';

const AppRoutes = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/Welcome',
        element: <Welcome/>
    },
    {
        path: '/About',
        element: <About/>
    },
    {
        path: '/Feedback',
        element: <Feedback/>
    }
];

export default AppRoutes;
