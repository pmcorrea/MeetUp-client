import React from 'react'
import { Link } from 'react-router-dom'

import "../App/App.css"
import AccountProfile from "../../Static Assets/headshot8.jpg"

export default function NavBarTop(props) {

	return (
		<>
			<div className="top_nav_bar">
				<h4>Home</h4>
				<span className="account_profile">
					<Link to="/account">
						<img className="img_profile" src={AccountProfile} alt="" />
					</Link>

				</span>
			</div>
		</>
	)
}