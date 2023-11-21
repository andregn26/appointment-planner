import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
	return (
		<nav className="fixed top-0 w-full bg-neutral flex gap-4 py-4 justify-center">
			<NavLink to="/contacts">Contacts</NavLink>
			<NavLink to="/appointments">Appointments</NavLink>
		</nav>
	);
};

const Root = () => {
	return (
		<>
			<Header />
			<div className="flex justify-center">
				<div className="w-full min-h-screen mx-4 sm:mx-8 lg:mx-24 max-w-5xl">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Root;
