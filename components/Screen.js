import React from "react";
import Column from "./Column";

const Screen = (props) => {
	const {
		// eslint-disable-next-line react/prop-types
		children,
		// eslint-disable-next-line react/prop-types
		style,
		// eslint-disable-next-line react/prop-types
		className = ""
	} = props;

	const classNames = ["flex"];
	classNames.push(className);

	const finalClassName = classNames.join(" ");

	return (
		<Column className={finalClassName} style={style}>
			{children}
		</Column>
	);
};

export default Screen;
