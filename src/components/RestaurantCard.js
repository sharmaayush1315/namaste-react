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
		<div className="res-card-container">
			<div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
				<img
					className="res-img"
					src={CDN_URL + cloudinaryImageId}
					alt="res-img"
				/>
				<h3>{name}</h3>
				<h4>{cuisines.join(', ')}</h4>
				<h4>{avgRatingString} *</h4>
				<h4>{deliveryTime} minutes</h4>
			</div>
		</div>
	);
};
export default RestaurantCard;
