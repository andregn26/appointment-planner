/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import AppointmentForm from "../../components/appointmentForm/AppointmentForm";
import TileList from "../../components/tileList/TileList";

const AppointmentPage = ({ appointments, contacts, handleAddAppointment }) => {
	const [appointmentName, setAppointmentName] = useState("");
	const [appointmentContact, setAppointmentContact] = useState("");
	const [appointmentDate, setAppointmentDate] = useState("");
	const [appointmentTime, setAppointmentTime] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		handleAddAppointment(appointmentName, appointmentContact, appointmentDate, appointmentTime);
	};

	return (
		<div className=" my-24 flex flex-col md:flex-row gap-4">
			<section className="bg-base-200 rounded-3xl p-8 mb-8 md:mb-0 md:max-w-xs w-full">
				<h2 className="text-center font-bold text-2xl mb-8">Add Appointment</h2>
				<AppointmentForm
					appointmentName={appointmentName}
					setAppointmentName={setAppointmentName}
					appointmentContact={appointmentContact}
					setAppointmentContact={setAppointmentContact}
					appointmentDate={appointmentDate}
					setAppointmentDate={setAppointmentDate}
					appointmentTime={appointmentTime}
					setAppointmentTime={setAppointmentTime}
					handleSubmit={handleSubmit}
					contacts={contacts}
				/>
			</section>
			<hr />
			<section className=" bg-base-200 rounded-3xl p-8 mt-8 md:mt-0 w-full">
				<h2 className="text-center font-bold text-2xl">Appointments</h2>
				{appointments.length === 0 ? (
					<p className="text-center h-full flex items-center justify-center">
						You don't have any appointment yet. Fill the form to create your first appointment!
					</p>
				) : (
					<TileList data={appointments} />
				)}
			</section>
		</div>
	);
};

export default AppointmentPage;
