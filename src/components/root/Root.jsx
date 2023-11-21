import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Root = () => {
	return (
		<>
			<Header />
			<div className="flex justify-center">
				<div className="w-full min-h-screen mx-4 sm:mx-8 lg:mx-24 max-w-5xl">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Root;
