import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Shimmer from './Shimmer';
import { CLOUDINARY_IMAGE_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
	const [activeIndex, setActiveIndex] = useState(-1);
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);
	if (resInfo === null) return <Shimmer />;
	const handleIndex = (index) => {
		console.log(index);
		if (index == activeIndex) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};
	const { name, cloudinaryImageId, cuisines } =
		resInfo?.cards[2]?.card?.card?.info;

	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(item) =>
				item?.card?.card?.['@type'] ===
				'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
		);
	console.log('categories', categories);
	return (
		<div className="bg-pink-50 text-center	 flex justify-evenly">
			<div className="py-2 w-4/12 my-6 shadow-md bg-blue-50 border-solid truncate">
				<h1 className="font-bold  text-2xl mb-3">{name}</h1>
				<div className="flex justify-center ">
					{' '}
					<img
						className="w-[300px] text-center rounded-lg "
						src={CLOUDINARY_IMAGE_URL + cloudinaryImageId}
					/>
				</div>
				<h1 className="font-bold my-1 text-lg">{cuisines.join(', ')}</h1>
			</div>
			<div className="py-2 w-4/12 mr-[160px] ">
				<h1 className="text-xl font-bold">Menu</h1>
				{categories.map((category, index) => (
					<RestaurantCategory
						showList={index === activeIndex ? true : false}
						key={category?.card?.card?.title}
						data={category?.card?.card}
						setActiveIndex={() => handleIndex(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
