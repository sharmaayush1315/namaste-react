import { CDN_URL } from '../utils/constants';
const RestaurantCard = (props) => {
	const { resData } = props;
	const {
		cloudinaryImageId,
		name,
		cuisines,
		avgRatingString,
		sla: { deliveryTime },
	} = resData?.info;
	return (
		<div className=" m-4 w-[280px] rounded-xl hover:bg-slate-200 ring-1 ring-slate-700/10 shadow-lg">
			<img
				className="p-4 rounded-3xl "
				src={CDN_URL + cloudinaryImageId}
				alt="res-img"
			/>
			<h3 className="font-bold p-2 text-lg">{name}</h3>
			<h4 className="px-2">{cuisines.join(', ')}</h4>
			<h4 className="px-2">{avgRatingString} *</h4>
			<h4 className="px-2 pb-2 ">{deliveryTime} minutes</h4>
		</div>
	);
};
export default RestaurantCard;
