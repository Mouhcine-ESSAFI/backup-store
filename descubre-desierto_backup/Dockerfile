FROM httpd:2.4-alpine

COPY ./site /usr/local/apache2/htdocs
COPY .htaccess /usr/local/apache2/htdocs/.htaccess

RUN sed -i 's/AllowOverride None/AllowOverride All/' \
    /usr/local/apache2/conf/httpd.conf
