# You can download the project and write the next.

```
npm install 
```

# This application was deployed on railway with Atlas and these are the end-point. You can use postman to test it.

| GET  | node-api-user-production.up.railway.app/api/usuarios | Shows all of users
| POST | node-api-user-production.up.railway.app/api/usuarios | Create a new User
| Body - JSON |
|------------:|
```
{
  "nombre":"test3",
  "correo":"test3@yahoo.com",
  "password":"123456",
  "rol":"ADMIN_ROLE",
  "estado": true,
  "google":false
}
```
__Advertisement To delete an User you need to authenticate, because you need to generate a web token -  :)__

| POST | node-api-user-production.up.railway.app/api/auth/login | Login and generate a web token
| Body - JSON |
|------------:|
{
  "correo":"test4@yahoo.com",
  "password":"123456"
}

: result - Status OK
{
  "msg": "Login ok",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTIxZmMwZGZmNTU4NTQxYzA3Y2FlM2MiLCJpYXQiOjE2OTY3Mjc3MzMsImV4cCI6MTY5Njc0MjEzM30.3a5WO-cGZ-jc7QI46HemJZXyJcrRxIgRSgTHZsMj2xE"
}

| DELETE | node-api-user-production.up.railway.app/api/usuarios/651e1dc6edbf946a0f291b6c | Delete an User and you need to write x-token with token generated in the login

| Headers - x-token |
|------------------:|
x-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTIxZmMwZGZmNTU4NTQxYzA3Y2FlM2MiLCJpYXQiOjE2OTY3Mjc3MzMsImV4cCI6MTY5Njc0MjEzM30.3a5WO-cGZ-jc7QI46HemJZXyJcrRxIgRSgTHZsMj2xE

: result - Status OK
{
  "usuario": {
    "_id": "651e1dc6edbf946a0f291b6c",
    "nombre": "test1",
    "correo": "test1@yahoo.com",
    "rol": "ADMIN_ROLE",
    "estado": true,
    "google": false
  },
  "usuarioAutenticado": {
    "_id": "6521fc0dff558541c07cae3c",
    "nombre": "test4",
    "correo": "test4@yahoo.com",
    "rol": "ADMIN_ROLE",
    "estado": true,
    "google": false
  }
}

| PUT | node-api-user-production.up.railway.app/api/usuarios/651e1dd0edbf946a0f291b70 | Update an User with id
| Body - JSON |
|------------:|
{
    "_id": "651e1dd0edbf946a0f291b70",
    "nombre": "test2-modify",
    "correo": "test2@yahoo.com",
    "rol": "ADMIN_ROLE",
    "estado": true,
    "google": false
}

# API-REST - NODE JS - CRUD USER - LOGIN
This Rest application has a basic CRUD of users and was created using the following technologies: 
+ Node Js
+ Express
+ MongoDB
+ JWT - Json Web Token
+ Mongoose
+ Express Validators
+ BCrypt js

