FROM httpd:2.4-alpine

# Make Apache listen on 90
RUN sed -i 's/Listen 80/Listen 90/' /usr/local/apache2/conf/httpd.conf

# Enable .htaccess
RUN sed -i 's/AllowOverride None/AllowOverride All/' \
    /usr/local/apache2/conf/httpd.conf

# Silence ServerName warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Copy the site
COPY descubredesierto.com/ /usr/local/apache2/htdocs/
COPY .htaccess /usr/local/apache2/htdocs/.htaccess

EXPOSE 90
