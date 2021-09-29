import {twoDecimals} from "../utils/format";
import Row from "./Row";
import React from "react";

const MenuItemOption = (props) => {

	const {data, checked, handleOptionCheckChange} = props;
	return (
		<Row className="itemSelection">
			<span className="itemName">
				<input id={data._id} name={`option_${data._id}`} value={data._id} checked={checked} onChange={handleOptionCheckChange} type="checkbox"/>
				<label htmlFor={data._id}>{data.name}</label>
			</span>
			<span className="itemPrice">+ £{twoDecimals(data.price)}</span>
		</Row>
	);
}

export default MenuItemOption;