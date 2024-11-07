const typingTextElement = document.querySelector(".main-text");
const extraElement = document.querySelector(".extra-text");
const texts = ["lorem ipsum something to say"];
const extra = ["lorem ipsum extra extra extra"];
let textIndex = 0;
let charIndex = 0;

let extraindex =0;
let extrachar =0;
let flag = false;
function typeText() {
    if (charIndex < texts[textIndex].length) {
        typingTextElement.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); 
    } else {
        setTimeout(removeCursor, 500); 
        flag = true;
    }
    if(flag){
        setTimeout(extra_text, 1000);
    }
}

function removeCursor() {
    const main = document.getElementsByClassName("main-text");
    main[0].style.borderRight = "none";
    main[0].style.animation = "none";
}

function extra_cursor(){
    const main = document.getElementsByClassName("extra-text");
    main[0].style.borderRight = "none";
    main[0].style.animation = "none";
}

function extra_text(){
    if (extrachar < extra[extraindex].length) {
        extraElement.innerHTML += extra[extraindex].charAt(extrachar);
        extrachar++;
        setTimeout(extra_text, 100); 
    } else {
        setTimeout(extra_cursor, 500); 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeText();
});
