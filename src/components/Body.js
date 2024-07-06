import RestaurantCard, { isOpen } from './RestaurantCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import { RESTAURANT_API } from '../utils/constants';

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
	// console.log(restaurantList);
	const fetchData = async () => {
		const data = await fetch(RESTAURANT_API);
		const readyData = await data.json();
		// console.log(readyData);
		setRestaurantList(
			readyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
		setFilteredRestaurants(
			readyData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants
		);
	};
	// const updateData = async () => {
	// 	let postData = {
	// 		lat: '28.6399344',
	// 		lng: '77.3688489',
	// 		nextOffset: 'COVCELQ4KICw1Pib9+ubSDCnEzgE',
	// 		page_type: 'DESKTOP_WEB_LISTING',
	// 		seoParams: {
	// 			seoUrl: 'https://www.swiggy.com/',
	// 			pageType: 'FOOD_HOMEPAGE',
	// 			apiName: 'FoodHomePage',
	// 		},
	// 		widgetOffset: {
	// 			NewListingView_category_bar_chicletranking_TwoRows: '',
	// 			NewListingView_category_bar_chicletranking_TwoRows_Rendition: '',
	// 			Restaurant_Group_WebView_PB_Theme: '',
	// 			Restaurant_Group_WebView_SEO_PB_Theme: '',
	// 			collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: '55',
	// 			inlineFacetFilter: '',
	// 			restaurantCountWidget: '',
	// 		},
	// 		_csrf: '2fAGv7ZHuRzR-hMPeUhN6cLSgCaWYuIYViDPunz4',
	// 	};
	// 	const data = await fetch(
	// 		'https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/update',
	// 		{
	// 			method: 'POST',
	// 			mode: 'cors',
	// 			credentials: 'omit',
	// 			headers: {
	// 				'X-Insert-Key': 'CPDMQSXvjxGCdL_E02P9eZ-NJcEg-uGk',
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify(postData),
	// 		}
	// 	);
	// 	const json = await data.json();
	// 	setUpdatedList(json);
	// };
	// const cors = () => {
	// 	(function () {
	// 		var cors_api_host = 'cors-anywhere.herokuapp.com';
	// 		var cors_api_url = 'https://' + cors_api_host + '/';
	// 		var slice = [].slice;
	// 		var origin = window.location.protocol + '//' + window.location.host;
	// 		var open = XMLHttpRequest.prototype.open;
	// 		XMLHttpRequest.prototype.open = function () {
	// 			var args = slice.call(arguments);
	// 			var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
	// 			if (
	// 				targetOrigin &&
	// 				targetOrigin[0].toLowerCase() !== origin &&
	// 				targetOrigin[1] !== cors_api_host
	// 			) {
	// 				args[1] = cors_api_url + args[1];
	// 			}
	// 			return open.apply(this, args);
	// 		};
	// 	})();
	// };
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
	const OpenRestaurant = isOpen(RestaurantCard);

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
		<div className="bg-pink-50">
			<div className="flex justify-between">
				<div className="p-4 m-4 ml-[80px] self-center">
					<button
						className="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-lg ring-1 ring-slate-700/10 bg-slate-200 hover:bg-slate-100"
						onClick={() => {
							filterButtonText === 'Top Rated Restaurants'
								? filterFromFilteredList()
								: filterFromFullList();
						}}
					>
						{filterButtonText}
					</button>
				</div>
				<div className="p-4 m-4">
					<input type="text" className="border border-solid border-black" />
				</div>
				<div className="search-container mr-[80px] p-4 m-4">
					<input
						type="text"
						className="border border-solid border-black"
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					/>
					<button
						className=" mx-2 pointer-events-auto rounded-md bg-indigo-600 px-5 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
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
			</div>
			<div className="flex flex-wrap pl-[60px]">
				{filteredRestaurants.map((restaurant) => (
					<Link
						to={`/restaurant/${restaurant.info.id}`}
						key={restaurant.info.id}
					>
						{restaurant.info.isOpen ? (
							<OpenRestaurant resData={restaurant} />
						) : (
							<RestaurantCard resData={restaurant} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
