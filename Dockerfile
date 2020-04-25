FROM node:erbium AS build-env

WORKDIR /work
COPY package.json .
COPY yarn.lock .
RUN yarn

COPY tsconfig.json .
COPY index.ts .
COPY preStop.ts .
COPY slack.ts .
RUN yarn run build


FROM node:erbium

WORKDIR /app
COPY --from=build-env /work/package.json .
COPY --from=build-env /work/yarn.lock .
RUN yarn --production

COPY --from=build-env /work/index.js .
COPY --from=build-env /work/preStop.js .
COPY --from=build-env /work/slack.js .

CMD [ "node", "--icu-data-dir=node_modules/full-icu", "/app/index.js" ]
