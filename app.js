const clock = document.querySelector(".clock");
const audio = document.querySelector(".audio")


function disableAutoplay() { 
    audio.autoplay = false;
    audio.load();
}

var currentTime = setInterval(function(){
	var date = new Date();
	
	var hours = (12 - (date.getHours()));
	
	var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 0) {
		hours = 12;
	} else {
		hours = hours;
	}

	
	clock.textContent = addZero(hours) + " : " + addZero(minutes) + " : " + addZero(seconds) + " " + ampm;
	
    if(minutes == 0 || minutes == 30) {
        audio.autoplay = true;
        audio.load();
    }
},);

function addZero(time) {

    return (time < 10) ? "0" + time : time;

}

currentTime();

