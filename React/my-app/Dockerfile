# pull official base image
FROM node:17-alpine3.12

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
#RUN npm install --silent
#RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install -g npm@latest
RUN npm install axios
RUN npm i primereact primeicons

# add app
COPY . ./
EXPOSE 3000
# start app
CMD ["npm", "start"]