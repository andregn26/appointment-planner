import { useEffect, useState } from "react";
import TileList from "../../components/tileList/TileList";
import ContactForm from "../../components/contactForm/ContactForm";
import { ToastContainer, toast } from "react-toastify";

const ContactsPage = ({ contacts, handleAddContact }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [isDuplicated, setIsDuplicated] = useState(false);

	useEffect(() => {
		const isDuplicate = contacts.some((contact) => contact.name === name);
		if (isDuplicate) {
			setIsDuplicated(true);
		}
		console.log("render");
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isDuplicated) {
			handleAddContact(name, phone, email);
			const notify = () =>
				toast.success("Contact Created!", {
					position: toast.POSITION.BOTTOM_RIGHT,
				});
			notify();
			setName("");
			setPhone("");
			setEmail("");
		} else {
			const notify = () =>
				toast.error("Contact already exist!", {
					position: toast.POSITION.BOTTOM_RIGHT,
				});
			notify();
			setName("");
		}
	};

	return (
		<div>
			<section>
				<h2>Add Contact</h2>
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
				/>
			</section>
			<hr />
			<section>
				<h2>Contacts</h2>
				{contacts.map((contact) => {
					return <TileList key={contact.name} data={contact} />;
				})}
			</section>
			<ToastContainer />
		</div>
	);
};

export default ContactsPage;
