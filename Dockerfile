# Step 1: Use an official Node.js image as a base
FROM node:20 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Build the application for production
RUN npm run build

# Step 8: Expose the port
EXPOSE 5173

# Step 9: Start server
# Change the CMD to explicitly bind to all interfaces
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]