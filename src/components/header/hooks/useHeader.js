import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/redux/actions";
import { MOCK_USER } from "../../../constants/user.constants";

const useHeader = () => {
	const user = useAppSelector((state) => state.user.user);

	const { setUser } = useActions();

	useEffect(() => {
		setUser(MOCK_USER);
	}, []);

	return { user };
};

export default useHeader;
