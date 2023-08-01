// Add your code to this file
let body = document.querySelector("body");
body.style["background-color"] = "DarkBlue";

let heading1 = document.querySelector("h1");
heading1.style["textDecoration"] = "underline";

let title = document.querySelector("h1");
title.style.fontSize = "30px";
title.style.textDecoration = "underline";

let heading2 = document.querySelector("h2");
heading2.style["text-align"] = "center";
heading2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";

let images = document.querySelectorAll("img");
for (let i = 0; i < images.length; i++)
{
    images[i].style["border"] = "4px dotted orange";
}

let names = document.getElementsByClassName("pokemon_names");

for (let i = 0; i < names.length; i++)
{
    names[i].innerHTML = names[i].innerHTML + "!";

    names[i].style["color"] = "yellow";
}

let footer = document.querySelector("footer");
footer.innerHTML = "All Star Code - DOM Project";
footer.style.textDecoration = "overline underline";
footer.style.fontStyle = "italic";
footer.style.fontSize = "32px";