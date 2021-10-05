import React from "react";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import Head from "next/head";
import Screen from "../components/Screen";
import Column from "../components/Column";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function Checkout () {
	return (

		<Screen>
			<Head>
				<title>Irrelon Pay || Checkout</title>
				<meta name="description" content="Irrelon Pay"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Column className="container flex justifyCenter alignCenter">
				<Elements stripe={stripePromise}>
					<CheckoutForm/>
				</Elements>
			</Column>

		</Screen>
	);
}

