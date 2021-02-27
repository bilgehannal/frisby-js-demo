#!/bin/sh

TZ=Europe/Istanbul

echo "start for docker running..."

npm run start:$DEPLOY_TYPE
