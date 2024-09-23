FROM node:18-alpine

COPY . /app/

WORKDIR /app/

RUN npm ci

CMD ["node","index.js"]