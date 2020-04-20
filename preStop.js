const https = require('https');

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

req.write(JSON.stringify({ channel: 'post-message', text: (new Date()).toLocaleString()+' Kubernetes pod preStop.' }));
req.end();

setTimeout(() => {
	console.log('15秒後');
}, 15 * 1000);
