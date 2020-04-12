FROM node:12-alpine

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

RUN npx next telemetry disable

RUN yarn build

RUN rm -rf .next/cache

ENV PORT 8888
EXPOSE $PORT

CMD yarn start -p $PORT
