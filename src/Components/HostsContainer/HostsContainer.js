import React from 'react'
import {Link} from 'react-router-dom'

import '../App/App.css'
import UserProfile from "../../Static Assets/headshot1.jpg"

import { useQuery, useMutation } from '@apollo/client'
import { getTopHosts } from "../../Queries/queries";

export default function TopHostsContainer(props) {
	const { loading, data } = useQuery(getTopHosts);

	if (loading) {
	} else {
		// console.log(data["getTopHosts"]);
	}

	return (
		<>
			<div id="hosts_container">
				{data
					? data["getTopHosts"].map((item) => (
							<span className="circle_profile" key={item.id}>
								<Link to={`/user/${item.id}`}>
									<img
										className="img_profile"
										src={item.user_avatar}
										alt=""
									/>
								</Link>
							</span>
					  ))
					: ""}
			</div>
		</>
	);
}