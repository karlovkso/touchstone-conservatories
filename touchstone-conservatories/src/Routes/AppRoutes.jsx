import React from 'react';
import Landing from '../Pages/Landing/Index';
import CustomDesign from '../Pages/CustomDesign/CustomDesign';

const AppRoutes = [
    {
        path: '/',
        element: <Landing />
    },
    {
        path: '/CustomDesign',
        element: <CustomDesign/>
    }
];

export default AppRoutes;
