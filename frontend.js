var result = document.getElementById("first");
console.log(result);

var result2 = document.getElementsByClassName("special");
console.log(result2[0]);

var result3 = document.getElementsByTagName("p");
console.log(result3[0]);


var specialTag = document.querySelector(".special");
console.log(specialTag);

var specialTag = document.querySelectorAll(".special");
console.log(specialTag);


var h1Tag = document.getElementsByTagName("h1");
h1Tag[0].style.color = "#1150b6";

var h1Tag = document.getElementsByTagName("p");
h1Tag[3].style.color = "#b61012";

/*

All correct. From Kenn
*/