# determine base image
FROM node:12

# add source code to image
# start from app directory
WORKDIR /app

# copy local package.json
# paste it into the current directory in the container
COPY package*.json ./

# install all dependencies
RUN npm install

# copy source code
COPY . . 

# specify the port
ENV PORT = 8080

EXPOSE 8080

CMD [ "npm", "start" ]
