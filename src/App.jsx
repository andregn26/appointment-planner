import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import AppointmentPage from "./containers/appointmentPage/AppointmentPage";
import ContactsPage from "./containers/contactsPage/ContactsPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
	const [contacts, setContacts] = useState([]);
	const [appointments, setAppointments] = useState([]);

	const handleAddContact = (name, phone, email) => {
		setContacts((prev) => [...prev, { name, phone, email }]);
	};

	const handleAddAppointment = (name, contact, date, time) => {
		setAppointments((prev) => [...prev, { name, contact, date, time }]);
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Navigate to="/contacts" />} />
				<Route
					path="/appointments"
					element={
						<AppointmentPage
							appointments={appointments}
							contacts={contacts}
							handleAddAppointment={handleAddAppointment}
						/>
					}
				/>
				<Route
					path="/contacts"
					element={<ContactsPage contacts={contacts} handleAddContact={handleAddContact} />}
				/>
			</Route>
		)
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
