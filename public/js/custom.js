/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    //$('#nav-res').show().fadeIn('slow');
    document.getElementById("nav-res").style.opacity = "1";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
	document.getElementById("nav-res").style.opacity = "0";
	//$('#nav-res').hide().fadeIn('slow');
} 

/* Set the width of the side navigation to 250px */
function openlogout() {
  document.getElementById("mySidenav-logout").style.width = "100%";
  //$('#nav-res').show().fadeIn('slow');
  document.getElementById("nav-res").style.opacity = "1";
}

/* Set the width of the side navigation to 0 */
function closelogout() {
  document.getElementById("mySidenav-logout").style.width = "0";
  document.getElementById("nav-res").style.opacity = "0";
  document.getElementById("mySidenav").style.width = "0";
//$('#nav-res').hide().fadeIn('slow');
} 

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



$(window).scroll(function(){
  if ($(window).scrollTop() >= 500) {
      $('.header-div').addClass('fixed-header');
      $('.logo-div.fixed-logo').addClass('fixed-logo-show');
  }
  else {
      $('.header-div').removeClass('fixed-header');
      $('.logo-div.fixed-logo').removeClass('fixed-logo-show');
  }
});

