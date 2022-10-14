import { NextPage } from 'next/types';
import React from 'react';
import Header from './Header';

interface Props {
    children: any;
}

const Layout: NextPage<Props> = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

export default Layout;