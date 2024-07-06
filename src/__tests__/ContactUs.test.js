import { render, screen } from '@testing-library/react';
import ContactUs from '../components/ContactUs';
import '@testing-library/jest-dom';

test('Should load contactUs component onto the dom.', () => {
	render(<ContactUs />);
	const heading = screen.getByRole('heading');
	expect(heading).toBeInTheDocument();
});
