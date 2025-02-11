# Step 1: Define build-time argument for Node.js version
ARG NODE_VERSION=14

# Step 2: Use the specified Node.js version as the base image
FROM node:${NODE_VERSION}

# Step 3: Set the working directory
WORKDIR /app

# Step 4: Copy application files
COPY package*.json .
COPY app.js .

# Step 5: Install dependencies
RUN npm install

# Step 6: Set runtime environment variable
ENV APP_MODE=production

# Step 7: Expose the application port
EXPOSE 8080

# Step 8: Define the default command
CMD ["node", "app.js"]
