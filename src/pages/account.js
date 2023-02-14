import Head from 'next/head';
import React from 'react';
import Account from 'templates/Account';

function account() {
  return (
    <>
      <Head>
        <title> PlatziShop - Account </title>
      </Head>
      <Account />
    </>
  );
}

export default account;
