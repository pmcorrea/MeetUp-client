import React from 'react'
import NavBarTopBackArrow from '../NavBarTopBackArrow/NavBarTopBackArrow'
import Upload from '../../Static Assets/upload.svg'

export default function EditAccount(props) {
	return (
		<>
			<NavBarTopBackArrow />

			<form className="create_event_form">
				<h2>Personal Info</h2>
				<div className="input-container">
					<img src="./alert.svg" alt="" className="required" />
					<label htmlFor="title" className="create_event_label">
						First Name
					</label>
					<input type="text" name="title" placeholder=" first name" />
				</div>

				<div className="input-container">
					<label htmlFor="biz_name" className="create_event_label">
						Last Name
					</label>
					<input
						type="text"
						name="biz_name"
						placeholder="last name"
					/>
				</div>

				<div className="input-container">
					<label htmlFor="address" className="create_event_label">
						Employer
					</label>
					<input type="text" name="address" placeholder="employer" />
				</div>

				<div className="input-container">
					<label htmlFor="address" className="create_event_label">
						Email
					</label>
					<input
						type="text"
						name="address"
						placeholder="jane.doe@email.com"
					/>
				</div>

				<div className="input-container">
					<img src="./alert.svg" alt="" className="required" />
					<label htmlFor="date" className="create_event_label">
						Password
					</label>
					<input type="password" name="date" placeholder="password" />
				</div>

				<div className="input-container">
					<img src="./alert.svg" alt="" className="required" />
					<label htmlFor="time" className="create_event_label">
						Confirm Password
					</label>
					<input
						type="password"
						name="time"
						placeholder="confirm password"
					/>
				</div>

				<div className="input-container">
					<label htmlFor="description" className="create_event_label">
						Bio
					</label>
					<textarea
						className="create_event_textarea"
						id="description"
						cols="34"
						rows="10"
						wrap="hard"
						maxlength="450"
						placeholder="type a short bio..."
					></textarea>
				</div>

				<h2>Upload Avatar</h2>
				<div className="upload_box">
					<img src={Upload} alt="" className="upload_img" />
				</div>
				<button type="submit" id="create_event_submit">
					Submit
				</button>
				<button type="button" id="cancel_event">
					Sign Out
				</button>
				<button type="button" id="cancel_event">
					Delete Account
				</button>
			</form>
		</>
	);
}