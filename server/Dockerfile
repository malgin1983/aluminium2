FROM node:15-slim
WORKDIR /app
ADD package.json /app/package.json
RUN npm config set registry http://registry.npmjs.org
RUN npm install
RUN npm run build
ADD . /app
EXPOSE 5500
CMD ["npm", "run" ,"prod"]
