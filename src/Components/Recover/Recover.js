import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import Alert from "../../Static Assets/alert.svg"

export default function Recover(props) {
	const [sent, setSent] = useState(false);

	return (
		<>
			<h1>Recover</h1>

			<form>
				<div className="input-container">
					<input type="text" name="username" placeholder="username" />
					<label htmlFor="username">Email</label>
				</div>

				<button className="button">Send</button>

				<Link to="/login" className="button">
					Go Back
				</Link>
			</form>

			{sent ? (
				<div className="validation_box">
					<p>Check your inbox!</p>
					<img src={Alert} alt="" id="alert_icon" />
				</div>
			) : (
				""
			)}
		</>
	);
}