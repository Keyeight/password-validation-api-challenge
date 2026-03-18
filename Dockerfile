FROM node:24.14-alpine3.23 as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

RUN npm run build

FROM node:24.14

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/dist ./dist

RUN npm install --omit=dev

EXPOSE 8080

CMD ["node","dist/server.js"]