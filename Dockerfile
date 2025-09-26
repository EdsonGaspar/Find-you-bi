FROM  node:lts-alpine3.22

RUN mkdir -p /usr/src/find-your-bi

WORKDIR /usr/src/find-your-bi
COPY . /usr/src/find-your-bi

RUN npm install
RUN npm run build

EXPOSE 3000
ENV PORT 3000

CMD ["npm run start"]