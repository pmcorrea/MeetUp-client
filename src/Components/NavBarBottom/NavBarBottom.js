import React from 'react'
import { Link } from 'react-router-dom'

import "../App/App.css"
import HomeIcon from "../../Static Assets/home.svg"
import CreateIcon from "../../Static Assets/create.svg"
import SearchIcon from "../../Static Assets/search.svg"

export default function NavBarBottom(props) {

	return (
		<>
			<div className="bottom_nav_bar">
				<Link to="/home">
					<img src={HomeIcon} alt="" className="bottom_nav_icons" />
				</Link>

				<Link to="/create-event">
					<img src={CreateIcon} alt="" className="bottom_nav_icons" />
				</Link>

				<Link to="/search">
					<img src={SearchIcon} alt="" className="bottom_nav_icons" />
				</Link>
			</div>
		</>
	)
}