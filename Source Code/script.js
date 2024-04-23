function showPopUp() {
    document.getElementById("popup").style.visibility = "visible";
}

function showBurger() {
    var x = document.getElementById("burgerLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
} 