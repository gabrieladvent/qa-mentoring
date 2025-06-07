FROM node:20-alpine

# Install only necessary packages
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ttf-freefont \
    bash \
    dumb-init

WORKDIR /app

COPY package*.json ./

# Install only core without browsers
RUN npm install playwright-core && \
    npm cache clean --force && \
    npm prune --production && \
    rm -rf /root/.cache

# Set env to use system Chromium
ENV PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1
ENV CHROME_PATH=/usr/bin/chromium-browser
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

COPY . .

ENTRYPOINT ["dumb-init", "--"]
CMD ["bash"]
