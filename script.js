//PET SITTING SERVICE SITE

// let form = document.selectElementById("form")
//1Cache at least one element using selectElementById.2) Cache at least one element using querySelector or querySelectorAll.
let p = document.querySelector("p")

var btn = document.getElementById("button");

btn.addEventListener("click", alertMe);

function alertMe(){
    p.innerText = "Hello"
alert("Changing the text in the p tag...now!!");
}



var kitty = document.getElementById("kitty");

kitty.addEventListener("click", congrats);

function congrats(){
   
alert("Thanks for pressing the button! Uploading private information...");
}




