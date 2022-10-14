// import { NextPage } from 'next/types';
import React from 'react';
import Header from './Header';



const Layout = ({ children }) => (
    <div>
        <Header />
        { children }
    </div>
);

export default Layout;