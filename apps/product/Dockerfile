FROM node:21.5.0-alpine as builder_product
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN ls .
FROM nginx
COPY --from=builder_product /app/dist /usr/share/nginx/html