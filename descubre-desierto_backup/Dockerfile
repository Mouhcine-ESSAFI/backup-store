FROM httpd:2.4-alpine

# Make Apache listen on port 90
RUN sed -i 's/Listen 80/Listen 90/' /usr/local/apache2/conf/httpd.conf

# Explicitly enable mod_rewrite
RUN sed -i 's/^#LoadModule rewrite_module/LoadModule rewrite_module/' \
    /usr/local/apache2/conf/httpd.conf

# Allow .htaccess overrides
RUN sed -i 's/AllowOverride None/AllowOverride All/' \
    /usr/local/apache2/conf/httpd.conf

# Silence ServerName warning
RUN echo "ServerName localhost" >> /usr/local/apache2/conf/httpd.conf

# Copy site
COPY descubredesierto.com/ /usr/local/apache2/htdocs/
COPY .htaccess /usr/local/apache2/htdocs/.htaccess

EXPOSE 90
