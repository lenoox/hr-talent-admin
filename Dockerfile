FROM node:16 as build
WORKDIR /app
ARG APP_NAMME=hr-talent-admin

RUN npm install -g npm
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=build /app/dist/$APP_NAMME /usr/share/nginx/html/
COPY --from=build /app/default.conf /etc/nginx/conf.d/

CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
