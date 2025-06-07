FROM node:20-slim

# Install all required dependencies for Chromium + Playwright
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    wget \
    gnupg \
    ca-certificates \
    fonts-liberation \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdrm2 \
    libgbm1 \
    libnspr4 \
    libnss3 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libxfixes3 \
    libxkbcommon0 \
    libasound2 \
    xdg-utils \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Salin dependency nodejs
COPY package*.json ./
RUN npm ci

# Install Playwright browsers only (deps sudah kita install manual)
RUN npx playwright install chromium

# Copy seluruh aplikasi
COPY . .

# Jalankan default test
CMD ["npx", "playwright", "test"]
