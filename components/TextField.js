import React from "react";

const TextField = (props) => {
	const {
		// eslint-disable-next-line react/prop-types
		style,
		// eslint-disable-next-line react/prop-types
		className = "",
		// eslint-disable-next-line react/prop-types
		type = "text",
		// eslint-disable-next-line react/prop-types
		placeholder = "",
		// eslint-disable-next-line react/prop-types
		value,
		// eslint-disable-next-line react/prop-types
		onChange,
		// eslint-disable-next-line react/prop-types
		pattern,
		// eslint-disable-next-line react/prop-types
		title,
		// eslint-disable-next-line react/prop-types
		required
	} = props;

	const classNames = ["textField"];
	classNames.push(className);

	const finalClassName = classNames.join(" ");

	return (
		<input type={type} pattern={pattern} title={title} className={finalClassName} style={style} placeholder={placeholder} onChange={onChange} value={value} readOnly={!onChange} required={required}/>
	);
};

export default TextField;
