import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import '../App/App.css'

import IRL from "../../Static Assets/IRL.svg"
import Town from "../../Static Assets/town.svg"
import Town2 from "../../Static Assets/town2.svg"

export default function LandingPage(props) {
	let array = [[0, 100, 100], [-100, 0, 100], [-100, -100, 0]]
	let current = 0


	function changeImg(n) {

		let img1 = document.getElementById("pic_1")
		let img2 = document.getElementById("pic_2")
		let img3 = document.getElementById("pic_3")

		let text_1 = document.getElementById("text_1")
		let text_2 = document.getElementById("text_2")
		let text_3 = document.getElementById("text_3")

		let dots = document.getElementsByClassName("dot")


		if (current === 2 && n === 1) {
			current = 0
			img2.style.opacity = "0"
			text_2.style.opacity = "0"


			// Display the selected container and dots
			img1.style.left = `${array[current][0]}%`
			img2.style.left = `${array[current][1]}%`
			img3.style.left = `${array[current][2]}%`

			text_1.style.left = `${array[current][0]}%`
			text_2.style.left = `${array[current][1]}%`
			text_3.style.left = `${array[current][2]}%`

		} else if (current === 0 && n === -1) {
			current = 2
			img2.style.opacity = "0"
			text_2.style.opacity = "0"

			// Display the selected container and dots
			img1.style.left = `${array[current][0]}%`
			img2.style.left = `${array[current][1]}%`
			img3.style.left = `${array[current][2]}%`

			text_1.style.left = `${array[current][0]}%`
			text_2.style.left = `${array[current][1]}%`
			text_3.style.left = `${array[current][2]}%`

		} else {
			current += n
			img2.style.opacity = "100"
			text_2.style.opacity = "100"
			// Display the selected container and dots
			img1.style.left = `${array[current][0]}%`
			img2.style.left = `${array[current][1]}%`
			img3.style.left = `${array[current][2]}%`

			text_1.style.left = `${array[current][0]}%`
			text_2.style.left = `${array[current][1]}%`
			text_3.style.left = `${array[current][2]}%`

		}


		dots[0].style.width = "12px"
		dots[0].style.height = "12px"
		dots[1].style.width = "12px"
		dots[1].style.height = "12px"
		dots[2].style.width = "12px"
		dots[2].style.height = "12px"

		dots[current].style.width = "18px"
		dots[current].style.height = "18px"

	}

	function displayImg(num) {
		current = num

		let img1 = document.getElementById("pic_1")
		let img2 = document.getElementById("pic_2")
		let img3 = document.getElementById("pic_3")

		let text_1 = document.getElementById("text_1")
		let text_2 = document.getElementById("text_2")
		let text_3 = document.getElementById("text_3")

		img1.style.left = `${array[current][0]}%`
		img2.style.left = `${array[current][1]}%`
		img3.style.left = `${array[current][2]}%`

		text_1.style.left = `${array[current][0]}%`
		text_2.style.left = `${array[current][1]}%`
		text_3.style.left = `${array[current][2]}%`

		let dots = document.getElementsByClassName("dot")
		dots[0].style.width = "12px"
		dots[0].style.height = "12px"
		dots[1].style.width = "12px"
		dots[1].style.height = "12px"
		dots[2].style.width = "12px"
		dots[2].style.height = "12px"

		dots[current].style.width = "18px"
		dots[current].style.height = "18px"
	}


	useEffect(() => {
		displayImg(0)
	}) 



	return (
		<>
			<div className="head_container">
				<h1>MeetUp</h1>
			</div>

			<div className="onboarding_graphics">
				<img id="pic_1" className="onboarding_img" alt="woman jumping out of phone screen" src={IRL}/>
				<img id="pic_2" className="onboarding_img" alt="view of city buildings" src={Town}/>
				<img id="pic_3" className="onboarding_img" alt="street view with traffic and pedestrians" src={Town2}/>
			</div>

			<div className="onboarding_text">
				<h2 id="text_1" className="text_intro">Find your interest</h2>
				<h2 id="text_2" className="text_intro">Grow our community</h2>
				<h2 id="text_3" className="text_intro">Build your network</h2>
			</div>

			<div className="nav_bar">
				<button className="prev" onClick={() => changeImg(-1)}> &lt; </button>

				<div className="dots-container">
					<span className="dot" onClick={() => displayImg(0)}></span>
					<span className="dot" onClick={() => displayImg(1)}></span>
					<span className="dot" onClick={() => displayImg(2)}></span>
				</div>

				<button className="next" onClick={() => changeImg(1)}> > </button>
			</div>

			<div className="login_register_buttons">

				<Link to="/login" className="button">
					Login
				</Link>

				<Link to="/register" className="button">
					Register
				</Link>
			</div>

			<div className="landing_page_info_container">
				<div className="landing_page_column_row">
					<div className="landing_page_box_1">
						Box 1
						</div>

					<div className="landing_page_box_2">
						Box 2
					</div>
				</div>

				<div className="landing_page_column_row">
					<div className="landing_page_box_1">
						Box 1
					</div>

					<div className="landing_page_box_2">
						Box 2
					</div>
				</div>

				<div className="landing_page_column_row">
					<div className="landing_page_box_1">
						Box 1
					</div>

					<div className="landing_page_box_2">
						Box 2
					</div>
				</div>
			</div>
		</>
	)
}