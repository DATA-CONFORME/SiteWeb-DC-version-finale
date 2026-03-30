# ── Stage 1 : build du front Vite ────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
# Installe toutes les dépendances (y compris devDeps pour le build Vite)
RUN npm ci

COPY . .

# VITE_BASE=/ car le site est servi à la racine du domaine
ARG VITE_BASE=/
ENV VITE_BASE=${VITE_BASE}

RUN npm run build

# ── Stage 2 : nginx servant le SPA + proxy /api → service api ────────────────
FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
