# Step 1: Specify the base image
FROM node:14

# Step 2: Add metadata
LABEL maintainer="developer@example.com" \
      version="1.0" \
      description="Node.js application example."

# Step 3: Set working directory
WORKDIR /app

# Step 4: Copy application files
COPY package*.json ./
COPY app.js ./

# Step 5: Install dependencies
RUN npm install

# Step 6: Expose application port
EXPOSE 8080

# Step 7: Define default command
CMD ["node", "app.js"]
