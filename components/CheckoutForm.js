import React, {useState, useEffect} from "react";
import {
	CardElement,
	useStripe,
	useElements
} from "@stripe/react-stripe-js";

export default function CheckoutForm () {
	const [succeeded, setSucceeded] = useState(false);
	const [error, setError] = useState(null);
	const [processing, setProcessing] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState("");
	const stripe = useStripe();
	const elements = useElements();

	const createPaymentIntent = async () => {
		const res = await fetch("/api/checkout-session", {
			method: "POST",
			body: JSON.stringify({
				amount: 1000
			})
		});
		const {clientSecret: clientSecretRes} = await res.json();
		setClientSecret(clientSecretRes);
	};

	useEffect(() => {
		createPaymentIntent();
	}, []);

	const cardStyle = {
		style: {
			base: {
				color: "#32325d",
				fontFamily: "Open-sans, Lora, sans-serif",
				fontSmoothing: "antialiased",
				fontSize: "16px",
				"::placeholder": {
					color: "#32325d"
				}
			},
			invalid: {
				color: "#8e031e",
				iconColor: "#8e031e"
			}
		}
	};

	const handleChange = async (event) => {
		// Listen for changes in the CardElement
		// and display any errors as the customer types their card details
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement)
			}
		});

		if (payload.error) {
			setError(`Payment failed ${payload.error.message}`);
			setProcessing(false);
		} else {
			setError(null);
			setProcessing(false);
			setSucceeded(true);
		}
	};

	return (
		<form className="paymentForm" id="payment-form" onSubmit={handleSubmit}>
			<CardElement id="card-element" options={cardStyle} onChange={handleChange}/>
			<button className="paymentButton"
					disabled={processing || disabled || succeeded}
					id="submit"
			>
        <span id="button-text">
          {processing ? (
			  <div className="spinner" id="spinner"/>
		  ) : (
			  "Pay now"
		  )}
        </span>
			</button>
			{/* Show any error that happens when processing the payment */}
			{error && (
				<div className="card-error" role="alert">
					{error}
				</div>
			)}
			{/* Show a success message upon completion */}
			<p className={succeeded ? "result-message" : "result-message hidden"}>
				Payment successful, your order number is ...
			</p>
		</form>
	);
}
