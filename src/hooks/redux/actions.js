import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { productActions } from "../../store/slices/product.slice";
import { cartActions } from "../../store/slices/cart.slice";
import { userActions } from "../../store/slices/user.slice";
import { stateActions } from "../../store/slices/state.slice";

const actions = {
	...productActions,
	...cartActions,
	...userActions,
	...stateActions,
};

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(actions, dispatch);
};
