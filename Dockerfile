FROM node:14.6.0-alpine as builder
RUN apk --no-cache add --update  g++ make python3
WORKDIR /app

COPY ./src ./package.json ./package-lock.json ./tsconfig.json ./
RUN npm install && \
    npm run build

FROM node:14.6.0-alpine

WORKDIR /app

COPY --from=builder /app/dist         /app/dist
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 4000

CMD ["npm", "run", "start"]

