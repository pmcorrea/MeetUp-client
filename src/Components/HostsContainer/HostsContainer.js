import React from 'react'
import {Link} from 'react-router-dom'

import '../App/App.css'
import UserProfile from "../../Static Assets/headshot1.jpg"

export default function TopHostsContainer(props) {
	return (
		<>
			<div id="hosts_container">
				<span className="circle_profile">
					<Link to="/user">
						<img className="img_profile" src={UserProfile} alt="" />
					</Link>
				</span>
			</div>
		</>
	);
}