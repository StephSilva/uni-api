FROM node:14-alpine3.11

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]
