import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import AppointmentPage from "./containers/appointmentPage/appointmentPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";

import "./App.css";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route index element={<AppointmentPage />} />
			<Route path="/contacts" element={<ContactsPage />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
