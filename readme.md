# General
## Updating docker contianer
 - Build ```docker-compose build```
 - Start ```docker-compose up```
## CLI access to mongodb
 - Connect ```docker exec -it mongo_container mongosh -u api_db_user -p api_db_passXYZ```
 - Change database ```use nodejs_api```
 - Display collection ```db.videos.find()```