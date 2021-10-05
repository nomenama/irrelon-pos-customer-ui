import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
	if (req.method === "POST") {
		const body = JSON.parse(req.body);
		const {amount} = body;

		const paymentIntent = await stripe.paymentIntents.create({
			amount: (amount),
			currency: "gbp"
		});
		res.status(200).send({clientSecret: paymentIntent.client_secret});
	} else {
		res.status(405).send("Method not allowed");
	}
}




