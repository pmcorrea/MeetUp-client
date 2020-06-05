// Modules
import React from 'react';
import {Route} from 'react-router-dom';


// Style and static assets
import './App.css';

// Context, Service


// Components
import Login from '../Login/Login'
import LandingPage from "../LandingPage/LandingPage";
import Register from "../Register/Register";
import Home from "../Home/Home";
import Account from "../Account/Account";
import User from "../User/User";
import Event from "../Event/Event";
import CreateEvent from "../CreateEvent/CreateEvent";
import Search from "../Search/Search";
import EditAccount from "../EditAccount/EditAccount";
import Invite from "../Invite/Invite";
import Recover from "../Recover/Recover";

function App() {
	return (
		<>
			<Route
				path="/"
				exact
				render={(routeProps) => {
					return <LandingPage {...routeProps} />;
				}}
			/>

			<Route
				path="/login"
				exact
				render={(routeProps) => {
					return <Login {...routeProps} />;
				}}
			/>

			<Route
				path="/register"
				exact
				render={(routeProps) => {
					return <Register {...routeProps} />;
				}}
			/>

			<Route
				path="/home"
				exact
				render={(routeProps) => {
					return <Home {...routeProps} />;
				}}
			/>

			<Route
				path="/account"
				exact
				render={(routeProps) => {
					return <Account {...routeProps} />;
				}}
			/>

			<Route
				path="/user"
				exact
				render={(routeProps) => {
					return <User {...routeProps} />;
				}}
			/>

			<Route
				path="/event"
				exact
				render={(routeProps) => {
					return <Event {...routeProps} />;
				}}
			/>

			<Route
				path="/create-event"
				exact
				render={(routeProps) => {
					return <CreateEvent {...routeProps} />;
				}}
			/>

			<Route
				path="/search"
				exact
				render={(routeProps) => {
					return <Search {...routeProps} />;
				}}
			/>

			<Route
				path="/edit-account"
				exact
				render={(routeProps) => {
					return <EditAccount {...routeProps} />;
				}}
			/>

			<Route
				path="/invite"
				exact
				render={(routeProps) => {
					return <Invite {...routeProps} />;
				}}
			/>

			<Route
				path="/recover"
				exact
				render={(routeProps) => {
					return <Recover {...routeProps} />;
				}}
			/>
		</>
	);
}

export default App;
