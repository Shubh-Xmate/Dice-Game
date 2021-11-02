var a1 = Math.floor(6*Math.random(0, 6) + 1);
var a2 = Math.floor(6*Math.random(0, 6) + 1);

var heading = document.querySelector("h1");

if(a1 == a2)
{
  heading.innerHTML = "Match tied";
}
else if(a1 > a2)
{
  heading.innerHTML ="<em>Player 1 Wins !</em>";
}
else
{
  heading.innerHTML = "<em>Player 2 Wins !</em>";
}

var first_img = "images/dice" + a1 + ".png";
var second_img = "images/dice" + a2 + ".png";

var imagesList = document.querySelectorAll("img");
imagesList[0].setAttribute("src", first_img);
imagesList[1].setAttribute("src", second_img);
