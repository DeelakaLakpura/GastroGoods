FROM node:16-alpine

WORKDIR /usr/app

COPY . .

RUN npm ci --only=production

RUN npm run build

CMD  ["npm" ,"run", "dev"]

