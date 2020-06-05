import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../App/App.css'

import PrivacyEye from "../../Static Assets/eye.svg"

export default function Register(props) {

	const [privacy, setPrivacy] = useState(true);
	const [privacy_confirm, setPrivacy_confirm] = useState(true);
	const [username_err, setUsername_err] = useState(false);
	const [password_match_err, setPassword_match_err] = useState(false);
	const [zipcode_err, setZipcode_err] = useState(false);
	const [password_req_err, setPassword_req_err] = useState(false);

	function changePrivacy() {
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
	}

	function changePrivacy_register() {
		let show = document.getElementById("privacy_icon_3");
		let input = document.getElementById("password_confirm");

		if (privacy_confirm === true) {
			setPrivacy_confirm(false);
			input.setAttribute("type", "text");
			show.style.display = "none";
		} else if (privacy_confirm === false) {
			setPrivacy_confirm(true);
			input.setAttribute("type", "password");
			show.style.display = "block";
		}
	}

	function selectButton(id) {
		let item = document.getElementById(`${id}`);

		if (item.style.fontWeight === "200") {
			item.style.fontWeight = "900";
			item.style.fontSize = "16px";
		} else {
			item.style.fontWeight = "200";
			item.style.fontSize = "10px";
		}
	}

	return (
		<>
			<h1>Register</h1>

			<form id="registration_form">
				<div className="input-container">
					<input type="text" name="username" placeholder="username" />
					<label htmlFor="username">Username</label>
				</div>

				<div className="input-container">
					<input
						type="password"
						name="password"
						placeholder="password"
						id="password"
					/>
					<label htmlFor="password">Password</label>
					<img
						src={PrivacyEye}
						id="privacy_icon"
						className="privacy_icon"
						onClick={() => changePrivacy()}
						alt="hide password button"
					/>
					<p id="privacy_icon_2">/</p>
				</div>

				<div className="input-container">
					<input
						type="password"
						name="password"
						placeholder="password"
						id="password_confirm"
					/>
					<label htmlFor="password">Password</label>
					<img
						src={PrivacyEye}
						id="privacy_icon"
						className="privacy_icon"
						onClick={() => changePrivacy_register()}
						alt="hide password button"
					/>
					<p id="privacy_icon_3">/</p>
				</div>

				<div className="input-container">
					<input type="text" name="username" placeholder="username" />
					<label htmlFor="username">Zipcode</label>
				</div>

				<div className="interests">
					<h3>Pick as many interests...</h3>
					<div className="interests_row">
						<button
							type="button"
							onClick={() => selectButton("tech")}
							id="tech"
							value="tech"
						>
							Tech
						</button>
						<button
							type="button"
							onClick={() => selectButton("politics")}
							id="politics"
							value="politics"
						>
							Politics
						</button>
						<button
							type="button"
							onClick={() => selectButton("business")}
							id="business"
							value="business"
						>
							Business
						</button>
					</div>

					<div className="interests_row_odd">
						<button
							type="button"
							onClick={() => selectButton("food")}
							id="food"
							value="food"
						>
							Food
						</button>
						<button
							type="button"
							onClick={() => selectButton("real_estate")}
							id="real_estate"
							value="real estate"
						>
							R. Estate
						</button>
						<button
							type="button"
							onClick={() => selectButton("diversity")}
							id="diversity"
							value="diversity"
						>
							Diversity
						</button>
					</div>

					<div className="interests_row">
						<button
							type="button"
							onClick={() => selectButton("lgbtq")}
							id="lgbtq"
							value="lgbtq"
						>
							LGBTQ
						</button>
						<button
							type="button"
							onClick={() => selectButton("education")}
							id="education"
							value="education"
						>
							Education
						</button>
						<button
							type="button"
							onClick={() => selectButton("travel")}
							id="travel"
							value="travel"
						>
							Travel
						</button>
					</div>

					<div className="interests_row_odd">
						<button
							type="button"
							onClick={() =>
								selectButton("social_responsibility")
							}
							id="social_responsibility"
							value="social responsibility"
						>
							Social
						</button>
						<button
							type="button"
							onClick={() => selectButton("climate")}
							id="climate"
							value="climate"
						>
							Climate
						</button>
						<button
							type="button"
							onClick={() => selectButton("fashion")}
							id="fashion"
							value="fashion"
						>
							Fashion
						</button>
					</div>
				</div>

				<Link to="/" className="button">
					Register
				</Link>

				<Link to="/" className="button">
					Cancel
				</Link>
			</form>

			{username_err ? (
				<div className="validation_box">
					<p>That username is not available</p>
					<img src="alert.svg" alt="" id="alert_icon" />
				</div>
			) : (
				""
			)}

			{password_match_err ? (
				<div className="validation_box">
					<p>Passwords do no match</p>
					<img src="alert.svg" alt="" id="alert_icon" />
				</div>
			) : (
				""
			)}

			{zipcode_err ? (
				<div className="validation_box">
					<p>Zipcode is incorrect</p>
					<img src="alert.svg" alt="" id="alert_icon" />
				</div>
			) : (
				""
			)}

			{password_req_err ? (
				<div className="validation_box">
					<p>Passwords must:</p>
					<p className="password_reqs">be 8 characters or more</p>
					<p className="password_reqs">be alphanumeric</p>
					<p className="password_reqs">
						contain special characters: !@#${" "}
					</p>
					<p className="password_reqs" id="last_req">
						contain no spaces
					</p>
					<img src="alert.svg" alt="" id="alert_icon" />
				</div>
			) : (
				""
			)}
		</>
	);
}