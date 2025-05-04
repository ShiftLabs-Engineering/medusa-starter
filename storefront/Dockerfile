# Use the Node.js 20.13.1 base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /src

# Install pnpm
RUN npm install -g pnpm@latest

# Copy package files and install dependencies
COPY package*.json ./


# Convert from yarn to pnpm and install dependencies
RUN pnpm import
RUN pnpm install

RUN npx update-browserslist-db@latest 

# Copy the entire application code
COPY . .

# Build the application
RUN pnpm build

# Expose the port your app runs on
EXPOSE 3000

# Command to start the application
CMD ["pnpm", "start"]     