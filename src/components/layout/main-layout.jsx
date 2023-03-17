import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/footer'

const Mainlayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Mainlayout