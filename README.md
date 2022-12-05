dock# API GL

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-99.03%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-92.39%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-97.47%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-98.94%25-brightgreen.svg?style=flat) |


## Docker

For development we're using docker with node 17.

## Developing

The port of this appplication is predefined as `3009`

## Getting Started

### Installing

```
  docker-compose run app ash -c "npm install"
```

## Running

### Start the App

```
  docker-compose up app
```

### Create DB

```
  npm run db:create
```

### Running migrations

```
  npm run db:migrate:run
```

### Running seeds

```
  npm run db:seed:run
```

### More details about migrations

```
  https://typeorm.io/#/migrations
```

### Run Tests

```
  docker-compose run tst
```

## Scripts

- `dev`: Run the application in development mode
- `start` Run the application in production mode
- `test`: Run the test suite
