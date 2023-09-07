import React, { useContext, useState ,useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";


export const Private = () => {
	const { store, actions } = useContext(Context);
	const [email , setEmail] = useState("")
	const navigate = useNavigate();

	const token = localStorage.getItem("token");

	useEffect(() => {
		const gettingInfo = async () => {
			const response = await fetch(
			  "https://zany-robot-ww7xpw64q6r3gxg6-3001.app.github.dev/private",
			  {
				method: "GET",
				headers: {
				  "Content-Type": "application/json",
				  Authorization: `Bearer ${token}`,
				},
			  }
			);
	
			const data = await response.json();
			setEmail(data.email)
			console.log(data.email, "This is the email of the user")
		  };
	
		  gettingInfo()
		  }, [])
	
	  return (
		<div className="text-center mt-5">
		  {token ? (
			<div>
			  <h1>U are now on private</h1>
			</div>
		  ) : (
			navigate("/")
		  )}
		</div>
	  );
	};
	