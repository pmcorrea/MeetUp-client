import React from 'react'

import EventsContainer from "../EventsContainer/EventsContainer"
import FollowersContainer from '../FollowersContainer/FollowersContainer'

import HeadShot from "../../Static Assets/headshot1.jpg";

export default function UserCard(props) {
	function changeFollow() {
		let img = document.getElementsByClassName("follow_button")[0];

		if (img.innerHTML === "follow") {
			img.innerHTML = "following";
			img.style.backgroundColor = "#a200ff";
		} else if (img.innerHTML === "following") {
			img.innerHTML = "follow";
			img.style.backgroundColor = "lightgray";
		}
	}

	return (
		<>
			<div className="event_card">
				<div className="profile_header">
					<h2>Jane Doe</h2>

					<span>
						<img src={HeadShot} alt="" />
					</span>
				</div>

				<div className="follow_container">
					<button
						onClick={() => changeFollow()}
						className="follow_button"
					>
						follow
					</button>
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
				<FollowersContainer />
			</div>
		</>
	);
}