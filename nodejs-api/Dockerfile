# Light weight nodejs image - alpine
FROM node:16.18.0-alpine3.16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json .

RUN npm install

# Bundle app source
COPY . .

ENV PORT=8080

EXPOSE 8080

# Set user to non root - security
USER node

CMD [ "npm", "start" ]