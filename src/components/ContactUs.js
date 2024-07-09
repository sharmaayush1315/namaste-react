import React, { useState } from 'react';

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const [formErrors, setFormErrors] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Validate form fields here (example: basic email validation)
		let errors = {};
		if (!formData.name) {
			errors.name = 'Name is required';
		}
		if (!formData.email) {
			errors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Email is invalid';
		}
		if (!formData.phone) {
			errors.phone = 'Phone number is required';
		} else if (!/^[0-9]{10}$/.test(formData.phone)) {
			errors.phone = 'Phone number is invalid';
		}
		if (!formData.message) {
			errors.message = 'Message is required';
		}
		// Set form errors, or submit form if no errors
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
		} else {
			// Submit form logic here (e.g., send data to backend)
			console.log('Form submitted:', formData);
			// Reset form after submission
			setFormData({
				name: '',
				email: '',
				phone: '',
				message: '',
			});
			setFormErrors({
				name: '',
				email: '',
				phone: '',
				message: '',
			});
		}
	};

	return (
		<div className="max-w-lg mt-10 mx-auto p-8 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Enter your name"
						value={formData.name}
						onChange={handleChange}
						className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 ${
							formErrors.name ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{formErrors.name && (
						<p className="text-xs text-red-500 mt-1">{formErrors.name}</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 ${
							formErrors.email ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{formErrors.email && (
						<p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="phone"
						className="block text-sm font-medium text-gray-700"
					>
						Phone Number
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 ${
							formErrors.phone ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{formErrors.phone && (
						<p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-sm font-medium text-gray-700"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						rows="4"
						className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 ${
							formErrors.message ? 'border-red-500' : 'border-gray-300'
						}`}
					/>
					{formErrors.message && (
						<p className="text-xs text-red-500 mt-1">{formErrors.message}</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactUs;
