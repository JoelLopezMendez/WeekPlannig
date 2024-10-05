const time = document.getElementById("time");

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const date = document.getElementById("date");

const months = [
	"Enero",
	"Febrero",
	"Marzo",
	"Abril",
	"Mayo",
	"Junio",
	"Julio",
	"Agosto",
	"Septiembre",
	"Octubre",
	"Noviembre",
	"Diciembre",
];

const week = [
	"Lunes",
	"Martes",
	"Miércoles",
	"Jueves",
	"Viernes",
	"Sábado",
	"Domingo",
];

const interval = setInterval(() => {
	const fecha = new Date();

	let year = fecha.getUTCFullYear(),
		month = fecha.getMonth(),
		day = fecha.getDay();
		weekDay = fecha.getDate();


	/*hours.innerHTML = fecha.getHours();
	minutes.innerHTML = fecha.getMinutes();
	seconds.innerHTML = fecha.getSeconds();*/

	time.innerHTML = fecha.toLocaleTimeString();
	date.innerHTML = ` ${week[weekDay]} ${day} /  ${months[month]} / ${year} /`;
}, 1000);
