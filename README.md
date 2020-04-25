# kubernetes-pod-delete

KubernetesのPodの削除のときの動作を確認する。

## Slackへ送信するためのトークンを取得

[Slackのアプリ一覧](https://api.slack.com/apps) から送信に使用するBotを選択してください。  
もし、送信するためのBotが無い場合は、Botを作成してください。

**Add features and functionality** のメニューを開き、 **Permissions** をクリックしてください。

その遷移後のページにある **OAuth Access Token** の内容をコピーしてください。  
その内容が **Slackへ送信するためのトークン** です。

## Kubernetesへのデプロイ

### Secret

```.sh
echo -n '__SLACKのメッセージ送信用のトークン__' > token
kubectl create secret generic slack-auth --from-file=./token
```

### Pod

```.sh
kubectl apply -f pod.yaml
```

## Podを削除する

```.sh
kubectl delete -f pod.yaml
```
