# 1. Build aşaması
FROM node:18-alpine as build

WORKDIR /app

# Bağımlılıkları yükle (devDependencies dahil)
COPY package*.json ./
RUN npm ci

# Kaynak kodu kopyala
COPY . .

# Vite ile üretim için build al
RUN NODE_ENV=production npm run build

# 2. Production aşaması (sadece statik dosyalar + nginx)
FROM nginx:alpine

# Build sonucu oluşan dist dizinini nginx'e kopyala
COPY --from=build /app/dist /usr/share/nginx/html

# Özel nginx konfigürasyonunu kopyala
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Nginx'i foreground modda başlat
CMD ["nginx", "-g", "daemon off;"]
