

$(document).ready(function(){
	const navBar = document.getElementsByClassName('navbar-default')[0];
  window.onscroll = ()=>{
		console.log(window.scrollY);
			navBarEffect(navBar);
		};
});

function navBarEffect(navBar, navBarText) {
	console.log(window.innerWidth);
	if (window.scrollY==0 && window.innerWidth > 767) {
		navBar.style.background= 'rgba(51, 153, 255,.7)';
		navBar.style.transition = "background 1s";
		
	}
	else {
		navBar.style.background= 'rgba(51, 153, 255, 1)';
		navBar.style.transition = "background 1s";
	}
	
}
