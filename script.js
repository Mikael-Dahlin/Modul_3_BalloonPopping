// counter for popped balloons
let popped = 0;

// get all balloon elements from the document
const balloons = document.querySelectorAll('.balloons');

// add event listeners for all balloon elements
balloons.forEach((element) => {
    element.addEventListener('mouseover', (event) =>{
        event.target.style.backgroundColor = "lightgrey";
        event.target.textContent = "POP!";
        popped++;
        checkAllPopped();
    }, { once : true });
});

// function to check if all balloons are popped and display message
const checkAllPopped = () => {
    if(popped === balloons.length){
        const message = document.createElement('div');
        message.textContent = "YAY!, All have popped!";
        message.classList.add('congrats');
        const gallery = document.querySelector('.balloons-gallery');
        gallery.style.display = 'none';
        document.querySelector('.wrapper').appendChild(message);
    }
}
