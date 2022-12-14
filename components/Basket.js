import React from "react";
import Row from "./Row";
import Column from "./Column";
import Link from "next/link";
import {twoDecimals} from "../utils/format";

const Basket = (props) => {
	const {cartItems, menuItems, onDecreaseQuantity, onIncreaseQuantity} = props;

	const cartItemObjects = cartItems.map(({menuItemId, optionIds, qty, hash}) => {
		const menuItem = menuItems.find((menuItem) => menuItem._id === menuItemId);
		if (!menuItem) return null;

		const {name} = menuItem;
		const options = optionIds.map((optionId) => menuItem.options.find((menuItemOption) => menuItemOption._id === optionId));
		let {price} = menuItem;

		options.forEach((option) => price += option.price);

		return {
			name,
			price,
			qty,
			options,
			hash
		};
	});

	const basketTotalPrice = cartItemObjects.reduce((accumulator, currentVal) => accumulator + currentVal.price * currentVal.qty, 0);

	return (
		<Column className="basket">
			<Column className="container">
				<Column className="wrapper">
					<Row className="cartDetail">Cart Detail</Row>
					<Column className="cartItems">
						<Column className="itemRow">

							{cartItems.length === 0 && <div className="emptyCart">Cart is empty</div>}
							{cartItemObjects.map(({name, price, hash, qty, options}) => {
								return (
									<Row key={hash} className="basketItems">
										<Row className="itemNameSection">
											{name}

											{options.map((option) => <Column key={option._id} className="selectedOptionsSection">
												<div className="selectedOptions">
													<span style={{paddingRight: "10px"}}>{option.name}</span> + {option.price}
												</div>
											</Column>)}
										</Row>

										<Row className="countButtonSection">
											<button onClick={() => onDecreaseQuantity(hash)}><i className="fal fa-minus"/></button>
											{qty}
											<button onClick={() => onIncreaseQuantity(hash)}><i className="fal fa-plus"/></button>
										</Row>

										<Row className="priceSection">
											£{twoDecimals(price * qty)}
										</Row>
									</Row>
								);
							})}
						</Column>
					</Column>

					<Row className="totalSection">
						<Column className="total">
							Total Price
						</Column>

						<Column className="total">
							£{basketTotalPrice.toFixed(2)}
						</Column>

					</Row>
					<Link href={"/checkout"}>
						<a className="payButton"><i className="fas fa-credit-card" /> Pay  £{basketTotalPrice.toFixed(2)}</a>
					</Link>

				</Column>
			</Column>
		</Column>
	);
};

export default Basket;