import React from "react";
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
						<img src={`/assets/logo-${brand}.png`} alt="logo"/>
					</Link>
				</Column>

				<Column className="cart">
					<Row>
						<i className="far fa-cart-plus"/>
						{/*<i className="far fa-search fa-2x"/>*/}
					</Row>
				</Column>
			</Row>
		</header>
	);
};

export default Header;