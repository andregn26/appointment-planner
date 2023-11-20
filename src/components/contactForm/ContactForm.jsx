const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit }) => {
	return (
		<form action="#" onSubmit={handleSubmit}>
			<div className="flex flex-col">
				<label htmlFor="name">Name</label>
				<input required value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" />
			</div>
			<div className="flex flex-col">
				<label htmlFor="phone">Phone</label>
				<input required value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" type="number" />
			</div>
			<div className="flex flex-col">
				<label htmlFor="email">Email</label>
				<input required value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="text" />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
};

export default ContactForm;
