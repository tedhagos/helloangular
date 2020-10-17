FROM nginx:alpine
COPY /dist/helloangular /usr/share/nginx/html
EXPOSE 80

