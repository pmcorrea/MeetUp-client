import React from 'react'

import "../App/App.css"
import BackArrow from '../../Static Assets/back-2.svg'
import AccountProfile from '../../Static Assets/headshot1.jpg'

export default function NavBarTopBackArrow(props) {

	return (
		<>
			<div className="top_nav_bar">
				<img src={BackArrow} id="back_arrow" alt=""/>
					<h4>User</h4>
					<span className="account_profile">
					<img className="img_profile" src={AccountProfile} alt=""/>
					</span>
			</div>

		</>
	)
}