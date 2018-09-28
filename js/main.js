"use strict"

var displayTextEl = null;
var inputTextEl = null;
var mButtonEl = null;
var pButtonEl = null;

/* Functions */
function initDomRefs() {
    displayTextEl = document.querySelector("main p");
    inputTextEl = document.querySelector('[type="text"]');
    mButtonEl = document.querySelector('#m');
    pButtonEl = document.querySelector('#p');
}

/* Callbacks */
function toggleColor(evt) {
    evt.target.classList.toggle("altColors");
}

function operation(evt) {
    if(!superStrictInputCheckingFunctionThatMakesSureEachInputIsAZeroThroughNineCharThenReturnsBoolean(inputTextEl.value))
        return;

    (evt.target === mButtonEl) ? sub() : add();
    changeColor();
    
    /* Helper functions */
    function add() {
        displayTextEl.textContent = Number(displayTextEl.textContent) + Number(inputTextEl.value); 
    }
    function sub() {
        displayTextEl.textContent = Number(displayTextEl.textContent) - Number(inputTextEl.value); 
    }
    function changeColor() {
        if(displayTextEl.textContent < 0) {
            displayTextEl.style.color = "red";
        } else if (displayTextEl.textContent === "0") {
            displayTextEl.style.color = "black";
        } else {
            displayTextEl.style.color = "green";
        }
    }
    function superStrictInputCheckingFunctionThatMakesSureEachInputIsAZeroThroughNineCharThenReturnsBoolean(str) {
        return str.split("").every((char) => {
            switch(char) {
                case "0": case "1": case "2": case "3": case "4": 
                case "5": case "6": case "7": case "8": case "9":
                    return true;
                default:
                    console.log("operation rejected due to textbox content");
                    return false;
            }
        }); 
    }
}

/* Listeners */
document.addEventListener("DOMContentLoaded", () => {
    initDomRefs();
    registerEventListeners();
});

function registerEventListeners() {
    mButtonEl.addEventListener("click", operation);
    pButtonEl.addEventListener("click", operation);
    mButtonEl.addEventListener("mouseover", toggleColor);
    pButtonEl.addEventListener("mouseover", toggleColor);
    mButtonEl.addEventListener("mouseout", toggleColor);
    pButtonEl.addEventListener("mouseout", toggleColor);
}