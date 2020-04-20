# kubernetes-graceful-shutdown

KubernetesのGracefulShutdownのときの動作を確認する

## Kubernetesへのデプロイ

### ConfigMap

```.sh
kubectl apply -f configmap.yaml
```

### Secret

```.sh
echo -n '__SLACKのメッセージ送信用のトークン__' > token
kubectl create secret generic slack-auth --from-file=./token
```

### Pod

```.sh
kubectl apply -f pod.yaml
```
