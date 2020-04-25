FROM node:erbium

WORKDIR /app
COPY package.json .
COPY index.js .
COPY preStop.js .
COPY slack.js .

CMD [ "node", "/app/index.js" ]
