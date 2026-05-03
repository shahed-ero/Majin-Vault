//works for click to change the image into 1.jpg
const btn = document.getElementById('imgShow');
const image = document.getElementById('majinImg');
function revelLittleMajin() {
    image.src = '1.jpg';
} 
btn.addEventListener('click', revelLittleMajin);
//works end here




/*this is where for hover me and hover out
so wath this
*/


//Hover me start here
const hvrtxt = document.getElementById('hoverText');
function hoverText() {
    hvrtxt.innerHTML = 'You hovered over the text!';
}
hvrtxt.addEventListener('mouseover', hoverText);
//hover me end here



//hover out start here
function hoverOutText() {
    hvrtxt.innerHTML = 'Hover over me!';
}
hvrtxt.addEventListener('mouseout', hoverOutText);
//hover out end here