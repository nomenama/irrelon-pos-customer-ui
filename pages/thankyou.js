import React from "react";
import Row from "../components/Row";

export default function Home () {
	return (
		<Row className="container flex flexColumn justifyCenter alignCenter">
			<h1>Payment Successful</h1>
			<p>Your order number is ...</p>
			<p>Please present your order number upon collection</p>
		</Row>
	);
}
