var result = document.getElementById("first");
console.log(result.innerHTML);

var result2 = document.getElementsByClassName("special");
console.log(result2[0].innerHTML);

var result3 = document.getElementsByTagName("p");
console.log(result3[0].innerHTML);


var specialTag = document.querySelector(".special");
console.log(specialTag.innerHTML);

var specialTag = document.querySelectorAll(".special");
console.log(specialTag);


var h1Tag = document.getElementsByTagName("h1");
h1Tag[0].style.color = "#1150b6";

var h1Tag = document.getElementsByTagName("p");
h1Tag[3].style.color = "#b61012";
