# runtime environment (main layer)
FROM node:20-alpine

# set working directory
WORKDIR /app

# build commands
COPY package*.json .
RUN npm install

# copy source code
COPY . .

# expose a port for the container
EXPOSE 8000

# run commands after the image is created
CMD ["node", "app.js"]
