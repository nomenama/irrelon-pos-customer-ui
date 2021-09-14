import Head from "next/head";
import React from "react";
import Image from "next/image";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home () {
	return (

		<Screen>

			<Head>
				<title>Irrelon Pay</title>
				<meta name="description" content="Irrelon Pay"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Header brand="shop" href="/"/>

			{/*<Footer />*/}

		</Screen>
	);
}
