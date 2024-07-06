import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
import { UserContext } from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './redux/appStore.js';
import Cart from './components/Cart.js';
const About = lazy(() => import('./components/About'));
const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
	const [userName, setUserName] = useState('');
	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedUser: 'Ayush' }}>
				<div className="">
					<Header />
					<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
	);
};
const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ path: '/', element: <Body /> },
			{
				path: '/about',
				element: (
					<Suspense fallback={<Shimmer />}>
						{' '}
						<About />
					</Suspense>
				),
			},
			{ path: '/contact', element: <ContactUs /> },
			{ path: '/restaurant/:resId', element: <RestaurantMenu /> },
			{ path: '/cart/', element: <Cart /> },
		],
		errorElement: <Error />,
	},
]);

root.render(<RouterProvider router={appRouter} />);
