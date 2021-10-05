import React from "react";
import Row from "./Row";
import MenuItem from "./MenuItem";

const Menu = (props) => {
	const {menuItems, selectedItemId, setSelectedItemId, addItemToBasket} = props;

	return (
		<Row className="menu">
			<Row className="container">
				{menuItems.map((menuItem) => (
					<MenuItem key={menuItem._id} data={menuItem} addItemToBasket={addItemToBasket} selectedItemId={selectedItemId} setSelectedItemId={setSelectedItemId}/>
				))}
			</Row>
		</Row>
	);
};

export default Menu;