# Use an official Node.js image as a builder
FROM node:16 AS builder

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the default Nginx port
EXPOSE 3000

# Start Nginx
CMD [ "npm","run","start" ]