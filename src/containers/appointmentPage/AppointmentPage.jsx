import { useState } from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

const AppointmentPage = ({ appointments, contacts, handleAddAppointment }) => {
	return (
		<div>
			<section>
				<h2>Add Appointment</h2>
				<AppointmentForm />
			</section>
			<hr />
			<section>
				<h2>Appointments</h2>
				{/* <TileList /> */}
			</section>
		</div>
	);
};

export default AppointmentPage;
