import React, { ReactChildren, ReactChild } from "react";
import Head from "next/head";

import Header from "../components/header";
import Footer from "../components/footer";
import Social from "../components/social";

/**
 *
 * @param {*} param0 children main layout
 */

interface AuxProps {
  children: ReactChild | ReactChildren;
}

const Home = ({ children }: AuxProps) => {
  return (
    <>
      <Head>
        <title>Coffee Shop</title>
        <meta
          name="description"
          content="watch the best series and movies"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>

      <Social />

      <Footer />
    </>
  );
};

export default Home;
