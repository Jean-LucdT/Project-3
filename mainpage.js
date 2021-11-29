// variable for the loader
var myVar;

//scripting for the loader
function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("maincontent").style.display = "block";
}