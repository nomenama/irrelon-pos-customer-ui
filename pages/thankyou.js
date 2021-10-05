import React from "react";
import Row from "../components/Row";
import Head from "next/head";
import Screen from "../components/Screen";

export default function Home () {
	return (
		<Screen>
			<Head>
				<title>Irrelon Pay || Thank You</title>
				<meta name="description" content="Irrelon Pay"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Row className="container flex flexColumn justifyCenter alignCenter">
				<h1>Payment Successful</h1>
				<p>Your order number is ...</p>
				<p>Please present your order number upon collection</p>
			</Row>
		</Screen>
	);
}
