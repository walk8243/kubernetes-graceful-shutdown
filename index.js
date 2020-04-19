writeLog();
setInterval(() => {
	writeLog();
}, 5 * 1000);

function writeLog() {
	const date = new Date();
	console.log('Hello World!', date.toLocaleString());
}
