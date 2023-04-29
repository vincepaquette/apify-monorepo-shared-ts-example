FROM apify/actor-node:16

COPY crawlers/actor_1/ ./actor_1/
COPY shared/ ./shared/
COPY package.json ./

WORKDIR /usr/src/app/actor_1

RUN yarn install --production=false
RUN yarn workspace @crawlers/actor_1 build

CMD ["yarn", "workspace", "@crawlers/actor_1", "start:prod"]
