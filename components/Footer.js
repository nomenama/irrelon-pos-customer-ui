import React from "react";
import Row from "./Row";
import Column from "./Column";
import Link from "next/link";

const Footer = () => {

	return (

		<footer className="footer">

			<Row className="container">
				<Column className="copyright">
					©{new Date().getFullYear()} All right reserved.
				</Column>

				<Column className="loginSection">
					<Link href="/">
						<a>
							Sign In{/*<span className="fal fa-sign-in-alt fa-2x"/>*/}
						</a>
					</Link>
				</Column>
			</Row>
		</footer>
	);
};

export default Footer;