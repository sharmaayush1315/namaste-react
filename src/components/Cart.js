import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import CartItems from './CartItems';

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((store) => store.cart.items);
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<>
			<div className=" w-6/12 m-auto text-center">
				<h1 className="p-4 m-4 font-bold text-2xl">Cart Items</h1>
				{cartItems.length == 0 ? (
					<p className="font-medium text-xl">
						Your cart is empty. Please add items to your cart.
					</p>
				) : (
					<>
						<CartItems items={cartItems} />
						<button
							onClick={handleClearCart}
							className="font-medium m-4 px-4 py-2  bg-red-600 text-white rounded-md hover:bg-red-400 shadow-md"
						>
							Clear Cart
						</button>
					</>
				)}
			</div>
		</>
	);
};
export default Cart;
