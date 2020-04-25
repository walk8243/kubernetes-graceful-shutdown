const sendSlack = require('./slack').sendSlack;

sendSlack((new Date()).toLocaleString()+' Kubernetes pod preStop.');

setTimeout(() => {
	console.log('15秒後');
}, 15 * 1000);
