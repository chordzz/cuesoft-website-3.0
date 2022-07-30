FROM node:17.0.1-alpine as build-stage

ARG GITHUB_TOKEN

USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

COPY --chown=node package*.json ./

ENV NODE_ENV=development

RUN npm config set '//npm.pkg.github.com/:_authToken' "${GITHUB_TOKEN}"
RUN npm ci

COPY --chown=node . .

RUN npm run build --if-present

FROM nginx as production-stage

RUN mkdir /app

COPY --from=build-stage /home/node/app/build /app
COPY nginx.conf /etc/nginx/nginx.conf

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
