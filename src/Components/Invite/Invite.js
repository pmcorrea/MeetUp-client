import React from 'react'
import NavBarTopBackArrow from '../NavBarTopBackArrow/NavBarTopBackArrow'
import NavBarBottom from '../NavBarBottom/NavBarBottom'

export default function Invite(props) {
	return (
		<>
			<NavBarTopBackArrow />

			<div className="event_card">
				<div className="invite_list">
					<h2>Invite Followers</h2>

					<form action="" className="invite_form">
						<div className="invite-input-container">
							<input
								type="text"
								placeholder="search followers..."
								id="invite_input"
							/>
							<img src="search-3.svg" alt="" id="invite-search" />
						</div>
					</form>

					<ul>
						<li>
							<div>
								<span>
									<img src="headshot1.jpg" alt="" />
								</span>

								<div>
									<p>Jane Doe</p>
									<p>Data Analyst</p>
								</div>
							</div>

							<p className="status_going">going</p>
						</li>

						<li>
							<div>
								<span>
									<img src="headshot2.jpg" alt="" />
								</span>

								<div>
									<p>Jane Doe</p>
									<p>Data Analyst</p>
								</div>
							</div>

							<p className="status_going">going</p>
						</li>

						<li>
							<div>
								<span>
									<img src="headshot3.jpg" alt="" />
								</span>

								<div>
									<p>Jane Doe</p>
									<p>Data Analyst</p>
								</div>
							</div>

							<p className="status_invited">invited</p>
						</li>

						<li>
							<div>
								<span>
									<img src="headshot4.jpg" alt="" />
								</span>

								<div>
									<p>Jane Doe</p>
									<p>Data Analyst</p>
								</div>
							</div>

							<p className="status_invite">invite</p>
						</li>
					</ul>
				</div>
			</div>

			<NavBarBottom />
		</>
	);
}