# Use Node.js as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy application files
COPY package*.json ./
COPY app.js ./

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 8080

# Define the default command
CMD ["node", "app.js"]