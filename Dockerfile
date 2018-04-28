FROM node:8.11-alpine as node-angular-cli
LABEL authors="Hussein Bassam"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm cache clean
RUN npm install -g @angular/cli@1.7.0
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm","start"]