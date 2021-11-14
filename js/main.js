
$(window).scroll(function(){
	$('.header-top').toggleClass('scrolled', $(this).scrollTop() > 50);
});



// Add active class to the current button (highlight it)
var header = document.getElementById("my-ul");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//It is Navbar Collasped Button Function

function theBgColor(){

  let currentColor = document.getElementById('the-header-top').style.background;
  
  if(currentColor == "black"){
    document.getElementById('the-header-top').style.background = "none";
  } else{
    document.getElementById('the-header-top').style.background = "black";
  }

}
