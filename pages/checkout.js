import React from "react";
import Stripe from "stripe";
import {parseCookies, setCookie} from "nookies";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import Row from "../components/Row";
import Column from "../components/Column";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export const getServerSideProps = async (ctx) => {
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

	let paymentIntent;

	const {paymentIntentId} = await parseCookies(ctx);

	if (paymentIntentId) {
		paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

		return {
			props: {
				paymentIntent
			}
		};
	}

	paymentIntent = await stripe.paymentIntents.create({
		amount: 1000,
		currency: "gbp"
	});

	setCookie(ctx, "paymentIntentId", paymentIntent.id);

	return {
		props: {
			paymentIntent
		}
	};
};

const CheckoutPage = ({paymentIntent}) => {
	return (

		<Row className="container flex justifySpaceBetween alignCenter">
			<Column style={{width: "50%", padding: "20px", textAlign: "center"}}>
				<h1>Your order</h1>
			</Column>
			<Elements stripe={stripePromise}>
				<CheckoutForm paymentIntent={paymentIntent}/>
			</Elements>
		</Row>

	);
};


export default CheckoutPage;
