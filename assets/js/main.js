const toUp = document.querySelector('.footer-back-action')
const headerMenu = document.querySelector('.header-nav-burguer')
const headerItems = document.querySelectorAll('.header-nav-item')

const scrollUp = () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}

toUp.addEventListener('click', scrollUp)
/* 
const toggleItems = () => {
	headerItems.forEach((item) => {
		item.classList.toggle('active')
	})
}

headerMenu.addEventListener('click', toggleItems) */
