import React from "react";

const Row = (props) => {
	const {
		// eslint-disable-next-line react/prop-types
		children,
		// eslint-disable-next-line react/prop-types
		style,
		// eslint-disable-next-line react/prop-types
		id,
		onClick,
		// eslint-disable-next-line react/prop-types
		className = ""
	} = props;

	const classNames = ["row"];
	classNames.push(className);

	const finalClassName = classNames.join(" ");

	return (
		<div className={finalClassName} style={style} id={id} onClick={onClick}>
			{children}
		</div>
	);
};

export default Row;
