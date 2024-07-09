import { useContext } from 'react';
import { CDN_URL } from '../utils/constants';
import { UserContext } from '../utils/UserContext';
const RestaurantCard = (props) => {
	const { loggedUser } = useContext(UserContext);
	const { resData } = props;
	console.log(resData);
	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRatingString,
		sla: { deliveryTime },
	} = resData?.info;
	return (
		<div className=" m-4 w-[280px] bg-blue-50  hover:bg-slate-200 ring-1 rounded-3xl ring-slate-700/10 shadow-lg">
			<img
				className="p-3 rounded-3xl "
				src={CDN_URL + cloudinaryImageId}
				alt="res-img"
			/>
			<h3 className="font-bold p-2 text-lg">{name}</h3>
			<h4 className="px-2">{cuisines.join(', ')}</h4>
			<h4 className="px-2">{avgRatingString} *</h4>
			<h4 className="px-2 pb-2 ">{deliveryTime} minutes</h4>
			<h4 className="px-2 pb-2 ">User: {loggedUser} </h4>
		</div>
	);
};

export const isOpen = (RestaurantCard) => {
	return (props) => {
		return (
			<div className="relative ">
				<label className=" absolute  text-center font-medium left-2 top-[-10px] px-2 bg-red-400 text-black p-1 rounded-md">
					Open now
				</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};
export default RestaurantCard;
