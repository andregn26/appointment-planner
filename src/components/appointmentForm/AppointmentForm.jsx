import ContactPicker from "../contactPicker/ContactPicker";

const AppointmentForm = ({
	appointmentName,
	setAppointmentName,
	appointmentContact,
	setAppointmentContact,
	appointmentDate,
	setAppointmentDate,
	appointmentTime,
	setAppointmentTime,
	handleSubmit,
	contacts,
}) => {
	const getTodayString = () => {
		const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
		return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
	};

	const contactNames = contacts.map((contact) => contact.name);
	// console.log("🚀 ~ file: AppointmentForm.jsx:25 ~ contactNames:", contactNames);

	return (
		<form className="form-control w-full flex items-center" action="#" onSubmit={handleSubmit}>
			<div className="w-full">
				<label className="label" htmlFor="appointment-name">
					<span className="label-text">Name</span>
				</label>
				<input
					required
					value={appointmentName}
					onChange={(e) => setAppointmentName(e.target.value)}
					id="appointment-name"
					type="text"
					placeholder="Type here"
					className="input w-full"
				/>
			</div>
			<div className="w-full">
				<label className="label" htmlFor="appointment-contact">
					<span className="label-text">Contact</span>
				</label>
				<ContactPicker
					contacts={contactNames}
					onChange={(e) => setAppointmentContact(e.target.value)}
					value={appointmentContact}
					name="contact"
				/>
			</div>
			<div className="w-full">
				<label className="label" htmlFor="appointment-date">
					<span className="label-text">Date</span>
				</label>
				<input
					required
					value={appointmentDate}
					onChange={(e) => setAppointmentDate(e.target.value)}
					id="appointment-date"
					min={getTodayString()}
					type="date"
					placeholder="Type here"
					className="input w-full"
				/>
			</div>
			<div className="w-full">
				<label className="label" htmlFor="appointment-time">
					<span className="label-text">Time</span>
				</label>
				<input
					required
					value={appointmentTime}
					onChange={(e) => setAppointmentTime(e.target.value)}
					id="appointment-time"
					type="time"
					placeholder="Type here"
					className="input w-full"
				/>
			</div>
			<button className="btn mt-8 btn-primary btn-block" type="submit">
				Submit
			</button>
		</form>
	);
};

export default AppointmentForm;
