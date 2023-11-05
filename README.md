You can download the project and write the next.

```
npm install 
```

This application was deployed on railway with Atlas. You can use postman to test it.
## API -REST CRUD - USER 
 
| Request | End-point                                            | Description              |
| -------:|----------:|-----------------------------------------:|
| GET     | node-api-user-production.up.railway.app/api/usuarios | Shows all of users       |
| POST    | node-api-user-production.up.railway.app/api/usuarios | Create a new User - BODY JSON 
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
| Request | End-point                                               | Description                    |
| -------:|----------:|--------------------------------------------:|
| POST   | node-api-user-production.up.railway.app/api/auth/login  | Login and generate a web token |
```
{
  "correo":"test4@yahoo.com",
  "password":"123456"
}
```
#### Result Login - Status OK
```
{
  "msg": "Login ok",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTIxZmMwZGZmNTU4NTQxYzA3Y2FlM2MiLCJpYXQiOjE2OTY3Mjc3MzMsImV4cCI6MTY5Njc0MjEzM30.3a5WO-cGZ-jc7QI46HemJZXyJcrRxIgRSgTHZsMj2xE"
}
```

| Request | End-point                                                                      | Description    |
| -------:|----------:|-------------------------------------------------------------------:|
| DELETE  | node-api-user-production.up.railway.app/api/usuarios/651e1dc6edbf946a0f291b6c  | Delete User    |

    // Put your x-token in the Headers
    x-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTIxZmMwZGZmNTU4NTQxYzA3Y2FlM2MiLCJpYXQiOjE2OTY3Mjc3MzMsImV4cCI6MTY5Njc0MjEzM30.3a5WO-cGZ-jc7QI46HemJZXyJcrRxIgRSgTHZsMj2xE

### Result Delete - Status OK
```
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
```

| Request | End-point                                                                      | Description    |
| -------:|----------:|-------------------------------------------------------------------:|
| PUT     | node-api-user-production.up.railway.app/api/usuarios/651e1dd0edbf946a0f291b70  | Update User - Write the correct id   |
```
{
    "_id": "651e1dd0edbf946a0f291b70",
    "nombre": "test2-modify",
    "correo": "test2@yahoo.com",
    "rol": "ADMIN_ROLE",
    "estado": true,
    "google": false
}
```

# API-REST - NODE JS - CRUD USER - LOGIN
This Rest application has a basic CRUD of users and was created using the following technologies: 
+ Node Js
+ Express
+ MongoDB
+ JWT - Json Web Token
+ Mongoose
+ Express Validators
+ BCrypt js

# SignIn with Google account
You can access it with a Google Account 
