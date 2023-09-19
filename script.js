/* 
Student Name: Adam McClain
File Name: script.js
Date: Sept. 19, 2023
*/

//Hamburger menu Function.
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.disply === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}