import Head from "next/head";
import React, {useState} from "react";
import Menu from "../components/Menu";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Basket from "../components/Basket";
import {GET, POST, PATCH} from "../services/api";

const Home = ({menu, menuItems}) => {
	const [cartItems, setCartItems] = useState([]);
	const [selectedItemId, setSelectedItemId] = useState("");

	const addItemToBasket = async (menuItemId, optionIds) => {
		const hash = JSON.stringify(menuItemId) + JSON.stringify(optionIds.map((optionId) => optionId));
		const exist = cartItems.find((item) => item.hash === hash);

		let newCartItems;

		if (exist) {
			newCartItems = cartItems.map((item) => item.hash === hash ? {...exist, optionIds, qty: exist.qty + 1} : item);
		} else {
			newCartItems = [...cartItems, {menuItemId, optionIds, qty: 1, hash}];
		}

		setCartItems(newCartItems)

		await PATCH("http://0.0.0.0:9010/fdb/irrelon-pos/collection/cart/myCart", {
			lineItems: newCartItems
		});

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
				<title>Irrelon Pay || Home</title>
				<meta name="description" content="Irrelon Pay"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Header brand="shop" href="/" countCartItems={cartItems.length}/>
			<Menu addItemToBasket={addItemToBasket} menuItems={menuItems} selectedItemId={selectedItemId} setSelectedItemId={setSelectedItemId}/>
			{/*<Basket addItemToBasket={addItemToBasket} menuItems={menuItems} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} cartItems={cartItems}/>*/}
			<Footer/>

		</Screen>
	);
}

export const getServerSideProps = async (context) => {
	const merchant = await GET("http://0.0.0.0:9010/fdb/irrelon-pos/collection/merchant/testMerchant", {}, {});
	const menu = await GET("http://0.0.0.0:9010/fdb/irrelon-pos/collection/merchant/testMerchant/menus/testMenu", {}, {});

	return {
		props: {
			merchant: merchant.body,
			menu: menu.body,
			menuItems: menu.body.menuItems
		}
	}
};

export default Home;