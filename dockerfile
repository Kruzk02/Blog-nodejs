FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=dev

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]