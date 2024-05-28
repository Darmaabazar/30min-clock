const clock = document.querySelector(".clock");
const audio = document.querySelector(".audio")


var currentTime = setInterval(function(){
	var date = new Date();
	
	var hours = date.getHours();
	
	var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	
	clock.textContent = addZero(hours) + " : " + addZero(minutes) + " : " + addZero(seconds);
	
}, 1000);

function addZero(time) {

    return (time < 10) ? "0" + time : time;

}

var audioPlay = setInterval(function(){
	var date = new Date();
	
	var minutes = date.getMinutes();
	
	if((minutes >= 0 && minutes <= 3) || (minutes >= 30 && minutes <= 33)){
        audio.autoplay = true;
		audio.load();
    }
	
}, 180000);


function disableAutoplay() { 
    audio.autoplay = false;
    audio.load();
}

