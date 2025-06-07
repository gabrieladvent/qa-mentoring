FROM node:20-alpine

# Install necessary system dependencies including Chromium
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ttf-freefont \
    bash \
    dumb-init

# Set environment variables for Playwright to use system Chromium
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
ENV PLAYWRIGHT_BROWSERS_PATH=0
ENV CHROME_PATH=/usr/bin/chromium-browser
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Create app directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install Playwright and dependencies
RUN npm install playwright && \
    npx playwright install chromium && \
    npm cache clean --force && \
    npm prune --production && \
    rm -rf /root/.cache /root/.npm /tmp/*

# Copy app source code
COPY . .

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Default command
CMD ["npx", "playwright", "test"]
