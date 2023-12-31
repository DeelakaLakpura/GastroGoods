FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

ENV NPM_CONFIG_TIMEOUT=6000000


EXPOSE 3000
CMD [ "npm" ,"start" ]

