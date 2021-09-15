import React from "react";
import Column from "./Column";
import Row from "./Row";
import menus from "../menus.json";
import {fromImageToUrl} from "../utils/urls";
import {twoDecimals} from "../utils/format";

const Menu = () => {

	return (
		<Row className="menu">
			<Row className="container">

				{menus.map(menu => (
					<Column key={menu.name} className="menuItem">
						<Row className="itemRow">

							<Column className="imageColumn">
								<img src={fromImageToUrl(menu.image)} alt=""/>
							</Column>

							<Column className="itemDescription">
								<Row className="menuName">
									{menu.name}
								</Row>
								<Row className="menuDescription">
									{menu.description}
								</Row>
								<Row className="menuPrice">
									<p>
										£ {twoDecimals(menu.price)}
									</p>

									<button type="button" className="addButton">
										Add
									</button>
								</Row>
							</Column>

						</Row>

						<Column className="selectionRow">

							<Row className="choicesTitle">
								Please select from the choices below
							</Row>

							<form className="choicesForm">

								<Column className="selectionColumn">

									<p>Meat</p>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="beef" name="beef"/>
											<label htmlFor="beef">Beef</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="chicken" name="chicken"/>
											<label htmlFor="chicken">Chicken</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="pork" name="pork"/>
											<label htmlFor="pork">Pork</label>
										</span>
										<span className="itemPrice">
												+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="prawn" name="prawn"/>
											<label htmlFor="prawn">King Prawn</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

								</Column>


								<Column className="selectionColumn">

									<p>Extras</p>

									<Row className="itemSelection">
										<span className="itemName">
											<input id="egg" name="extras" value="egg" type="checkbox"/>
											<label htmlFor="egg">Egg</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id="vegetables" name="extras" value="vegetables" type="checkbox"/>
											<label htmlFor="vegetables">Vegetables</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id="chilly" name="extras" value="chilly" type="checkbox"/>
											<label htmlFor="chilly">Chilly</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id="curry" name="extras" value="curry" type="checkbox"/>
											<label htmlFor="curry">Curry</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

								</Column>

								<button type="submit">ADD TO CART</button>

							</form>
						</Column>

					</Column>
				))}

			</Row>
		</Row>
	);
};

export default Menu;