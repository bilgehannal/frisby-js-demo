# ---- Test Node ----
FROM node:15.9.0-alpine3.12 as base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run lint
 
# ---- Prod Node ----
FROM node:15.9.0-alpine3.12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY docker/start-for-docker.sh start-for-docker.sh

CMD ["./start-for-docker.sh"]