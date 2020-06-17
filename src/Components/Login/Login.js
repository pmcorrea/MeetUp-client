// Modules
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { login } from '../../Queries/queries'


// Style and static assets
import "../App/App.css";
import PrivacyEye from "../../Static Assets/eye.svg";
import Alert from "../../Static Assets/alert.svg";

// Context, Service
import TokenHelpers from '../../Services/token-helpers';


// Components

export default function Login(routeProps) {
	// State
	const [privacy, setPrivacy] = useState(true);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	let errState = false

	const changePrivacy = () => {
		let show = document.getElementById("privacy_icon_2");
		let input = document.getElementById("password");

		if (privacy === true) {
			setPrivacy(false);
			input.setAttribute("type", "text");
			show.style.display = "none";
		} else if (privacy === false) {
			setPrivacy(true);
			input.setAttribute("type", "password");
			show.style.display = "block";
		}
	};

	const [loadUser, { loading, data, error }] = useLazyQuery(login);

	error ? errState = true : errState = false

	if (loading) {

	} else if (data) {
		TokenHelpers.clearAuthToken()
		TokenHelpers.saveAuthToken(data["login"]["token"])
		routeProps.history.push("/home")		
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		loadUser(
			{
				variables: {
					user_name: username,
					password: password
				},
				onError: (err) => {
					console.log('Error has occured.')
				}
			}
		)
	}

	return (
		<div>
			<h1>Login</h1>

			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="input-container">
					<input
						type="text"
						name="username"
						placeholder="username"
						onChange={(e) => setUsername(e.target.value)}
					/>
					<label htmlFor="username">Username</label>
				</div>

				<div className="input-container">
					<input
						type="password"
						name="password"
						placeholder="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<label htmlFor="password">Password</label>
					<img
						src={PrivacyEye}
						id="privacy_icon"
						className="privacy_icon"
						onClick={changePrivacy}
						alt="hide password button"
					/>
					<p id="privacy_icon_2">/</p>
				</div>

				<button type="submit" className="button">
					Login
				</button>
				{/* <Link className="button" to="/login">
					Login
				</Link> */}

				<Link className="button" to="/">
					Cancel
				</Link>

				<div id="forgot_password">
					<Link to="/recover">forgot pasword</Link>
				</div>
			</form>

			{errState ? (
				<div className="validation_box">
					<p>Hmmm...the username or password is incorrect</p>
					<img src={Alert} alt="" id="alert_icon" />
				</div>
			) : (
				" "
			)}
		</div>
	);
}
