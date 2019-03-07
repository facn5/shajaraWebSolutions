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
		phoneID.placeholder = "050 555 5555"
	  }, true);

		phoneID.addEventListener('focusout', function() {
			phoneID.placeholder = ""
		}, false);

window.onscroll = function() {
	myFunction()
};


var navbar = document.getElementById("about1");
var navbar1 = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
		navbar1.style.display = "block"
    navbar1.classList.add("sticky")
  } else {
    navbar1.classList.remove("sticky");
		navbar1.style.display = "none"
  }
}
})

function clearForm() {
	document.getElementById("mytext").value = ""
	document.getElementById("myemail").value = ""
	document.getElementById("phoneNumber").value = ""
}
