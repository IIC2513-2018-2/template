# Author: @FarDust -> Gabriel Andres Faundez Soto
FROM node:10
WORKDIR /usr/app
COPY package*.json yarn.lock ./
RUN npm install yarn --global
RUN npm install sequelize-cli -g
RUN yarn install
COPY . .
EXPOSE 3000 36063
ENV NODE_ENV development