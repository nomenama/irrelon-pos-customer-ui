import React, {useState} from "react";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import { destroyCookie} from "nookies";

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
				destroyCookie(null, "paymentIntentId")
				setCheckoutSuccess(true);
			}
		} catch (err) {
			setCheckoutError(err.message)
		}
	};

	if (checkoutSuccess) return <p>Payment Successful</p>

	return (
		<form onSubmit={handleSubmit} style={{width: "100%"}}>

			<CardElement />

			<button type={"submit"} disabled={!stripe}>Pay Now</button>
			{checkoutError && <span style={{color: "red"}}>{checkoutError}</span>}

		</form>
	);
};

export default CheckoutForm;