FROM node:erbium

WORKDIR /app
COPY package.json .
RUN yarn --production

COPY index.js .
COPY preStop.js .
COPY slack.js .

CMD [ "node", "--icu-data-dir=node_modules/full-icu", "/app/index.js" ]
