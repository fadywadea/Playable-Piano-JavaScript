const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
KeysCheckbox = document.querySelector(".Keys-checkbox input");

let allkeys = [ ] ,
audio = new Audio ("tunes/a.wav"); // by defult , audio  src is "a" tune 

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing  audio src  based on key pressed 
    audio.play(); // playing audio 
    

    const clickedkey = document.querySelector(`[data-key="${key}"]`); //getting clicked key  element
    clickedkey.classList.add("active"); // addign active class to clicked key element
    setTimeout(() => { // removing active class afetr 150 ms from clicked key element 
        clickedkey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allkeys.push (key.dataset.key); // adding data-key value to allkeys array
    // calling playTune function with passsing data-key value as an argument 
    key.addEventListener("click", () => playTune(key.dataset.key))
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedkey = (e) => {
    if(allkeys.includes(e.key)) playTune(e.key);     
} 

KeysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);
