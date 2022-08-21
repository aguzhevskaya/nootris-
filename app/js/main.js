const headerBurger = document.querySelector(".header__burger");
const nav = document.querySelector(".navigation");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector(".body");

headerBurger.addEventListener("click", function () {
	headerBurger.classList.toggle("_active");
	nav.classList.toggle("_active");
	wrapper.classList.toggle("_active");
	body.classList.toggle("_lock");
});

wrapper.addEventListener("click", function() {
	nav.classList.remove("_active");
	wrapper.classList.remove("_active");
	headerBurger.classList.remove("_active");
	body.classList.remove("_lock");
});

nav.querySelectorAll('.navigation__link').forEach(link => {
	link.addEventListener('click', function() {
		headerBurger.classList.remove("_active");
		nav.classList.remove("_active");
		wrapper.classList.remove("_active");
		body.classList.remove("_lock");
	})
})
