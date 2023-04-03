var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

var c = document.getElementById ("player1");
var v = document.createElement ("video");
v.src = "assets/marchingband.mov";
v.controls = true;
c.appendChild (v);

const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const muteButton = document.getElementById("mute");
const slowDownButton = document.getElementById("slower");
const speedUpButton = document.getElementById("faster");
const skipButton = document.getElementById("skip");
const volumeSlider = document.getElementById("slider");
const volumeDisplay = document.getElementById("volume");
const oldSchool = document.getElementById("vintage");
const original = document.getElementById("orig");

playButton.addEventListener("click", function() {
    c.play();
	volumeDisplay.textContent = c.volume * 100 + "%";
	console.log("Play video")
});

pauseButton.addEventListener("click", function() {
    c.pause();
	console.log("Pause video")
});

muteButton.addEventListener("click", function() {
	c.muted = !c.muted; 
	muteButton.textContent = c.muted ? 'Unmute' : 'Mute';
	if (c.muted) {
		console.log("muted"); 
	   }
	   else {
		console.log("unmuted"); 
	   }
});

slowDownButton.addEventListener("click", function() {
	c.playbackRate *= 0.9; 
	console.log("Slow down video")
	console.log(`speed is: ${c.playbackRate}`);
});

speedUpButton.addEventListener("click", function() {
	c.playbackRate /= 0.9; 
	console.log("Speed up video")
	console.log(`speed is: ${c.playbackRate}`);
});

skipButton.addEventListener("click", function() {
	const newTime = c.currentTime + 10;

	if (newTime > c.duration) {
		c.currentTime = 0;
	} else {
		c.currentTime = newTime;
	}
	console.log("skip ahead")
	console.log(`video current time is: ${c.currentTime} seconds`);
});

volumeSlider.addEventListener("input", function() {
	c.volume = volumeSlider.value / 100; 
	volumeDisplay.textContent = volumeSlider.value + "%";
	console.log(`The current value is: ${c.volume}`);
});

oldSchool.addEventListener("click", function() {
	c.classList.add("oldSchool");
});

original.addEventListener("click", function() {
	c.classList.remove("oldSchool");
});
