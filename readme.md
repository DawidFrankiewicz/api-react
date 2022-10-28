# Quick start
## Run docker contaienrs
 - Build ```docker-compose build```
 - Start ```docker-compose up```
 - Import sample database from [/mongodb-export/videos.json](/mongodb-export/videos.json)
## Access app
 - [```localhost:3000```](http://localhost:3000/) - frontend react app 
 - [```localhost:5000```](http://localhost:5000/) - backend nodejs app 
 - [```localhost:5000/api/videos```](http://localhost:5000/api/videos) - returns api videos data
# About app
Code includes seperate backend api app and frontend apps. Backend api also uses database to serve api.
 - [```./display-api-react```](./display-api-react) is a react frontend app that uses api.
 - [```./nodejs-api```](./nodejs-api) is a nodejs backend server that uses mongodb.
 - [```./mongo-data```](./mongo-data) is a mongo database used to store api data.

# General
## Updating docker contianer
 - Build ```docker-compose build```
 - Start ```docker-compose up```
## CLI access to mongodb
 - Connect ```docker exec -it mongo_container mongosh -u api_db_user -p api_db_passXYZ```
 - Change database ```use nodejs_api```
 - Display collection ```db.videos.find()```

# Known issues
  - [ ] Quick fix - Run 'npm install' in nodejs-api container to install dependencies if error occures