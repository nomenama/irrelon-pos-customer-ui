import Head from "next/head";
import React, {useState} from "react";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Basket from "../components/Basket";
import {GET, PATCH} from "../services/api";

export default function Home ({cartItems: initialCartItems, menuItems}) {
	const [cartItems, setCartItems] = useState(initialCartItems);
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

	const onIncreaseQuantity = async (hash) => {
		const cartItem = cartItems.find(item => item.hash === hash);
		const newCartItems = cartItems.map((item) => item.hash === hash ? {...cartItem, qty: cartItem.qty + 1} : item);
		setCartItems(newCartItems);

		await PATCH("http://0.0.0.0:9010/fdb/irrelon-pos/collection/cart/myCart", {
			lineItems: newCartItems
		});

		setSelectedItemId("");
	};

	const onDecreaseQuantity = async (hash) => {
		const cartItem = cartItems.find(item => item.hash === hash);

		let newCartItems;

		if (cartItem.qty === 1) {
			newCartItems = cartItems.filter((item) => item.hash !== hash);
		} else {
			newCartItems = cartItems.map((item) => item.hash === hash ? {...cartItem, qty: cartItem.qty - 1} : item);
		}

		setCartItems(newCartItems);

		await PATCH("http://0.0.0.0:9010/fdb/irrelon-pos/collection/cart/myCart", {
			lineItems: newCartItems
		});

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

export const getServerSideProps = async (context) => {
	const cartItemsResponse = await GET("http://0.0.0.0:9010/fdb/irrelon-pos/collection/cart/myCart/lineItems", {}, {});
	const menuResponse = await GET("http://0.0.0.0:9010/fdb/irrelon-pos/collection/merchant/SueFoodTruck/menus/Menu", {}, {});

	return {
		props: {
			cartItems: cartItemsResponse.body,
			menu: menuResponse.body,
			menuItems: menuResponse.body.menuItems
		}
	}
};