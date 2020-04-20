const https = require('https');

writeLog();
setInterval(() => {
	writeLog();
}, 10 * 1000);

process
	.on('SIGINT', () => {
		sendSlack((new Date()).toLocaleString()+' Receive SIGNAL `SIGINT`.');
		setTimeout(() => {
			sendSlack((new Date()).toLocaleString()+' still alive.');
		}, 1000);
	})
	.on('SIGTERM', () => {
		sendSlack((new Date()).toLocaleString()+' Receive SIGNAL `SIGTERM`.');
		setTimeout(() => {
			sendSlack((new Date()).toLocaleString()+' still alive.');
		}, 1000);
	});

function writeLog() {
	const date = new Date();
	console.log('Hello World!', date.toLocaleString());
	sendSlack(`[${date.toLocaleString()}] Regular message.`);
}

function sendSlack(text) {
	const req = https.request('https://slack.com/api/chat.postMessage', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env['SLACK_TOKEN']}`,
			'Content-Type': 'application/json; charset=UTF-8',
		}
	}, (res) => {
		res.setEncoding('utf8');
		res.on('data', (chunk) => {
			console.log(chunk);
		});
		res.on('end', () => {});
	});

	req.write(JSON.stringify({ channel: 'post-message', text }));
	req.end();
}
