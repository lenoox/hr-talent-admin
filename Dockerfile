FROM node:16 as build
WORKDIR /app

RUN npm install -g npm
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:1.21.6-alpine
COPY --from=build /app/dist/hr-talent-admin /usr/share/nginx/html/
COPY --from=build /app/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
