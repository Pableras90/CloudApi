FROM node:18-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY ./ ./
RUN npm ci
RUN npm run build
RUN mv ./public ./dist


ENV STATIC_FILES_PATH=./public
ENV API_MOCK=true
ENV CORS_ORIGIN=false

RUN apk update && apk add jq
RUN updatedImports="$(jq '.imports[]|=sub("./src"; "./dist")' ./package.json)" && echo "${updatedImports}" > ./package.json
CMD node dist/index