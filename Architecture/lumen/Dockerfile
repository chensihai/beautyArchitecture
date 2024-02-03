FROM alpine:3.13

# for laravel lumen run smoothly
RUN apk --no-cache add \
php7 \
php7-fpm \
php7-pdo \
php7-mbstring \
php7-openssl

# for our code run smoothly
RUN apk --no-chace add \
php7-json \
php7-dom \
curl \
php7-curl

# for swagger run smoothly
RUN apk --no-cache add \
php7-tokenizer

# for composer & our project depency run smoothly
RUN apk --no-cache add \
php7-phar \
php7-xml \
php7-xmlwriter

# if need composer to update plugin / vendor used
RUN php7 -r "copy('http://getcomposer.org/installer', 'composer-setup.php');" && \
php7 composer-setup.php --install-dir=/usr/bin --filename=composer && \
php7 -r "unlink('composer-setup.php');"

# copy all of the file in folder to /src
COPY . /src
WORKDIR /src

RUN composer update

# run the php server service
# move this command to -> docker-compose.yml
# CMD php -S 0.0.0.0:8080 public/index.php





# FROM php:8.1-alpine

# WORKDIR /app

# # install zip, unzip and composer
# RUN apk add -U zip unzip \
#  && curl -sS https://getcomposer.org/installer | php \
#  && mv composer.phar /usr/local/bin/composer

# RUN composer self-update --2
# # install composer plugin
# # RUN composer global require hirak/prestissimo

# # create Laravel project
# # RUN composer create-project --prefer-dist laravel/lumen /app

# # RUN composer install
# # install PHP extensions
# RUN apk add --no-cache oniguruma-dev
# RUN docker-php-ext-install pdo_mysql mysqli mbstring
# # no permisson access to /app/storage/logs/lumen-2024-02-03.log, make it writable


# # RUN mkdir -p /app/storage/logs && chown 1000:1000 /app/storage/logs
# USER www-data

# # command
# CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]