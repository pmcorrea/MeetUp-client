import React from 'react'

import "../App/App.css"
import NavBarTopBackArrow from '../NavBarTopBackArrow/NavBarTopBackArrow'
import NavBarBottom from '../NavBarBottom/NavBarBottom'
import UserCard from '../UserCard/UserCard'

export default function User(props) {

	return (
		<>
			<NavBarTopBackArrow />
			<UserCard />
			<NavBarBottom />
		</>
	)
}