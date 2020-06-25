var indexMyFavorite = document.getElementsByClassName("myFavorite");
var Onclick = document.getElementsByClassName("myFavorite").onclick;
function doDisplay() {
  if (indexMyFavorite.style.display === "block") {
    indexMyFavorite.style.display = "none";
  } else {
    indexMyFavorite.style.display = "block";
  }
}
