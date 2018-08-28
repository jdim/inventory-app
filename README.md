### How to run

You should install docker, then

```
docker-compose up -d
```

Then open http://localhost:3000/api/version

### To view database

open http://localhost:8081/db/inventory/

### Product endpoint

```
/products
```

### You can use Postman to test api

Open tests from file:

```
api-tests.postman_collection
```

### To run jest tests (WIP)

```
docker-compose run api yarn test
```

### Some issues

While, for dev, api container use nodemon. In some cases it doesn't start(because of mongodb container), so you should just resave some code for restart api container
