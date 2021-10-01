FROM alpine:3.14

RUN apk add --update redis

CMD [ "redis-server" ]