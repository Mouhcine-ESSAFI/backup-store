FROM httpd:2.4-alpine

# Enable .htaccess
RUN sed -i 's/AllowOverride None/AllowOverride All/' \
    /usr/local/apache2/conf/httpd.conf

# Copy the HTTrack website
COPY descubredesierto.com/ /usr/local/apache2/htdocs/

# Copy .htaccess
COPY .htaccess /usr/local/apache2/htdocs/.htaccess

EXPOSE 80
