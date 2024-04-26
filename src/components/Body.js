import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] =
		useState(restaurantList);
	const [searchText, setSearchText] = useState('');
	const [filterButtonText, setFilterButtonText] = useState(
		'Top Rated Restaurants'
	);

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		const data = await fetch(
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6691565&lng=77.45375779999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
		);
		const readyData = await data.json();
		console.log(readyData);
		setRestaurantList(
			readyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredRestaurants(
			readyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};
	const filterFromFullList = () => {
		setFilteredRestaurants(restaurantList);
		setFilterButtonText('Top Rated Restaurants');
	};
	const filterFromFilteredList = () => {
		const filteredList = filteredRestaurants.filter(
			(elem) => elem.info.avgRating > 4
		);
		setFilteredRestaurants(filteredList);
		setFilterButtonText('Show All Restaurants');
	};

	return restaurantList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search-container">
					<input
						type="text"
						className="search-input"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className="search-btn"
						onClick={() => {
							console.log(restaurantList);
							const filteredRes = restaurantList.filter((restaurant) =>
								restaurant.info.name
									.toLowerCase()
									.includes(searchText.toLowerCase())
							);
							setFilteredRestaurants(filteredRes);
						}}
					>
						Search
					</button>
				</div>
				<div className="filter-btn-contanier">
					<button
						className="filter-btn"
						onClick={() => {
							filterButtonText === 'Top Rated Restaurants'
								? filterFromFilteredList()
								: filterFromFullList();
						}}
					>
						{filterButtonText}
					</button>
				</div>
			</div>
			<div className="res-container">
				{filteredRestaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</div>
	);
};

export default Body;
