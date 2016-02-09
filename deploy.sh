#!/bin/bash

#build image
docker build -t lil-strapi-api .

# tag image
docker tag lil-strapi-api:latest lilapi/lil-strapi-api:latest
#docker tag lil-strapi-api:latest lilapi/lil-strapi-api:build-$CIRCLE_BUILD_NUM

docker login -u=$DOCKER_USERNAME -p=$DOCKER_PASSWORD -e=$DOCKER_EMAIL
docker push lilapi/lil-strapi-api:latest
#docker push lilapi/lil-strapi-api:build-$CIRCLE_BUILD_NUM


# trigger deployment
