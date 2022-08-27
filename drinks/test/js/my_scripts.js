function loadDoc(doc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("content").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", doc , true);
  xhttp.send();
}

const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.querySelector('#offcanvasNavbar');
navLinks.forEach((elem) => {
  elem.addEventListener('click', () => {
    $("button.navbar-toggler").click();
  });
});
