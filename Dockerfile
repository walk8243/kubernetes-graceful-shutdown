FROM node:erbium

WORKDIR /app
COPY package.json .
COPY index.js .
COPY preStop.js .

CMD [ "node", "/app/index.js" ]
