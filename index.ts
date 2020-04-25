import { sendSlack } from './slack';

writeLog();
const timer = setInterval(() => {
	writeLog();
}, 10 * 1000);

process
	.on('SIGINT', () => {
		endProcess('SIGINT');
	})
	.on('SIGTERM', () => {
		endProcess('SIGTERM');
	});

function writeLog() {
	const date = new Date();
	console.log('Hello World!', date.toLocaleString());
	sendSlack(`Regular message.`);
}

function endProcess(signal = 'SIGTERM') {
	clearInterval(timer);
	sendSlack(`Receive SIGNAL \`${signal}\`.`);
	let i = 1;
	setInterval(() => {
		sendSlack(`still alive(after ${i} seconds).`);
		i++;
	}, 1000);
}
