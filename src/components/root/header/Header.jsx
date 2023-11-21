import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<>
			<header className="drawer fixed">
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content flex flex-col">
					{/* Navbar */}
					<div className="w-full navbar bg-base-300">
						<div className="flex-none lg:hidden">
							<label
								htmlFor="my-drawer-3"
								aria-label="open sidebar"
								className="btn btn-square btn-ghost">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"></path>
								</svg>
							</label>
						</div>
						<div className="flex-1 px-2 mx-2">
							<h1 className="font-bold">
								CONTACT<span className="text-primary tracking-wider">PLANNER</span>
							</h1>
						</div>
						<div className="flex-none hidden lg:block">
							<nav className="flex gap-4 menu menu-horizontal">
								<NavLink
									to="/contacts"
									className={({ isActive }) =>
										isActive
											? "text-primary underline-offset-8 font-bold tracking-wider"
											: "font-semibold tracking-wider"
									}>
									Contacts
								</NavLink>
								<NavLink
									to="/appointments"
									className={({ isActive }) =>
										isActive
											? "text-primary underline-offset-8 font-bold tracking-wider"
											: "font-semibold tracking-wider"
									}>
									Appointments
								</NavLink>
							</nav>
						</div>
					</div>
				</div>
				<div className="drawer-side">
					<label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
					<nav className="menu p-4 w-80 min-h-full bg-base-200">
						{/* Sidebar content here */}
						<NavLink
							to="/contacts"
							className={({ isActive }) =>
								isActive
									? "text-primary underline-offset-8 font-bold tracking-wider"
									: "font-semibold tracking-wider"
							}>
							Contacts
						</NavLink>
						<NavLink
							to="/appointments"
							className={({ isActive }) =>
								isActive
									? "text-primary underline-offset-8 font-bold tracking-wider"
									: "font-semibold tracking-wider"
							}>
							Appointments
						</NavLink>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Header;
