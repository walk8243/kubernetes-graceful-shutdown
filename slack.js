const https = require('https');

const dateFormatOptions = {
	timeZone: 'Asia/Tokyo',
	year: 'numeric', month: '2-digit', day: '2-digit',
	hour: '2-digit', minute: '2-digit', second: '2-digit',
	hour12: false,
}

module.exports = {
	sendSlack,
	getDateString,
};

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

	req.write(JSON.stringify({ channel: 'post-message', text: `[${getDateString()}] ${text}` }));
	req.end();
}

function getDateString() {
	const now = new Date();
	return new Intl.DateTimeFormat('ja-JP', dateFormatOptions).format(now);
}
