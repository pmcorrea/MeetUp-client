import React from 'react'

import NavBarTop from '../NavBarTop/NavBarTop'
import NavBarBottom from '../NavBarBottom/NavBarBottom'
import Upload from '../../Static Assets/upload.svg'

export default function CreateEvent(props) {
					return (
						<>
							<NavBarTop />

							<form className="create_event_form">
								<h2>Event Details</h2>
								<div className="input-container">
									<label
										htmlFor="title"
										className="create_event_label"
									>
										Event Title
									</label>
									<input
										type="text"
										name="title"
										placeholder="title"
									/>
									<img
										src="./alert.svg"
										alt=""
										className="required"
									/>
								</div>

								<div className="input-container">
									<label
										htmlFor="biz_name"
										className="create_event_label"
									>
										Organization
									</label>
									<input
										type="text"
										name="biz_name"
										placeholder="organization"
									/>
									<img
										src="./alert.svg"
										alt=""
										className="required"
									/>
								</div>

								<div className="input-container">
									<label
										htmlFor="address"
										className="create_event_label"
									>
										Address
									</label>
									<input
										type="text"
										name="address"
										placeholder="123 Main St."
									/>
									<img
										src="./alert.svg"
										alt=""
										className="required"
									/>
								</div>

								<div className="input-container">
									<label
										htmlFor="date"
										className="create_event_label"
									>
										Date
									</label>
									<input
										type="text"
										name="date"
										placeholder="01/01/2020"
									/>
									<img
										src="./alert.svg"
										alt=""
										className="required"
									/>
								</div>

								<div className="input-container">
									<label
										htmlFor="time"
										className="create_event_label"
									>
										Time
									</label>
									<input
										type="text"
										name="time"
										placeholder="5:00pm"
									/>
									<img
										src="./alert.svg"
										alt=""
										className="required"
									/>
								</div>

								<div className="input-container">
									<label
										htmlFor="description"
										className="create_event_label"
									>
										Description
									</label>
									<img
										src="./alert.svg"
										alt=""
										className="required"
									/>
									<textarea
										className="create_event_textarea"
										id="description"
										cols="34"
										rows="10"
										wrap="hard"
										maxLength="450"
										placeholder="type a short description..."
									></textarea>
								</div>

								<h2>Upload Thumbnail</h2>
								<div className="upload_box">
									<img
										src={Upload}
										alt=""
										className="upload_img"
									/>
								</div>
								<button type="submit" id="create_event_submit">
									Create
								</button>
								<button type="button" id="cancel_event">
									Cancel Event
								</button>
							</form>

							<NavBarBottom />
						</>
					);
				}