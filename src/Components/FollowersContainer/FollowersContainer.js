import React from 'react'
import {Link} from 'react-router-dom'

import HeadShot from '../../Static Assets/headshot1.jpg'


export default function FollowersContainer(props) {

	return (
		<>
			<div className="participants_list">
				<h2>
					Followers
					</h2>

				<ul>
					<li>
						<div>

							<span>
								<Link to="/user">
									<img src={HeadShot} alt="" />
								</Link>
							</span>

							<div>
								<p>Jane Doe</p>
								<p>Data Analyst</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</>
	)
}