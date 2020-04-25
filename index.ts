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
	sendSlack(`定期ログ`);
}

function endProcess(signal = 'SIGTERM') {
	clearInterval(timer);
	sendSlack(`SIGNAL \`${signal}\` を受信しました。`);
	let i = 0;
	setInterval(() => {
		sendSlack(`生存中（${++i}秒経過）`);
	}, 1000);
}
