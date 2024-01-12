FROM node:20.9.0 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/user-administrator/ /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]