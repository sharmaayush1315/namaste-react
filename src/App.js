import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
// import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
const About = lazy(() => import('./components/About'));
const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
			<Outlet />
		</div>
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
			{ path: '/contact', element: <Contact /> },
			{ path: '/restaurant/:resId', element: <RestaurantMenu /> },
		],
		errorElement: <Error />,
	},
]);

root.render(<RouterProvider router={appRouter} />);
