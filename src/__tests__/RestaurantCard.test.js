import RestaurantCard from '../components/RestaurantCard';
import { render, screen } from '@testing-library/react';
import MOCK_DATA from '../mocks/restaurantData.json';
import '@testing-library/jest-dom';

test('should render restaurant card with props', () => {
	render(<RestaurantCard resData={MOCK_DATA} />);
	const name = screen.getByText('Pizza');
	expect(name).toBeInTheDocument();
});
