FROM node:18.17.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run migration

RUN npm run seed

EXPOSE 4000

CMD ["npm", "start"]