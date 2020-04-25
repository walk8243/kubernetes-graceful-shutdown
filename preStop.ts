import { sendSlack } from './slack';

sendSlack('Kubernetes pod preStop.');

setTimeout(() => {
	console.log('15秒後');
}, 15 * 1000);
