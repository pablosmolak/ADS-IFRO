FROM node:18.14.0

WORKDIR /app-node
ENV PORT=3002
EXPOSE 3002

# todo projeto é copiado em app-node na imagem
COPY . .

RUN npm install

ENTRYPOINT npm start
