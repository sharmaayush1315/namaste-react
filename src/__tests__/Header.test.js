import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../redux/appStore';
import { BrowserRouter } from 'react-router-dom';

it('Should load header component with logo image', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const logoImage = screen.getByRole('img', { name: '' });
	expect(logoImage).toBeInTheDocument();
});
it('Should load online status', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const onlineStatus = screen.getByText('Online Status:');
	expect(onlineStatus).toBeInTheDocument();
});
it('Should load home a link ', () => {
	render(
		<BrowserRouter>
			<Provider store={appStore}>
				<Header />
			</Provider>
		</BrowserRouter>
	);

	const homeAnchor = screen.getByRole('link', { name: 'Home' });
	expect(homeAnchor).toBeInTheDocument();
});
