
TS API

Simple REST API template using Express, TypeScript, Prisma ORM, and PostgreSQL.

## Prerequisites

### Requirements

1. NodeJS v18.x or later
2. Yarn v1.22.x or later
3. PostgreSQL database
4. Prisma ORM CLI

### Install

#### Production

$ yarn install --prod
# or
$ npm i --prod

#### Development

$ yarn install
# or
$ npm i

## Configuration

### Env File

Configuration for `.env` file:

| Key           | Description                         | Example Value                            |
| ------------- | ----------------------------------- | ---------------------------------------- |
| DATABASE_URL  | Database connection string          | postgresql://user:pass@host:port/dbname  |
| PORT          | Port to run the API service         | 3000                                     |
| JWT_SECRET    | Secret key for JWT token            | your_jwt_secret_key                      |
| LOG_LEVEL     | Log level (info, debug, error, etc.)| info                                     |

## Database Migration

### Generate Prisma Client

$ npx prisma generate

### Run Migration

$ npx prisma migrate dev --name init

or for production:

$ npx prisma migrate deploy

## Runtime

### Production

$ yarn build
$ yarn start
# or
$ npm run build
$ npm run start

### Development

$ yarn dev
# or
$ npm run dev

## API Endpoints

### Example Available Routes:

| Method | Endpoint           | Description               |
| ------- | -----------------  | ------------------------- |
| POST    | /api/auth/register | Register a new user       |
| POST    | /api/auth/login    | Login & get JWT token     |
| GET     | /api/users         | Get list of users         |
| GET     | /api/users/id      | Get detail of a user      |

## Testing

### Health Check

$ curl -v http://localhost:3000/health

Expected result:

< HTTP/1.1 200 OK
< Content-Type: application/json
{
  "status": "OK"
}

## Project Structure

/src
  /controllers
  /middlewares
  /routes
  /services
  /utils
  /prisma
  /types
prisma/schema.prisma
.env
tsconfig.json

## Useful Commands

| Command               | Description                                |
| --------------------- | ------------------------------------------ |
| yarn dev              | Run development server                     |
| yarn build            | Build the project                          |
| yarn start            | Run the compiled app                       |
| yarn prisma generate  | Generate Prisma client                     |
| yarn prisma migrate   | Run Prisma migrations                      |
| yarn lint             | Run linter (eslint)                        |

## Deployment

- Production: TBD
- Staging: TBD

## Logs

- [x] Local console log only (development)
- Cloud logging setup: TBD

## SonarQube / Code Quality

- TBD