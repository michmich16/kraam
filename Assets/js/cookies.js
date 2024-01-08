// THE JAVASCRIPT

// cookie modal
// let cookieModal = document.getElementById("Cookie_container") //declare cookie_container as cookieModal (not use)
document.getElementById("Cookie_container").style.display = "block"; //show cookie_container as block
document.getElementById("myBody").classList.toggle("noScroll"); //block scrolling while cookie popup is showing


// displayModal("Cookie_container");


// open modal (bruges til login/signin modal)
  function displayModal(id) {
      document.getElementById(id).style.display = "block";
      document.getElementById("myBody").classList.toggle("noScroll");

  }

  function displayGallery(id, src, desc) {
      document.getElementById(id).style.display = "block";
      document.getElementById("desc").innerHTML = desc;
      document.getElementById("myBody").classList.toggle("noScroll");
 }

//close modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("myBody").classList.toggle("noScroll");
}


//scroll to top after reload. code from stackoverflow
history.scrollRestoration = "manual";

$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});