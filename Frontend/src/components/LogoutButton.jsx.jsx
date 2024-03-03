import { Button } from "@chakra-ui/button";
import { useSetRecoilState } from "recoil";
import userAtom from "../../Atoms/CurrentUser";
import useShowToast from "../../Hooks/useShowToast";
import { FiLogOut } from "react-icons/fi";
import { useEffect } from "react";
import BASE_URL from "../config";
import axios from 'axios';
const LogoutButton = () => {
	const setUser = useSetRecoilState(userAtom);
	const showToast = useShowToast();

	

	const handleLogout = async () => {
		try {
			const res = await axios.post(`${BASE_URL}/logout`, {}, {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			});
	
			if (res.data.error) {
				showToast("Error", res.data.error, "error");
				return;
			}
	
			localStorage.removeItem("CurrentUser");
			setUser(null);
		} catch (error) {
			showToast("Error", error.message, "error");
		}
	};

	// const handleLogout = async () =>{
	// 	useEffect(()=>{
	// 		axios.post(`${BASE_URL}/logout`,{
	// 			withCredentials: true
	// 		}).headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// }
	// const handleLogout = async () => {
	// 	try {
	// 		const res = await fetch("/api/users/logout", {
	// 			method: "POST",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 		});
	// 		const data = await res.json();

	// 		if (data.error) {
	// 			showToast("Error", data.error, "error");
	// 			return;
	// 		}

	// 		localStorage.removeItem("CurrentUser");
	// 		setUser(null);
	// 	} catch (error) {
	// 		showToast("Error", error, "error");
	// 	}
	// };
	return (
		<Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"} onClick={handleLogout}>
			<FiLogOut size={20} />
		</Button>
	);
};

export default LogoutButton;
    