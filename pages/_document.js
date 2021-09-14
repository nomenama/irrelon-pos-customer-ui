import Document, {Html, Head, Main, NextScript} from "next/document";
import React from "react";
import NoScript from "../components/NoScript";

class MyDocument extends Document {
	static async getInitialProps (ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render () {
		const BASE_PATH = process.env.BASE_PATH || "";
		return (
			<Html lang="en">

				<Head>
					<meta charSet="utf-8"/>
{/*					<title>Irrelon Pay</title>
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>*/}
					<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
					<link rel="shortcut icon" sizes="16x16 32x32 48x48" href={`${BASE_PATH}/favicon.ico`} type="image/x-icon"/>
					<meta property="og:image" content={`${BASE_PATH}/assets/logoColour.png`}/>
				</Head>

				<body className="appBody jsDisabled">
					<NoScript/>
					<Main/>
					<NextScript/>
				</body>
			</Html>
		);
	}
}

export default MyDocument;