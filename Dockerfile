FROM node:14.6.0-alpine as build
RUN apk add g++ make python3
WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install

COPY . .

EXPOSE 4000

RUN npx tsc
CMD ["npm", "run", "start"]

