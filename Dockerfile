# Step 1: Use an official Node.js image as a base
FROM node:20 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json first to leverage caching
COPY package.json package-lock.json ./

# Step 4: Install dependencies (using npm ci for reproducible builds)
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . /app/

# Step 6: Create a folder called images with subfolders
RUN mkdir -p /app/Images/Events \
    /app/Images/Members \
    /app/Images/Projects \
    /app/Images/Writings/TopicImages \
    /app/Images/Writings/WriterImages \
    /app/Images/Dita-Leaders


# Step 7: Build the application for production
RUN npm run build

# Step 8: Expose the port
EXPOSE 5173

# Step 8: Start server with proper host binding
CMD ["npm", "run", "dev", "--", "--host=0.0.0.0"]
