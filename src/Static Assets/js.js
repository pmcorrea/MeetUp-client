
let array = [[0, 100, 100], [-100, 0, 100], [-100, -100, 0]]
let current = 0
let privacy = true
let privacy_confirm = true

function changeImg(n) {

	let img1 = document.getElementById("pic_1")
	let img2 = document.getElementById("pic_2")
	let img3 = document.getElementById("pic_3")

	let text_1 = document.getElementById("text_1")
	let text_2 = document.getElementById("text_2")
	let text_3 = document.getElementById("text_3")

	let dots = document.getElementsByClassName("dot")
	

	if (current == 2 && n == 1) {
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

	} else if (current == 0 && n == -1) {
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
	dots[0].style.width =  "12px"
	dots[0].style.height = "12px"
	dots[1].style.width =  "12px"
	dots[1].style.height = "12px"
	dots[2].style.width =  "12px"
	dots[2].style.height = "12px"

	dots[current].style.width =  "18px"
	dots[current].style.height = "18px"
}

displayImg(0)


function changePrivacy() {
	let show = document.getElementById("privacy_icon_2")
	let input = document.getElementById("password")

	if (privacy == true) {
		privacy = false
		input.setAttribute("type", "text")
		show.style.display = "none"
	} else if (privacy == false) {
		privacy = true
		input.setAttribute("type", "password")
		show.style.display = "block"
	}

}

function changePrivacy_register() {
	let show = document.getElementById("privacy_icon_3")
	let input = document.getElementById("password_confirm")

	if (privacy_confirm == true) {
		privacy_confirm = false
		input.setAttribute("type", "text")
		show.style.display = "none"
	} else if (privacy_confirm == false) {
		privacy_confirm = true
		input.setAttribute("type", "password")
		show.style.display = "block"
	}

}

function selectButton(id) {
	let item = document.getElementById(`${id}`)

	if (item.style.fontWeight == '200') {
		item.style.fontWeight = '900'
		item.style.fontSize = '16px'
	} else {
		item.style.fontWeight = '200'
		item.style.fontSize = '10px'
	}
}

function notGoing() {
	console.log("fired")
	let dislike = document.getElementsByClassName("dislike_button")[0]
	let like = document.getElementsByClassName("like_button")[0]

	dislike.setAttribute("src", "finger-2.svg")
	like.setAttribute("src", "finger.svg")
}

function going() {
	let dislike = document.getElementsByClassName("dislike_button")[0]
	let like = document.getElementsByClassName("like_button")[0]

	dislike.setAttribute("src", "finger.svg")
	like.setAttribute("src", "finger-3.svg")
}


function bookmark() {
	let img = document.getElementsByClassName("bookmark_img")[0]
	
	if (img.getAttribute("src") == "bookmark.svg") {
		img.setAttribute("src", "bookmark-2.svg")
	} else if (img.getAttribute("src") == "bookmark-2.svg") {
		img.setAttribute("src", "bookmark.svg")
	}

}

function changeFollow() {
	let img = document.getElementsByClassName("follow_button")[0]

		
	if (img.innerHTML == "follow") {
		img.innerHTML = "following"
		img.style.backgroundColor = "#a200ff"
	} else if (img.innerHTML == "following") {
		img.innerHTML = "follow"
		img.style.backgroundColor = "lightgray"
		
	}

}
