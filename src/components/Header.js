import LOGO_URL from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
const Header = () => {
	const onlineStatus = useOnlineStatus();
	return (
		<div className="flex justify-between shadow-lg h-28 mb-2  ">
			<div className="logo-container">
				<img className="h-28" src={LOGO_URL} />
			</div>
			<div className="self-center">
				<ul className="flex m-4 p-4 ">
					<li className="px-4  text-xl ">
						Online Status:{' '}
						<span className="online-status">{onlineStatus ? '🟢' : '🔴'}</span>
					</li>
					<li className="px-4 text-xl font-siz">
						<Link to="/">Home</Link>
					</li>
					<li className="px-4 text-xl font-siz">
						<Link to="/about">About Us</Link>
					</li>
					<li className="px-4 text-xl font-siz">
						<Link to="/contact">Contact Us</Link>
					</li>
					<li className="px-4 text-xl font-siz">Cart</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
