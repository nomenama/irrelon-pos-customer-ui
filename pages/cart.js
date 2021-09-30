import Head from "next/head";
import React, {useState} from "react";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Basket from "../components/Basket";
import menuItems from "../sue.json";

export default function Home () {
	const [cartItems, setCartItems] = useState([]);
	const [selectedItemId, setSelectedItemId] = useState("");

	const addItemToBasket = (menuItemId, optionIds) => {
		const hash = JSON.stringify(menuItemId) + JSON.stringify(optionIds.map((optionId) => optionId));
		const exist = cartItems.find((item) => item.hash === hash);

		if (exist) {
			setCartItems(cartItems.map((item) => item.hash === hash ? {...exist, optionIds, qty: exist.qty + 1} : item));
		} else {
			setCartItems([...cartItems, {menuItemId, optionIds, qty: 1, hash}]);
		}

		setSelectedItemId("");
	};
	const onIncreaseQuantity = (hash) => {
		const cartItem = cartItems.find(item => item.hash === hash);
		setCartItems(cartItems.map((item) => item.hash === hash ? {...cartItem, qty: cartItem.qty + 1} : item));
		setSelectedItemId("");
	};
	const onDecreaseQuantity = (hash) => {
		const cartItem = cartItems.find(item => item.hash === hash);

		if (cartItem.qty === 1) {
			setCartItems(cartItems.filter((item) => item.hash !== hash));
		} else {
			setCartItems(cartItems.map((item) => item.hash === hash ? {...cartItem, qty: cartItem.qty - 1} : item));
		}
		setSelectedItemId("");
	};

	return (
		<Screen>
			<Head>
				<title>Irrelon Pay || Cart</title>
				<meta name="description" content="Irrelon Pay"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Header brand="shop" href="/" countCartItems={cartItems.length}/>
			<Basket addItemToBasket={addItemToBasket} menuItems={menuItems} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} cartItems={cartItems}/>
			<Footer/>

		</Screen>
	);
}