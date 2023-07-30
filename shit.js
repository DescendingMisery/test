const darkMode = document.querySelector('body');
const fontColor = document.querySelector('p');
const buttonElement = document.querySelector('button');
const countElement = document.getElementById('counts');
const countReset = document.getElementById('reset');
let lightMode = false;
var clickCount = 0;


function lightDarkChange(event)
{
   
    lightMode = !lightMode;
    if(lightMode == true)
    {
        darkMode.classList.toggle('lightmode');
        fontColor.classList.toggle('fontlightmode');
        countElement.classList.toggle('lightmode');
        lightMode = false;
    }
   
    
}
buttonElement.addEventListener('click',lightDarkChange);

function clickCounter()
{
    clickCount++;
        countElement.textContent = clickCount;
        if(clickCount == 5)
        {
            rickRoll();
            clickCount = 0;
        } 
}
function resetCounter()
{
    clickCount = 0;
    countElement.textContent = clickCount;
}
countReset.addEventListener('click',resetCounter);
buttonElement.addEventListener('click', clickCounter);

function rickRoll()
{
   window.location.href='https://www.youtube.com/watch?v=dQw4w9WgXcQ';
   
}
