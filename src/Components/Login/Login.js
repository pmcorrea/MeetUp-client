// Modules
import React, { useState } from 'react';
import {Link} from 'react-router-dom'


// Style and static assets
import '../App/App.css';
import PrivacyEye from "../../Static Assets/eye.svg"

// Context, Service


// Components


export default function Login(props) {

	// State
	const [privacy, setPrivacy] = useState(true)
	const [login_err, setloginErr] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const changePrivacy = () => {
		let show = document.getElementById("privacy_icon_2")
		let input = document.getElementById("password")

		if (privacy === true) {
			
			setPrivacy(false)
			input.setAttribute("type", "text")
			show.style.display = "none"
		} else if (privacy === false) {
			setPrivacy(true)
			input.setAttribute("type", "password")
			show.style.display = "block"
		}

	}


	return (
		<div>
			<h1>Login</h1>

			<form>
				<div className="input-container">
					<input type="text" name="username" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
					<label htmlFor="username">Username</label>
				</div>

				<div className="input-container">
					<input type="password" name="password" placeholder="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
					<label htmlFor="password">Password</label>
					<img src={PrivacyEye} id="privacy_icon" className="privacy_icon" onClick={changePrivacy} alt="hide password button"/>
					<p id="privacy_icon_2">/</p>
				</div>

					<Link className="button" to="/login">
						Login
					</Link>

					<Link className="button" to="/">
						Cancel
					</Link>

					<div id="forgot_password">
						<Link to="/recover">
							forgot pasword
						</Link>
					</div>
			</form>

			{	
				login_err 
				? <div className="validation_box">
					<p>Hmmm...the username or password is incorrect</p>
					<img src="alert.svg" alt="" id="alert_icon" />
				</div>

				: (" ")	
			}
			
		</div>
	);
}
