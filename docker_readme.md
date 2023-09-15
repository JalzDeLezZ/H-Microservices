docker build -t gateway .

docker run -p 3000:3000 gateway

_____________
$ docker build -t characters .
docker run -dp 3001:3001 characters

_____________
docker network create starwars 

docker run -dp 3000:3000 --network=starwars --name=gateway gateway
docker run -p 3001:3001 --network=starwars --name=characters characters