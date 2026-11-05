FROM node:22.13.1-bookworm-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --no-audit --no-fund
COPY . .
EXPOSE 3001 5173
CMD ["npm","run","server"]
