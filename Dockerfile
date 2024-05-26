FROM node:18-alpine as builder
RUN apk update && apk add git
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

FROM node:18-alpine
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
ENTRYPOINT yarn start