FROM node:20.11.0-alpine

WORKDIR /app

COPY . /app/
RUN npm install


RUN npm run build

RUN npm install -g serve
CMD ["serve", "-s", "dist"]