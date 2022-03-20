const timerBlock = document.querySelector('.timer__time');
const deadline = '31 march 2022';

let interval;

const updateClock = () => {

	// const date = new Date();
	// const hours = date.getHours();
	// const minutes = date.getMinutes();
	// const seconds = date.getSeconds();

	const date = new Date().getTime();
	const dateDeadline = new Date(deadline).getTime();
	const timeRemaining = (dateDeadline - date) / 1000;


	const days = Math.floor(timeRemaining / 60 / 60 / 24);
	const hours = Math.floor(timeRemaining / 60 / 60 / 10);
	const minutes = Math.floor((timeRemaining / 60) % 60);
	const seconds = Math.floor(timeRemaining % 60);

	const fdays = days < 10 ? '0' + days : days;
	const fhours = hours < 10 ? '0' + hours : hours;
	const fminutes = minutes < 10 ? '0' + minutes : minutes;
	const fseconds = seconds < 10 ? '0' + seconds : seconds;

	timerBlock.textContent = `${fdays}:${fhours}:${fminutes}:${fseconds}`;
	if (timeRemaining <= 0) {
		clearInterval(interval);
		timerBlock.textContent = `00:00:00:00`;
	}

	console.log(days);

}
updateClock();


interval = setInterval(updateClock, 500);