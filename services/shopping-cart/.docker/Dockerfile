FROM node:21-alpine3.19 AS builder

WORKDIR /opt/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

ENTRYPOINT [ "npm", "run", "start:prod" ]
