# build environment
FROM node:12-alpine
RUN mkdir -p /usr/src/app
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
WORKDIR /usr/src/app
RUN yarn install
COPY . /usr/src/app
RUN yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]
