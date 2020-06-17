import { gql } from 'apollo-boost'

const login = gql`
	query login($user_name: String!, $password: String!) {
		login(user_name: $user_name, password: $password) {
			id
			user_name
			token
		}
	}
`;

const getTopHosts = gql`
	query getTopHosts {
		getTopHosts {
			id
			user_first_name
			user_last_name
			user_email
			user_zipcode
			user_employer
			user_employer_address
			user_no_of_followers
			user_status
			user_avatar
			user_bio
		}
	}
`;

const getTopEvents = gql`
	query getTopEvents {
		getTopEvents {
			id
			event_name
			event_description
			event_location_name
			event_address
			event_date
			event_time
			event_host_id
			event_no_of_participants
			event_cover_img

			host {
				user_avatar
			}
		}
	}
`;

export { login, getTopHosts, getTopEvents };