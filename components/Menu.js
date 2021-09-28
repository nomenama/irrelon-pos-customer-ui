import React, {useState} from "react";
import Row from "./Row";
import MenuItem from "./MenuItem";

const Menu = (props) => {
	const {menuItems, selectedItemId, setSelectedItemId, addItemToBasket} = props;
	const [selectedOptions, setSelectedExtras] = useState({});

	const handleOptionChecked = (extraId) => (evt) => {
		if (!evt.target.checked) {
			const newExtras = {
				...selectedOptions
			};

			delete newExtras[extraId];

			setSelectedExtras(newExtras);
			return;
		}
		setSelectedExtras({
			...selectedOptions,
			[extraId]: evt.target.checked
		});
	};

	return (
		<Row className="menu">
			<Row className="container">
				{menuItems.map((menuItem) => (
					<MenuItem key={menuItem._id} data={menuItem} addItemToBasket={addItemToBasket} setSelectedItemId={setSelectedItemId} />
				))}
			</Row>
		</Row>
	);
};

export default Menu;