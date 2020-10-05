FROM nginx:alpine
COPY ./public /usr/share/nginx/html
COPY ./derivcrypto.com.conf /etc/nginx/conf.d/default.conf
