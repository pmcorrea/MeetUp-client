import React from 'react'

export default function ParticipantsContainer(props) {

	return (
		<>
			<div className="participants_list">
				<h2>
					Participants
					</h2>

				<ul>
					<li>
						<div>
							<span>
								<a href="./user.html">
									<img src="headshot1.jpg" alt="" />
								</a>
							</span>

							<div>
								<p>Jane Doe</p>
								<p>Data Analyst</p>
							</div>
						</div>

						<p className="status_going">
							going
							</p>
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

						<p className="status_invited">
							invited
							</p>
					</li>
				</ul>
			</div>
		</>
	)
}