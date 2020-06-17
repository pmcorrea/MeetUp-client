import React from 'react'
import {Link} from 'react-router-dom'

import '../App/App.css'
import UserProfile from "../../Static Assets/headshot1.jpg"
import EventPic from "../../Static Assets/crowd.jpg"


import { useQuery, useMutation } from "@apollo/client";
import { getTopEvents } from "../../Queries/queries";

const dateHelper = require("date-fns");

export default function EventsContainer(props) {
	const { loading, data } = useQuery(getTopEvents);

	if (loading) {
	} else {
		// console.log(data["getTopEvents"]);
	}

	let formatDate = (date) => {
		let dateObj = new Date(date);
		dateObj.toISOString();
		dateObj.toLocaleDateString();
		let newDate = dateHelper.format(dateObj, "PPp");
		// console.log(dateObj, newDate);
		return newDate;
	};

	return (
		<>
			<div id="events_container">
				{data
					? data["getTopEvents"].map((item) => (
							<div className="event_box" key={item.id}>
								<Link to={`/event/${item.id}`}>
									<img
										src={item.event_cover_img}
										className="event_cover"
										alt=""
									/>
								</Link>
								<div className="event_info_box">
									<div className="event_info">
										<p className="event_title">
											<Link to={`/event/${item.id}`}>
												{`${item.event_name}`}
											</Link>
										</p>
										<p className="event_box_date">
											{formatDate(item.event_date)}
										</p>
										<p className="event_box_going">
											{`${item.event_no_of_participants} going`}
										</p>
									</div>

									<span className="circle_profile">
										<Link
											to={`/user/${item.event_host_id}`}
										>
											<img
												className="img_profile"
												src={`${item.host.user_avatar}`}
												alt=""
											/>
										</Link>
									</span>
								</div>
							</div>
					  ))
					: ""}
			</div>
		</>
	);
}