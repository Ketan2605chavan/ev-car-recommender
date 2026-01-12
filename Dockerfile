# Step 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files first (for caching)
COPY package.json package-lock.json ./

RUN npm install

# Copy the rest of the app
COPY . .

# Build the production app
RUN npm run build


# Step 2: Serve using Nginx
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d

# Copy build output to nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
