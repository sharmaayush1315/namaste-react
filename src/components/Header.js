import LOGO_URL from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useContext } from 'react';
import { UserContext } from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontAwesomeConfig';
const Header = () => {
	const cartIems = useSelector((store) => {
		return store.cart.items;
	});
	// console.log(cartIems);
	const onlineStatus = useOnlineStatus();
	const { loggedUser } = useContext(UserContext);
	return (
		<div className="flex justify-between shadow-lg h-28 mb-2 bg-blue-50">
			<div className="logo-container">
				<img name="logo-img" className="h-28" src={LOGO_URL} />
			</div>
			<div className="self-center">
				<ul className="flex m-4 p-4 ">
					<li className="px-4  py-2  m-2  text-xl  ring-1  ring-slate-200  bg-slate-100 shadow-xl  rounded-md ">
						Online Status:{' '}
						<span className="online-status">{onlineStatus ? '🟢' : '🔴'}</span>
					</li>
					<li className="px-4  py-2  m-2 text-xl ring-1 ring-slate-200  bg-slate-100 shadow-xl  rounded-md">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4  py-2  m-2 text-xl  ring-1 ring-slate-200 bg-slate-100 shadow-xl rounded-md">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4 py-2  m-2  text-xl ring-1 ring-slate-200  bg-slate-100 shadow-xl rounded-md">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4 py-2 m-2  cursor-pointer relative flex items-center justify-center">
						<Link to="/cart">
							<FontAwesomeIcon
								className="text-3xl"
								icon="fa-solid fa-cart-shopping "
							/>
							<span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
								{cartIems.length}
							</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
