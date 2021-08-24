import React from 'react'
import Routes from "./Routes";
import Header from './common/Header';
import Footer from './common/Footer';

const Layout = () => {
    return(
        <>
        <Header name="PRACTICE TO PERFECT" />
            <Routes />
        <Footer />
        </>
    )
}


export default Layout;