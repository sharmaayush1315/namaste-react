import { render, screen } from '@testing-library/react';
import ContactUs from '../components/ContactUs';
import '@testing-library/jest-dom';

test('Should load contactUs component onto the dom.', () => {
	render(<ContactUs />);
	const heading = screen.getByRole('heading');
	expect(heading).toBeInTheDocument();
});

test('Should load button inside ContactUs component.', () => {
	render(<ContactUs />);
	const button = screen.getByText('Submit');
	expect(button).toBeInTheDocument();
});
test('Should load input name inside ContactUs component.', () => {
	render(<ContactUs />);
	const inputName = screen.getByPlaceholderText('Enter your name');
	expect(inputName).toBeInTheDocument();
});
test('Should load 3 input noxes inside ContactUs component.', () => {
	render(<ContactUs />);
	const inputBoxes = screen.getAllByRole('textbox');
	expect(inputBoxes.length).toBe(4);
});
