var imgs = document.getElementsByClassName("img-item");
for (i = 0; i < imgs.length; i++) { 
  imgs[i].addEventListener("click", function (e) {
    var imgSrc = e.target.getAttribute("src");
    document.getElementById("mainImage").setAttribute("src", imgSrc);
  });
}
