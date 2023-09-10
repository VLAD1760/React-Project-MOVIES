// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavComponet from '../nav/Nav.jsx';
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer.jsx'

export default function Home() {
    return (
        <>
            <NavComponet />
            <Outlet />
            <Footer />


        </>
    );
}