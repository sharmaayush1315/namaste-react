import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {
	const { resId } = useParams();
	console.log(resId);
	const resInfo = useRestaurantMenu(resId);

	if (resInfo === null) return <Shimmer />;

	const { name, cloudinaryImageId, costForTwoMessage, cuisines } =
		resInfo?.cards[2]?.card?.card?.info;
	const { itemCards } =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
	console.log(resInfo);
	return (
		<div className="menu">
			<h1>{name}</h1>
			<img />
			<h2>Menu</h2>
			<div>
				<ul>
					{itemCards.map((item) => (
						<li key={item?.card?.info?.id}>
							{item?.card?.info?.name} for ̥̥₹
							{item?.card?.info?.price / 100 ||
								item?.card?.info?.defaultPrice / 100}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantMenu;
