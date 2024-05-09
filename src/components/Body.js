import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';

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
			'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6399344&lng=77.3688489&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
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
	const onlineStatus = useOnlineStatus();

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
	if (onlineStatus === false)
		return (
			<div>
				<h1>
					Looks like you are offline, please check your internet connection
				</h1>
			</div>
		);
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
					<Link
						to={`/restaurant/${restaurant.info.id}`}
						key={restaurant.info.id}
					>
						<RestaurantCard resData={restaurant} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
