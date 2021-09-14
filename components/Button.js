import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const Button = (props) => {
	const {
		renderAs = "button",
		type = "button",
		onClick,
		label = "",
		href = "#",
		children,
		className = "",
		style,
		testId
	} = props;

	const classNames = [className];
	const finalClassName = classNames.join(" ").trim();

	if (renderAs === "link") {
		return (
			<Link href={href}>
				<a role="button" draggable="false" onClick={onClick} onKeyUp={(evt) => evt.key === "enter" && onClick(evt)} className={`button ${finalClassName}`}
					style={style} data-module="button" data-testid={testId}
				>
					{label}
					{children}
				</a>
			</Link>
		);
	}

	if (renderAs === "button") {
		return (
			<button type={type} className={`button ${finalClassName}`} style={style} data-module="button"
				onClick={onClick}>
				{label}
				{children}
			</button>
		);
	}

	return null;
};

export default Button;

Button.propTypes = {
	"children": PropTypes.node,
	"className": PropTypes.string,
	"href": PropTypes.string,
	"label": PropTypes.string,
	"onClick": PropTypes.func,
	"renderAs": PropTypes.string,
	"type": PropTypes.string,
	"testId": PropTypes.string.isRequired
};

Button.defaultProps = {
	"className": "",
	"href": "#",
	"label": "",
	"renderAs": "button",
	"type": "button"
};
