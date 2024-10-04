# Use the official Node.js Alpine image as a base
FROM node:20.9.0-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Install a specific version of npm
RUN npm install -g npm@10.2.4

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies first for better caching
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application runs on
EXPOSE 8888

# Define the command to run the application
CMD ["npm", "run", "dev"]
