import { useDispatch } from 'react-redux';
import { CLOUDINARY_IMAGE_URL } from '../utils/constants';
import { addItems, removeCurrentItem } from '../redux/cartSlice';

const CategoryList = ({ items }) => {
	console.log(items, 'items');
	const dispatch = useDispatch();
	const handleAdd = (item) => {
		dispatch(addItems(item));
	};
	const handleRemove = (item) => {
		dispatch(removeCurrentItem(item));
	};
	return (
		<div>
			<div>
				{items.map((item) => (
					<div
						key={item?.card?.info?.id}
						className="p-2 m-2 border-b-2 text-left flex justify-between shadow-md bg-blue-200 bg-opacity-35  hover:bg-blue-50 rounded-md"
					>
						<div>
							<div className="flex flex-col">
								<span>{item?.card?.info?.name}</span>
								<span className="text-sm">
									₹ {item?.card?.info?.price || item?.card?.info?.defaultPrice}
								</span>
							</div>
							<p className="text-xs">{item?.card?.info?.description}</p>
						</div>
						<div className="flex flex-col ">
							<img
								className="w-[100px] h-[80px] object-cover rounded-lg shadowlg"
								src={CLOUDINARY_IMAGE_URL + item?.card?.info?.imageId}
							/>
							<button
								onClick={() => handleAdd(item)}
								className="mt-2 mb-2 px-2 py-1 rounded-md shadow-md bg-red-500 hover:bg-red-700 text-white"
							>
								Add
							</button>
							<button
								onClick={() => handleRemove(item)}
								className="mb-2 px-2 py-1 rounded-md shadow-md bg-slate-400 hover:bg-slate-600 text-white"
							>
								Remove
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
