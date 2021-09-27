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

									<p>Extra</p>

									{/*<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="tea" name="extra" value="tea"/>
											<label htmlFor="tea">Thai Tea (Ice-Optional)</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="plainRice" name="extra" value="plain Rice"/>
											<label htmlFor="plainRice">Plain Jasmine Rice</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="water" name="extra" value="Mineral water"/>
											<label htmlFor="water">Mineral Water</label>
										</span>
										<span className="itemPrice">
												+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="coke" name="extra" value="coke"/>
											<label htmlFor="coke">Coke</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input type="radio" id="sprite" name="extra" value="sprite"/>
											<label htmlFor="sprite">Sprite</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>*/}

								</Column>


															<Column className="selectionColumn">

									<p>Extras</p>

									<Row className="itemSelection">
										<span className="itemName">
											<input id={menu.additional.extra1} name="extras" value={menu.additional.extra1} type="radio"/>
											<label htmlFor={menu.additional.extra1}>{menu.additional.extra1}</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id={menu.additional.extra2} name="extras" value={menu.additional.extra2} type="radio"/>
											<label htmlFor={menu.additional.extra2}>{menu.additional.extra2}</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id={menu.additional.extra3} name="extras" value={menu.additional.extra3} type="radio"/>
											<label htmlFor={menu.additional.extra3}>{menu.additional.extra3}</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

									<Row className="itemSelection">
										<span className="itemName">
											<input id={menu.additional.extra4} name="extras" value={menu.additional.extra4} type="radio"/>
											<label htmlFor={menu.additional.extra4}>{menu.additional.extra4}</label>
										</span>
										<span className="itemPrice">
											+ £{twoDecimals(1.5)}
										</span>
									</Row>

								</Column>

								<button onClick={() => (onAdd(menu), setActiveId(activeId === index ? -1 : index))} type="button">add to cart</button>

							</form>
						</Column>

					</Column>
				))}

			</Row>
		</Row>
	);
};

export default Menu;