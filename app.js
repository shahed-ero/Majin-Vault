//body color change
const bodyEl = document.querySelector("body");
const btnToChangeBgColor = document.getElementById("bodycngcolor");

//let bg color always true so the button will always works acording to if else
let isBgColor = true;

function toggleBgColor(){
    bodyEl.style.backgroundColor = isBgColor ? "pink" : "silver";
    //making isBgColor false so its fip  the entire things true to false by click
    isBgColor = !isBgColor;
}

btnToChangeBgColor.addEventListener("click" ,toggleBgColor);


//works for click to change the image into 1.jpg
let btn = document.getElementById('imgShow');
let btn2 = document.getElementById('imgShow');

let image = document.getElementById('majinImg');
function revelLittleMajin() {
    image.src = '1.jpg';
} 
function removeMajin(){
    image.src = "2.png";
}

btn2.addEventListener('mouseout', removeMajin);
btn.addEventListener('click', revelLittleMajin);


//works end here


/*this is where for hover me and hover out
so wath this
*/


//creating a function that is showing the number 1 to fav number
let display = document.getElementById("1tox");
let count = 0;
const limit = 69;

function startCounter() {
    //update the display
    display.innerText = count;

    //celcolate the next delay
    //This formula starts fast (1ms) and increases as count approaches limit
    let progress = count / limit; 
    let delay = 1 + (Math.pow(progress, 5) * 500); 
    //letting favourateNumberIs as a reference for showing msg if 69 is shown
    let favourateNumberIs = document.getElementById("favNum");

    if (count < limit) {
        count++;
        // schedule the next step with the new, longer delay
        setTimeout(startCounter, delay);
    }
    //show msg
   
    else if(count == 69){
        favourateNumberIs.innerText = "My Favourate Number is 69";
    }
}

startCounter();


//favourate number creation
