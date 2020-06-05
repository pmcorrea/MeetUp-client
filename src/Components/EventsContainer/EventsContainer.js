import React from 'react'
import {Link} from 'react-router-dom'

import '../App/App.css'
import UserProfile from "../../Static Assets/headshot1.jpg"
import EventPic from "../../Static Assets/crowd.jpg"

export default function EventsContainer(props) {
	return (
		<>
			<div id="events_container">
				<div className="event_box">
					<Link to="/event">
						<img src={EventPic} className="event_cover" alt="" />
					</Link>
					<div className="event_info_box">
						<div className="event_info">
							<p className="event_title">
								<Link to="/event">Paint Party</Link>
							</p>
							<p className="event_box_date">May, 6th</p>
							<p className="event_box_going">2k going</p>
						</div>

						<span className="circle_profile">
							<Link to="/user">
								<img
									className="img_profile"
									src={UserProfile}
									alt=""
								/>
							</Link>
						</span>
					</div>
				</div>
			</div>
		</>
	);
}