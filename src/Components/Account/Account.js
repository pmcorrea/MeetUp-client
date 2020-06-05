import React from 'react'
import {Link} from 'react-router-dom'

import "../App/App.css"
import HeadShot from '../../Static Assets/headshot1.jpg'
import EventPic from "../../Static Assets/crowd.jpg"
import Edit from "../../Static Assets/dots-3.svg";
import NavBarTopBackArrow from "../NavBarTopBackArrow/NavBarTopBackArrow";
import FollowersContainer from "../FollowersContainer/FollowersContainer";
import EventsContainer from "../EventsContainer/EventsContainer";

export default function Account(props) {
	return (
		<>
			<NavBarTopBackArrow />

			<div className="event_card">
				<div className="profile_header">
					<h2>Jane Doe</h2>

					<span>
						<img src={HeadShot} alt="" />
					</span>
				</div>

				<div className="share_container">
					<Link to="/edit-account">
						<img src={Edit} alt="" />
					</Link>
				</div>

				<div className="event_description">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vestibulum euismod placerat tellus in rhoncus. Nullam
						non porta risus. Nullam elit ante, rutrum id velit sed,
						cursus condimentum enim. Vivamus venenatis non est et
						iaculis. Cras finibus libero ut mi vulputate bibendum.
						Morbi consectetur tortor sit amet purus accumsan, non
						hendrerit magna pulvinar. In id enim vehicula quam
						pellentesque tempus sed sit amet nibh.
					</p>

					<div className="event_date_box">
						<p
							className="event_date_box_location_name"
							id="event_date_box_location_name"
						>
							Facebook
						</p>
						<p>5432 NE Dakota St., Miami, Florida</p>
					</div>
				</div>

				<div className="host_of">
					<h2>Hosting</h2>
					<EventsContainer />
				</div>

				<div className="host_of">
					<h2>Bookmarks</h2>
					<EventsContainer />
				</div>

				<div className="host_of">
					<h2>Invited</h2>
					<EventsContainer />
				</div>

				<FollowersContainer />
			</div>
		</>
	);
}