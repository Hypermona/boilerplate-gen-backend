# Boilerplate Generator - Backend

This application will provide API endpoints to Generate and Download boilerplate code for the various tech stacks.

## Requirements

- NodeJS installed

## Run Locally

Clone the project

```bash
  git clone https://github.com/Hypermona/boilerplate-gen-backend
```

Go to the project directory

```bash
  cd boilerplate-gen-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Tech stacks Supported

- ### For web

  **Client:** React, Vue, Svelte

  **Server:** Node, Express

  **DataBase:** MongoDB, mysql, postgresql

- ### For Mobile

  **Client:** React-native

  **Server:** Node, Express

  **DataBase:** MongoDB, mysql, postgresql

## Working

- **Generating Boilerplate**

  - All the frameworks and docker files are stored inside data folder.

  - When user requests a boilerplate new folder will be initialized in the name of project.

  - Also add DBs if required.

  - Then insert required frameworks and docker files.

  - if required generate docker-compose using js-yaml parser.

  - Then send success message to user.

- **Downloading Boilerplate**

  - Convert the boilerplate into zip file.

  - Then send back to user.

  - Then delete the Boilerplate.

## API Reference

#### Generate frontend

```http
  GET /generate/web/frontend
```

```js
{
    name: "name of project"
    framework : "react | vue | svelte"
    container : true | false
}
```

#### Generate backend

```http
  GET /generate/web/backend
```

```js
{
    name: "name of project"
    framework : "express"
    db: "mongoDB | mysql | postgresql"
    container : true | false
}
```

#### Generate fullstack

```http
  GET /generate/web/fullstack
```

```js
{
  name: "name of project";
  frontend: "react | vue | svelte";
  backend: "express";
  db: "mongoDB | mysql | postgresql";
  container: true | false;
  compose: true | false; // if container is true then this field is always true
}
```

#### [android / ios] only frontend

```http
  GET /generate/mobile/frontend
```

```js
{
  name: "name of project";
  framework: "react-native";
}
```

#### [android / ios] fullstack

```http
  GET /generate/mobile/fullstack
```

```js
{
  name: "name of project";
  frontend: "react-native";
  backend: "express";
  db: "mongoDB | mysql | postgresql";
}
```

#### download boilerplate as zip file

```http
  GET /download
```

```js
{
  name: "name of project";
}
```
