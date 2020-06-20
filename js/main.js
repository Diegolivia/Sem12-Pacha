var acord = document.getElementsByClassName("Acord");
var i;
console.log(acord)
for (i = 0; i < acord.length; i++) {
    acord[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }