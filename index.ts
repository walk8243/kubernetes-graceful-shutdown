import { sendSlack } from './slack';

writeLog();
const timer = setInterval(() => {
	writeLog();
}, 10 * 1000);

process
	.once('SIGINT', () => {
		endProcess('SIGINT');
	})
	.once('SIGTERM', () => {
		endProcess('SIGTERM');
	});

function writeLog() {
	sendSlack(`Regular message.`);
}

function endProcess(signal = 'SIGTERM') {
	clearInterval(timer);
	sendSlack(`Receive SIGNAL \`${signal}\`.`);
	let i = 0;
	setInterval(() => {
		sendSlack(`still alive(after ${++i} seconds).`);
	}, 1000);
}
