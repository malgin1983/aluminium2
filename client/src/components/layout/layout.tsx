import * as React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Head from "next/head";

// @ts-ignore
const layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Okna PC</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Poiret+One&amp;display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&amp;display=swap" rel="stylesheet" />
            </Head>
            <Header/>
                {children}
            <Footer />
        </>
    )
}

export default layout