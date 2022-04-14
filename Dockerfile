FROM node:14-alpine3.11

WORKDIR /app

COPY . .

RUN npm cache clean --force
RUN yarn install

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]
