const ContactPicker = ({ contacts, onChange, value, name }) => {
	return (
		<select onChange={onChange} value={value} name={name} id={`apointment-${name}`} className="select  w-full">
			<option disabled selected>
				Please choose an option
			</option>
			{contacts.map((nameOfContact, index) => {
				return (
					<option value={nameOfContact} key={`${index}-${nameOfContact}`}>
						{nameOfContact}
					</option>
				);
			})}
		</select>
	);
};

export default ContactPicker;
