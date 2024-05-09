# User Api Spec

## Register User

Endpoint : POST /api/users

Request Body :

```json
{
  "username": "kevin",
  "password": "rahasia"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "kevin",
    "name": "kevin lelegoyeng"
  }
}
```

Response Body (Failed)

```json
{
  "errors": "Username must not blank, ..."
}
```

## Login User

Endpoint : POST /api/users/login

Request Body :

```json
{
  "username": "kevin",
  "password": "rahasia"
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "kevin",
    "name": "kevin lelegoyeng",
    "token": "uuid"
  }
}
```

Response Body (Failed)

```json
{
  "errors": "Username or password wrong, ..."
}
```

## Get User

Endpoint : GET /api/current

Request Header :

- X-API-TOKEN : token

Response Body (Success):

```json
{
  "data": {
    "username": "kevin",
    "name": "kevin lelegoyeng"
  }
}
```

Response Body (Failed)

```json
{
  "errors": "Unauthorized, ..."
}
```

## Update User

Endpoint : PATCH /api/current

Request body :

- X-API-TOKEN : token

Response Body:

```json
{
  "password": "rahasia", //tidak wajib
  "name": "kevin lelegoyeng" //tidak wajib
}
```

Response Body (Success):

```json
{
  "data": {
    "username": "kevin",
    "name": "kevin lelegoyeng"
  }
}
```

Response Body (Failed)

```json
{
  "errors": "Unauthorized, ..."
}
```

## Logout User

Endpoint : DELETE /api/current

Request body :

- X-API-TOKEN : token

Response Body (Success):

```json
{
  "data": "ok"
}
```

Response Body (Failed)

```json
{
  "errors": "Unauthorized, ..."
}
```
