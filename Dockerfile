FROM node:20-slim


RUN apt-get update && apt-get install -y --no-install-recommends \
    curl wget gnupg ca-certificates \
    fonts-liberation libatk-bridge2.0-0 libatk1.0-0 libcups2 \
    libdrm2 libgbm1 libnspr4 libnss3 libxcomposite1 libxdamage1 \
    libxrandr2 libxfixes3 libxkbcommon0 libasound2 xdg-utils \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci

# Install Chromium to node_modules
RUN npx playwright install --target=project chromium

# Copy rest of the source code
COPY . .

ENV PLAYWRIGHT_BROWSERS_PATH=0

# Default command
CMD ["npx", "playwright", "test"]
