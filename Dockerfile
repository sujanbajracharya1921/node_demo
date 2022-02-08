
# dev
FROM node:12 as dev
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","run","dev"]

# prod
FROM node:12 as prod
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","run","start"]
