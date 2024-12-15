FROM ubuntu:latest
LABEL authors="otto"

ENTRYPOINT ["top", "-b"]

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 3000