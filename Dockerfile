FROM node:17.0.1-alpine as build-stage

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
COPY /patches ./patches

ENV NODE_ENV=development

RUN --mount=type=secret,id=npmrc,dst=/root/.npmrc npm install

COPY . .

RUN npm run build --if-present

CMD npx serve -s build

FROM nginx as production-stage

RUN mkdir -p /app

ENV NODE_ENV=production
ENV PORT=80

COPY --from=build-stage /app/build /app
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE $PORT

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'
