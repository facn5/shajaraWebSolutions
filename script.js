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
  var phoneLabelID = document.getElementById('phoneNumberLabel')

	phoneID.addEventListener('focusin', function() {
		phoneID.placeholder = "050 555 5555"
		phoneLabelID.innerText = "What is your phone number? (555 555 5555)"
	  }, true);

		phoneID.addEventListener('focusout', function() {
			phoneID.placeholder = ""
			phoneLabelID.innerText = "What is your phone number?"

		}, false);

window.onscroll = function() {
	onScrollShowNavBar()
};

function clearForm() {
	document.getElementById("mytext").value = ""
	document.getElementById("myemail").value = ""
	document.getElementById("phoneNumber").value = ""
}


var navbar = document.getElementById("about-us");
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
