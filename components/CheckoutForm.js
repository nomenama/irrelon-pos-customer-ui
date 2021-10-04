import React, {useState} from "react";
import Row from "./Row";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import {destroyCookie} from "nookies";

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": {color: "#fce883"},
			"::placeholder": {color: "#87bbfd"}
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
};

const CheckoutForm = (props) => {
	const {paymentIntent} = props;
	const stripe = useStripe();
	const elements = useElements();

	const [checkoutError, setCheckoutError] = useState();
	const [checkoutSuccess, setCheckoutSuccess] = useState();

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const {error, paymentIntent: {status}} = await stripe.confirmCardPayment(paymentIntent.client_secret, {
				payment_method: {
					card: elements.getElement(CardElement)
				}
			});

			if (error) throw new Error(error.message);

			if (status === "succeeded") {
				destroyCookie(null, "paymentIntentId");
				setCheckoutSuccess(true);
			}
		} catch (err) {
			setCheckoutError(err.message);
		}
	};

	if (checkoutSuccess) return (
		<Row className="container justifyCenter alignCenter">
			<p>Payment Successful. Your order number is ...</p>
		</Row>
	);

	return (
		<form onSubmit={handleSubmit} className="paymentForm">
			<fieldset className="FormGroup">
				<div className="FormRow">
					<CardElement option={CARD_OPTIONS}/>
				</div>
			</fieldset>
			<button className="payButton" type={"submit"} disabled={!stripe}>Pay Now</button>
			{checkoutError && <span style={{color: "red"}}>{checkoutError}</span>}

		</form>
	);
};

export default CheckoutForm;