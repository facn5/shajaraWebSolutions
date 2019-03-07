function biograph(element) {
	if(element.className == 'about__slot') {
		element.className = 'about__slot bio';
	}
	else {
		element.className = 'about__slot';
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var phoneID = document.getElementById('phoneNumber')

	phoneID.addEventListener('focusin', function() {
		phoneID.placeholder = "050 555 5555"
	  }, true);

		phoneID.addEventListener('focusout', function() {
			phoneID.placeholder = ""
		}, false);

window.onscroll = function() {
	onScrollShowNavBar()
};


var navbar = document.getElementById("about1");
var navbar1 = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function onScrollShowNavBar() {
  if (window.pageYOffset >= sticky) {
		navbar1.style.display = "block"
    navbar1.classList.add("sticky")
  } else {
    navbar1.classList.remove("sticky");
		navbar1.style.display = "none"
  }
}
})
