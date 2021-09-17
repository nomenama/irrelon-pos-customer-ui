import React from "react";
import Row from "./Row";
import Column from "./Column";

const Basket = (props) => {

	const {cartItems, onAdd, onRemove} = props;
	const itemsPrice = cartItems.reduce((accumulator, currentVal) => accumulator + currentVal.price * currentVal.qty, 0);

	return (
		<Column className="basket">
			<Column className="container">
				<Column className="wrapper">

					<Row className="cartDetail">Cart Detail</Row>

					<Column className="cartItems">
						<Column className="itemRow">
							{cartItems.length === 0 && <div className="emptyCart">Cart is empty</div>}
							{cartItems.map((item) => (
								<Row key={item.id} className="basketItems">

									<Row className="itemNameSection">
										{item.name}
									</Row>

									<Row className="countButtonSection">
										<button onClick={() => onRemove(item)}><i className="fal fa-minus"/></button>
										{item.qty}
										<button onClick={() => onAdd(item)}><i className="fal fa-plus"/></button>
									</Row>

									<Row className="divideSection">
										x
									</Row>

									<Row className="priceSection">
										£{item.price}
									</Row>

								</Row>
							))}
						</Column>
					</Column>

					<Row className="totalSection">

						<Column className="total">
							Total Price
						</Column>

						<Column className="total">
							£{itemsPrice.toFixed(2)}
						</Column>

					</Row>

					{/*		<Row className="additionalInfo">
						Additional Info
						<textarea name="allergies" id="additionalInfo" cols="30" rows="10" placeholder="Allergies etc"></textarea>
					</Row>

					<Column className="address">
						Line 1
						<input type="text"/>
						Line 2
						<input type="text"/>
						Line 3
						<input type="text"/>
						Poscode
						<input type="text"/>
					</Column>

					<Row className="payment">
						Payment
					</Row>
*/}
					<button className="payButton">Pay</button>

				</Column>
			</Column>
		</Column>
	);
};

export default Basket;