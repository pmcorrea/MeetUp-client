import React from 'react'

import '../App/App.css'
import NavBarTop from '../NavBarTop/NavBarTop'
import NavBarBottom from '../NavBarBottom/NavBarBottom'
import HostsContainer from "../HostsContainer/HostsContainer";
import EventsContainer from "../EventsContainer/EventsContainer";

export default function Home(props) {
	return (
		<>
			<NavBarTop />
			<div id="host_container">
				<h3>Top Hosts</h3>
				<HostsContainer />
			</div>

			<div id="top_events_container">
				<h3>Top Events</h3>
				<EventsContainer />
			</div>

			<div id="your_events_container">
				<h3>Your Events</h3>
				<EventsContainer />
			</div>
			<NavBarBottom />
		</>
	);
}