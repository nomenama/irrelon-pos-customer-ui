import React, {useState} from "react";
import Row from "./Row";
import Column from "./Column";
import {fromImageToUrl} from "../utils/urls";
import {twoDecimals} from "../utils/format";
import MenuItemOption from "./MenuItemOption";

const MenuItem = ({data, addItemToBasket, selectedItemId, setSelectedItemId}) => {
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionCheckChange = (optionId) => (evt) => {
		if (!evt.target.checked) {
			const newSelectedOptions = selectedOptions.filter((filterOptionId) => filterOptionId !== optionId);
			setSelectedOptions(newSelectedOptions);
			return;
		}
		setSelectedOptions([...selectedOptions, optionId]);
	};

    return (
		<Column key={data._id} className="menuItem" onClick={() => {
			setSelectedItemId(data._id);
		}}>
			<Row className="itemRow">
				<Column className="imageColumn">
					<img src={fromImageToUrl(data.image)} alt=""/>
				</Column>

				<Column className="itemDescription">
					<Row className="menuName">
						{data.name}
					</Row>
					<Row className="menuDescription">
						{data.description}
					</Row>
					<Row className="menuPrice">
						<p>£{twoDecimals(data.price)}</p>

						<button type="button" className="addButton">
							Add
						</button>
					</Row>
				</Column>
			</Row>

			<Column className={`selectionRow ${selectedItemId === data._id ? "displayBlock" : "displayNone"}`}>
				<Row className="choicesTitle">
					Please select from the choices below
				</Row>

				<Row className="choicesItemName">
					{data.name}
				</Row>

				{Boolean(data.options) && data.options.length > 0 && <form className="choicesForm">
					<Column className="selectionColumn">
						<p>Add-On</p>
						{data.options.map((option) => <MenuItemOption key={option._id} data={option} checked={selectedOptions.includes(option._id) || false} handleOptionCheckChange={handleOptionCheckChange(option._id)} />)}
					</Column>
					<button onClick={() => addItemToBasket(data._id, selectedOptions)} type="button">add to cart</button>
				</form>}
			</Column>
		</Column>
    );
}

export default MenuItem;
