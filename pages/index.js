import Head from "next/head";
import React, {useState} from "react";
import Menu from "../components/Menu";
import Screen from "../components/Screen";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Basket from "../components/Basket";
import menus from "../menus.json";

export default function Home () {

	const [cartItems, setCartItems] = useState([]);
	const {menu} = menus;

	const onAdd = (menu) => {
		const exist = cartItems.find(item => item.id === menu.id);

		if (exist) {
			setCartItems(cartItems.map(item => item.id === menu.id ? {...exist, qty: exist.qty + 1} : item));
		} else {
			setCartItems([...cartItems, {...menu, qty: 1}]);
		}
	};

	const onRemove = (menu) => {
		const exist = cartItems.find((item) => item.id === menu.id);

		if (exist.qty === 1) {
			setCartItems(cartItems.filter((item) => item.id !== menu.id));
		} else {
			setCartItems(cartItems.map((item) => item.id === menu.id ? {...exist, qty: exist.qty - 1} : item))
		}
	}

	return (

		<Screen>

			<Head>
				<title>Irrelon Pay || Home</title>
				<meta name="description" content="Irrelon Pay"/>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Header brand="shop" href="/" countCartItems={cartItems.length}/>

			<Menu onAdd={onAdd} onRemove={onRemove} menus={menus}/>

			<Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />

			<Footer/>

		</Screen>
	);
}
