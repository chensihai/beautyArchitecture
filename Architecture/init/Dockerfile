FROM node:16.17.0-alpine3.15

# Set the working directory
WORKDIR /app

# # Install PHP and required extensions
RUN apk add \
php7 \
php7-fpm \
php7-pdo \
php7-mbstring \
php7-openssl \
php7-json \
php7-dom \
curl
RUN apk add php7-curl \
php7-tokenizer \
php7-phar \
php7-xml \
php7-xmlwriter

# # Install Composer
RUN php7 -r "copy('http://getcomposer.org/installer', 'composer-setup.php');" && \
php7 composer-setup.php --install-dir=/usr/bin --filename=composer && \
php7 -r "unlink('composer-setup.php');"

# Install create-react-app globally
RUN npm install -g create-react-app

# Copy the entrypoint script into the image
# COPY ./init.sh /usr/local/bin/init.sh
# RUN chmod +x /usr/local/bin/init.sh

# Create backend and frontend folders if they don't exist
# RUN mkdir -p ../backend && \
# mkdir -p ../frontend

# Set the script as the entrypoint
# ENTRYPOINT ["init.sh"]
# open shell, this seems not be triggered
# CMD ["/bin/sh"]

# if local folder ../backend not exist, create it
# RUN composer create-project --prefer-dist laravel/lumen backend

# if local folder ../frontend not exist, create it
# RUN create-react-app frontend
