# docker build -t movies-api 
# docker run -d movies-api

FROM node:10-alpine
WORKDIR /srv/app
COPY . .
RUN npm install
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "index.js"]