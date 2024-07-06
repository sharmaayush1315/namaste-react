import { CLOUDINARY_IMAGE_URL } from '../utils/constants';
const CartItems = ({ items }) => {
	return (
		<>
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
										₹{' '}
										{item?.card?.info?.price || item?.card?.info?.defaultPrice}
									</span>
								</div>
								<p className="text-xs">{item?.card?.info?.description}</p>
							</div>
							<div className="flex flex-col ">
								<img
									className="w-[100px] h-[80px] object-cover rounded-lg shadowlg"
									src={CLOUDINARY_IMAGE_URL + item?.card?.info?.imageId}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default CartItems;
