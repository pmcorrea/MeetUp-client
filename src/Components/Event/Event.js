import React, {useState} from 'react'
import {Link} from 'react-router-dom'


import "../App/App.css"
import NavBarTopBackArrow from '../NavBarTopBackArrow/NavBarTopBackArrow'
import NavBarBottom from "../NavBarBottom/NavBarBottom";

import Thumbs from "../../Static Assets/finger.svg";
import Thumbs2 from "../../Static Assets/finger-2.svg";
import Thumbs3 from "../../Static Assets/finger-3.svg";
import Bookmark from "../../Static Assets/bookmark.svg";
import Bookmark2 from "../../Static Assets/bookmark-2.svg";
import Share from "../../Static Assets/share.svg";
import Edit from "../../Static Assets/dots-3.svg";
import ParticipantsContainer from "../ParticipantsContainer/ParticipantsContainer";

export default function Event(props) {
	const [bookmarkStatus, setBookmarkStatus] = useState(false);

	function notGoing() {
		let dislike = document.getElementsByClassName("dislike_button")[0];
		let like = document.getElementsByClassName("like_button")[0];

		dislike.setAttribute("src", Thumbs2);
		like.setAttribute("src", Thumbs);
	}

	function going() {
		let dislike = document.getElementsByClassName("dislike_button")[0];
		let like = document.getElementsByClassName("like_button")[0];

		dislike.setAttribute("src", Thumbs);
		like.setAttribute("src", Thumbs3);
	}

	function bookmark() {
		let img = document.getElementsByClassName("bookmark_img")[0];

		if (bookmarkStatus) {
			img.setAttribute("src", Bookmark2);
			setBookmarkStatus(false);
		} else if (bookmarkStatus === false) {
			img.setAttribute("src", Bookmark);
			setBookmarkStatus(true);
		}
	}

	return (
		<>
			{/* pass in h2 as a prop in backarrow component */}
			<NavBarTopBackArrow />

			<div className="event_card">
				<div className="event_header">
					<h2>Code Bootcamp</h2>

					<span>
						<a href="./user.html">
							<img src="headshot1.jpg" alt="" />
						</a>
					</span>
				</div>

				<div className="share_container">
					<img
						src={Bookmark}
						alt=""
						className="bookmark_img"
						onClick={() => bookmark()}
					/>

					<Link to="/invite">
						<img src={Share} alt="" />
					</Link>

					<a href="./create_event.html">
						<img src={Edit} alt="" />
					</a>
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
							MeetUp HQ
						</p>
						<p>5432 NE Dakota St., Miami, Florida</p>
						<p>1/16/2020</p>
						<p>5:00pm</p>
					</div>
				</div>

				<div className="user_attending_box">
					<h2>Attending?</h2>

					<div>
						<img
							src={Thumbs}
							alt=""
							className="dislike_button"
							onClick={() => notGoing()}
						/>
						<img
							src={Thumbs}
							alt=""
							className="like_button"
							onClick={() => going()}
						/>
					</div>
				</div>

				<ParticipantsContainer />
			</div>
			<NavBarBottom />
		</>
	);
}