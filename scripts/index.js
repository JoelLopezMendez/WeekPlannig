const time = document.getElementById("time");

const interval = setInterval(() => {
	const fecha = new Date();

	let year = fecha.getUTCFullYear(),
		month = fecha.getMonth(),
		day = fecha.getDate(),
		hour = fecha.getDay(),
		second = fecha.getSeconds();

	time.innerHTML = fecha.toLocaleTimeString();
}, 1000);
