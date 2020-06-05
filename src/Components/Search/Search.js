import React from 'react'
import NavBarTop from '../NavBarTop/NavBarTop'
import NavBarBottom from '../NavBarBottom/NavBarBottom'
import HostsContainer from '../HostsContainer/HostsContainer'
import EventsContainer from "../EventsContainer/EventsContainer";

export default function CreateEvent(props) {
	return (
		<>
			<NavBarTop />
			<div>
				<form action="" className="search_form">
					<div className="input-container">
						<input
							type="text"
							name="username"
							placeholder="username"
							id="search_input"
						/>
						<label htmlFor="username">
							search names, tags, cities...
						</label>
					</div>
				</form>
			</div>

			<div id="host_container">
				<h3>Hosts</h3>
				<HostsContainer />
			</div>

			<div id="your_events_container">
				<h3>Events</h3>
				<EventsContainer />
			</div>

			<NavBarBottom />
		</>
	);
}