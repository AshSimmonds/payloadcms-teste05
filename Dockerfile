# https://docs.docker.com/samples/library/node/
ARG NODE_VERSION=14

# Build container
FROM node:${NODE_VERSION}-alpine AS build
ARG DUMB_INIT_VERSION

WORKDIR /home/node

ADD . /home/node

RUN apk add git

RUN yarn install

RUN yarn build && yarn cache clean

# Runtime container
FROM node:${NODE_VERSION}-alpine

WORKDIR /home/node

COPY --from=build /home/node /home/node

EXPOSE 3000
CMD ["yarn", "run", "serve"]
