var pics=[
    "Cat-Pics/Trip.jpeg",
    "Cat-Pics/D1-kicha.jpeg",
    "Cat-Pics/Candid.jpeg",
    "Cat-Pics/Orange1-kicha.jpeg",
    "Cat-Pics/Orange2-kicha.jpeg",
    "Cat-Pics/1st bday.jpeg",
    "Cat-Pics/2nd bday.jpeg",
    "Cat-Pics/3rd bday.jpeg"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter=1;

btn.addEventListener("click", function(){
    if(counter===8){
        counter=0;
    }
    img.src=pics[counter];
    counter=counter+1;
});
