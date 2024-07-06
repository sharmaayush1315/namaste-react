import CategoryList from './CategoryList';

const RestaurantCategory = ({ data, showList, setActiveIndex }) => {
	// const [showList, setShowList] = useState(false);
	function handleClick() {
		setActiveIndex();
	}
	return (
		<div>
			<div className=" font-semibold rounded-md w-full bg-blue-50 mx-auto my-4 p-4 cursor-pointer shadow-md ring-2 ring-zinc-200">
				<div className="flex justify-between" onClick={handleClick}>
					<span className="text-lg font-bold">
						{data.title} ({data.itemCards.length})
					</span>
					<span>↕</span>
				</div>
				<div>{showList && <CategoryList items={data.itemCards} />}</div>
			</div>
		</div>
	);
};

export default RestaurantCategory;
