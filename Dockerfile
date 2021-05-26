FROM node:14

WORKDIR /app

COPY . .

RUN npm install


EXPOSE 4000

CMD ["nodemon","index.ts"]
