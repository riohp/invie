var myVar;

window.addEventListener("load", function(){
  this.document.getElementById("loader").classList.toggle("loader2")
})

function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
