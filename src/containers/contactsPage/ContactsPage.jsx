/* eslint-disable react/no-unescaped-entities */
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
		} else {
			setIsDuplicated(false);
		}
	}, [contacts, name]);

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
		<div className=" my-24 flex flex-col md:flex-row gap-4">
			<section className="bg-base-200 rounded-3xl p-8 mb-8 md:mb-0 md:max-w-xs w-full">
				<h2 className="text-center font-bold text-2xl mb-8">Add Contact</h2>
				<ContactForm
					name={name}
					setName={setName}
					phone={phone}
					setPhone={setPhone}
					email={email}
					setEmail={setEmail}
					handleSubmit={handleSubmit}
					isDuplicated={isDuplicated}
				/>
				{isDuplicated ? <p>This name already exists!</p> : null}
			</section>
			<hr />
			<section className=" bg-base-200 rounded-3xl p-8 mt-8 md:mt-0 w-full">
				<h2 className="text-center font-bold text-2xl">Contacts</h2>
				{contacts.length === 0 ? (
					<p className="text-center h-full flex items-center justify-center">
						You don't have any contacts yet. Fill the form to create your first contact!
					</p>
				) : (
					<TileList data={contacts} />
				)}
			</section>
			<ToastContainer theme="dark" autoClose={3000} />
		</div>
	);
};

export default ContactsPage;
