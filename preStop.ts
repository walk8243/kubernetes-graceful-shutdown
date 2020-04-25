import { sendSlack } from './slack';

sendSlack('Kubernetes pod preStop.');

setTimeout(() => {
	sendSlack('15 seconds after running preStop.');
}, 15 * 1000);
