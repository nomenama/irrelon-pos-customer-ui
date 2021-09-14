import React from "react";
import Image from "next/image";
import Column from "./Column";
import Row from "./Row";
import Link from "next/link";

const Header = (props) => {

	const {brand, href} = props;

	return (

		<header className="header">

			<Row className="container">
				<Column className="logoColumn">
					<Link href={href}>
						<Image src={`/assets/logo-shop.png`} alt="logo" width="300" height="100"/>
					</Link>
				</Column>

				<Column className="cart">
					<Row>
						<i className="far fa-cart-plus fa-2x"/>
						{/*<i className="far fa-search fa-2x"/>*/}
					</Row>
				</Column>
			</Row>
		</header>
	);
};

export default Header;