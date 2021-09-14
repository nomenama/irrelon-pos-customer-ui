import "../styles/css/index.css";
import React from "react";

function MyApp ({Component, pageProps}) {
	React.useEffect(() => {
		document.body.className = document.body.className ? document.body.className.replace("jsDisabled", "") : "";
		document.body.className = document.body.className ? document.body.className + " jsEnabled" : "jsEnabled";
	}, []);

	return <Component {...pageProps} />;

}

export default MyApp;
