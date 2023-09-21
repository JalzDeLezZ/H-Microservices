<!-- MONGO ATLAS -->

u:admin
p:SyncRjoyOV3hR1mTX
u:demo
p:U3mYxNuO0fkHVSqp

My IP Address
190.43.78.7/32X

All Access
0.0.0.0/0

mongodb+srv://<username>:<password>@cluster0.ziuy4wa.mongodb.net/

<!-- DOCKER 1 -->

docker build -t gateway .

docker run -p 3000:3000 gateway

---

$ docker build -t characters .
docker run -dp 3001:3001 characters

---

docker network create starwars

```bash
docker run -dp 3000:3000 --network=starwars --name=gateway_ gateway
docker run -p 3001:3001 --network=starwars --name=characters_ characters
```

"scripts": {
"start": "node index.js",
"docker_run": "docker run -p 8000:8000 --network=starwars --name=gateway gateway",
"docker_build": "docker build -t gateway ."
},
