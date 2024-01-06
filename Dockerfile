FROM node:16-alpine
ARG CONTENTFUL_SPACE_ID
ARG CONTENTFUL_ACCESS_TOKEN
ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID ${CONTENTFUL_SPACE_ID}
ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ${CONTENTFUL_ACCESS_TOKEN}

WORKDIR /usr/app

COPY . .

RUN npm ci 

RUN npm run build

CMD [ "npm" , "start"]