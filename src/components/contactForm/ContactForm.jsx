const ContactForm = ({ name, setName, phone, setPhone, email, setEmail, handleSubmit, isDuplicated }) => {
	return (
		<form className="form-control w-full flex items-center" action="#" onSubmit={handleSubmit}>
			<div className="w-full">
				<label className="label" htmlFor="name">
					<span className="label-text">Name</span>
				</label>
				<input
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
					id="name"
					type="text"
					placeholder="Type here"
					className="input w-full"
				/>
			</div>
			<div className="w-full">
				<label className="label" htmlFor="phone">
					<span className="label-text">Phone</span>
				</label>
				<input
					required
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					id="phone"
					type="number"
					placeholder="Type here"
					className="input w-full"
				/>
			</div>
			<div className="w-full">
				<label className="label" htmlFor="email">
					<span className="label-text">Email</span>
				</label>
				<input
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					id="email"
					type="text"
					placeholder="Type here"
					className="input w-full"
				/>
			</div>
			<button className="btn mt-8 btn-primary btn-block" disabled={isDuplicated} type="submit">
				Submit
			</button>
		</form>
	);
};

export default ContactForm;
