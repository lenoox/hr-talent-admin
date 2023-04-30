FROM node:lts-bullseye-slim as build
WORKDIR /app
RUN npm install -g npm
COPY package*.json ./
RUN npm ci && npm cache clean --force
COPY . .
RUN npm run build:prod

FROM nginx:stable
COPY --from=build /app/dist/hr-talent-admin /usr/share/nginx/html/
COPY --from=build /app/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
