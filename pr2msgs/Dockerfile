FROM httpd:2.4-alpine

COPY ./httpd.conf /httpd_user.conf
COPY ./build/pr2msgs.js /usr/local/apache2/htdocs/resources/

RUN echo "Include /httpd_user.conf" >> /usr/local/apache2/conf/httpd.conf && \
    chmod -R a+rx /usr/local/apache2/htdocs

EXPOSE 80
