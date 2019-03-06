function biograph(e) {
	if(e.className == 'about__slot') {
		e.className = 'about__slot bio';
	}
	else {
		e.className = 'about__slot';
	}
}

document.addEventListener('DOMContentLoaded', function() {
	var phoneID = document.getElementById('phoneNumber')

	phoneID.addEventListener('focusin', function() {
		phoneID.placeholder = "888 888 8888"
	  }, true);

		phoneID.addEventListener('focusout', function() {
			phoneID.placeholder = ""
		}, false);

window.onscroll = function() {
	myFunction()
};


var navbar = document.getElementById("team-members");
var navbar1 = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
		navbar1.style.display = "block"
    navbar1.classList.add("sticky")
  } else {
    navbar1.classList.remove("sticky");
		navbar1.style.display = "none"
  }
}
})
