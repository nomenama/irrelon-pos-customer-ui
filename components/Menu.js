import React, {useState} from "react";
import Column from "./Column";
import Row from "./Row";
import {fromImageToUrl} from "../utils/urls";
import {twoDecimals} from "../utils/format";

const Menu = (props) => {

	const {menus, onAdd} = props;
	const [activeId, setActiveId] = useState(null);


	return (
		<Row className="menu">
			<Row className="container">

				{menus.map((menu, index) => (
					<Column key={menu.id} onAdd={onAdd} className="menuItem">

						<Row className="itemRow" id={index} onClick={() => {
							setActiveId(activeId === index ? -1 : index);
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

									<button id={index} type="button" className="addButton" onClick={() => {
										setActiveId(activeId === index ? -1 : index);
									}}>
										Add
									</button>
								</Row>
							</Column>

						</Row>

						<Column id={index} className={`selectionRow ${activeId === index ? "displayBlock" : "displayNone"}`}>

							<Row className="choicesTitle">
								Please select from the choices below
							</Row>

							<Row className="choicesItemName">
								{menu.name}
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


								{/*							<Column className="selectionColumn">

									<p>Extras</p>

									<Row className="itemSelection">
										<span className="itemName">
											<input id={menu.additional.extra1} name="extras" value={menu.additional.extra1} type="checkbox"/>
											<label htmlFor="egg">{menu.additional.extra1}</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id={menu.additional.extra2} name="extras" value={menu.additional.extra2} type="checkbox"/>
											<label htmlFor="vegetables">{menu.additional.extra2}</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id={menu.additional.extra3} name="extras" value={menu.additional.extra3} type="checkbox"/>
											<label htmlFor="chilly">{menu.additional.extra3}</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id={menu.additional.extra4} name="extras" value={menu.additional.extra4} type="checkbox"/>
											<label htmlFor="curry">{menu.additional.extra4}</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

								</Column>*/}

								<button onClick={() => onAdd(menu)} type="button">add to cart</button>

							</form>
						</Column>

					</Column>
				))}

			</Row>
		</Row>
	);
};

export default Menu;