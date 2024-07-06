import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { items: [] },
	reducers: {
		addItems: (state, action) => {
			state.items.push(action.payload);
		},
		removeCurrentItem: (state, action) => {
			const itemName = action.payload?.card?.info?.name;
			const index = state.items.findIndex(
				(item) => item?.card?.info?.name == itemName
			);
			if (index > -1) {
				state.items.splice(index, 1);
			}
		},

		clearCart: (state, action) => {
			// state.items.length = 0;
			return { items: [] };
		},
	},
});

export const { addItems, clearCart, removeCurrentItem } = cartSlice.actions;
export default cartSlice.reducer;
