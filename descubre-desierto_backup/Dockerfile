FROM httpd:2.4-alpine

# Change Apache to listen on port 90
RUN sed -i 's/Listen 80/Listen 90/' /usr/local/apache2/conf/httpd.conf

# Enable .htaccess
RUN sed -i 's/AllowOverride None/AllowOverride All/' \
    /usr/local/apache2/conf/httpd.conf

# Set ServerName to avoid warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Copy site files
COPY descubredesierto.com/ /usr/local/apache2/htdocs/
COPY .htaccess /usr/local/apache2/htdocs/.htaccess

EXPOSE 90
