# redis-learning

### Backend is the main backend code and worker to consume queue messages and do work on it

## Installing Redis

1. docker run --name redis-learning -p6379:6379 -d redis:latest
2. docker exec -it <Id> /bin/bash
3. redis-cli

## Backend

1. npm init
2. npx tsc --init
3. npm i express redis @types/express
4. add "type":"module", in package.json to enable import

## Run code

1. npx tsc
2. node dist/index.js
