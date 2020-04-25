import fetch from 'node-fetch';

const dateFormatOptions = {
	timeZone: 'Asia/Tokyo',
	year: 'numeric', month: '2-digit', day: '2-digit',
	hour: '2-digit', minute: '2-digit', second: '2-digit',
	hour12: false,
}

export async function sendSlack(text: string) {
	const response = await fetch('https://slack.com/api/chat.postMessage', {
		body: JSON.stringify({ channel: 'post-message', text: `[${getDateString()}] ${text}` }),
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env['SLACK_TOKEN']}`,
			'Content-Type': 'application/json; charset=UTF-8',
		}
	});
	return await response.json();
}

export function getDateString() {
	const now = new Date();
	return new Intl.DateTimeFormat('ja-JP', dateFormatOptions).format(now);
}
