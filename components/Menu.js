import React, {useState} from "react";
import Column from "./Column";
import Row from "./Row";
import menus from "../menus.json";
import {fromImageToUrl} from "../utils/urls";
import {twoDecimals} from "../utils/format";

const Menu = () => {

	const [activeId, setActiveId] = useState(null);

	return (
		<Row className="menu">
			<Row className="container">

				{menus.map((menu, idx) => (
					<Column key={menu.id} className="menuItem">

						<Row className="itemRow" id={idx} onClick={() => {
							setActiveId(activeId === idx ? -1 : idx);
						}}>

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

									<button id={idx} type="button" className="addButton" onClick={() => {
										setActiveId(activeId === idx ? -1 : idx);
									}}>
										Add
									</button>
								</Row>
							</Column>

						</Row>

						<Column id={idx} className={`selectionRow ${activeId === idx ? "displayBlock" : "displayNone"}`}>

							<Row className="choicesTitle">
								Please select from the choices below
							</Row>

							<form className="choicesForm">

								<Column className="selectionColumn">

									<p>Meat</p>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="beef" name="meat" value="beef"/>
											<label htmlFor="beef">Beef</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="chicken" name="meat" value="chicken"/>
											<label htmlFor="chicken">Chicken</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="pork" name="meat" value="pork"/>
											<label htmlFor="pork">Pork</label>
										</span>
										<span className="itemPrice">
												+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="prawn" name="meat" value="prawn"/>
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

								<button type="submit">add to cart</button>

							</form>
						</Column>

					</Column>
				))}

			</Row>
		</Row>
	);
};

export default Menu;