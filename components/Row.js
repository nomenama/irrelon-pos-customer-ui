import React from "react";
import PropTypes from "prop-types";

const Row = (props) => {
	const {
		children,
		style,
		id,
		onClick,
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

Row.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func,
	style: PropTypes.object
};

Row.defaultProps = {
	className: ""
};