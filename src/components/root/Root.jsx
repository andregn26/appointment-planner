import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
	return (
		<nav className="bg-slate-900 text-white flex gap-4 py-4 justify-center">
			<NavLink to="/contacts">Contacts</NavLink>
			<NavLink to="/appointments">Appointments</NavLink>
		</nav>
	);
};

const Root = () => {
	return (
		<>
			<Header />
			<div>
				<h1>ROOT</h1>
				<Outlet />
			</div>
		</>
	);
};

export default Root;
