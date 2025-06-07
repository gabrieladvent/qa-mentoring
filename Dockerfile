FROM node:20-alpine

# Install dependencies sistem yang dibutuhkan Playwright browsers
RUN apk add --no-cache \
    bash \
    dumb-init \
    curl \
    nss \
    freetype \
    harfbuzz \
    ttf-freefont \
    fontconfig \
    chromium \
    mesa-gl \
    libgcc \
    libstdc++ \
    alsa-lib \
    libc6-compat \
    libx11 \
    libxcomposite \
    libxdamage \
    libxrandr \
    libxext \
    libxfixes \
    libxi \
    libxrender \
    libxcb \
    libxshmfence \
    libxinerama \
    mesa-dri-gallium \
    mesa-egl \
    mesa-gl \
    && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package*.json ./

RUN npm install playwright && \
    npx playwright install && \
    npm cache clean --force && \
    npm prune --production && \
    rm -rf /root/.cache /root/.npm /tmp/*

COPY . .

ENTRYPOINT ["dumb-init", "--"]

CMD ["npx", "playwright", "test"]
