// Modules
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
// import { ApolloClient } from 'apollo-client';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";

// Style and static assets
import "./App.css";

// Context, Service
import MainContext from "../../Contexts/MainContext";
import TokenHelpers from "../../Services/token-helpers";
import config from "../../config";

// Components
import Login from "../Login/Login";
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
import ErrBoundary from "../ErrBoundary/err-boundary";

// Apollo Client
// Apollo Link will send token with every request
const authLink = setContext((_, { headers }) => {
	const token = TokenHelpers.getAuthToken();
	return {
		headers: {
			...headers,
			authorization: token ? `bearer ${token}` : null,
		},
	};
});

const httpLink = createHttpLink({ uri: `${config.API_ENDPOINT}` });

// Instantiate Apollo Client
const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
});

function App() {
	return (
		<>
			<ApolloProvider client={apolloClient}>
				{/* <MainContext.Provider value={this.state}> */}
				<ErrBoundary>
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
							if (!TokenHelpers.hasAuthToken()) {
								return <Redirect to="/login" />;
							}
							return <Home {...routeProps} />;
						}}
					/>

					<Route
						path="/account"
						exact
						render={(routeProps) => {
							if (!TokenHelpers.hasAuthToken()) {
								return <Redirect to="/login" />;
							}
							return <Account {...routeProps} />;
						}}
					/>

					<Route
						path="/user/:id"
						exact
						render={(routeProps) => {
							if (!TokenHelpers.hasAuthToken()) {
								return <Redirect to="/login" />;
							}
							return <User {...routeProps} />;
						}}
					/>

					<Route
						path="/event/:id"
						exact
						render={(routeProps) => {
							if (!TokenHelpers.hasAuthToken()) {
								return <Redirect to="/login" />;
							}
							return <Event {...routeProps} />;
						}}
					/>

					<Route
						path="/create-event"
						exact
						render={(routeProps) => {
							if (!TokenHelpers.hasAuthToken()) {
								return <Redirect to="/login" />;
							}
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
							if (!TokenHelpers.hasAuthToken()) {
								return <Redirect to="/login" />;
							}
							return <EditAccount {...routeProps} />;
						}}
					/>

					<Route
						path="/invite"
						exact
						render={(routeProps) => {
							if (!TokenHelpers.hasAuthToken()) {
								return <Redirect to="/login" />;
							}
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
				</ErrBoundary>
				{/* </MainContext.Provider> */}
			</ApolloProvider>
		</>
	);
}

export default App;
