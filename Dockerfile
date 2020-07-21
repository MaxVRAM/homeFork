###

FROM    mhart/alpine-node

RUN     npm install -g http-server

WORKDIR /site
ADD     ./    /site

# The default port of the application
EXPOSE  8080

CMD ["http-server", "--cors", "-p8080", "/site"]
