# Use the Node.js 20.13.1 base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /src

# Copy package files and install dependencies
COPY package*.json ./
RUN pnpm run install

RUN npx update-browserslist-db@latest 

# Copy the entire application code
COPY . .

# Build the application
RUN pnpm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to start the application
CMD ["pnpm", "start"]     