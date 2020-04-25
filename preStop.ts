import { sendSlack } from './slack';

sendSlack('KubernetesのPodが `preStop` を実行しました。');

setTimeout(() => {
	sendSlack('`preStop` が実行されてから15秒が経過しました。');
}, 15 * 1000);
