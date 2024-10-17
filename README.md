# Medusa 2.0 Fashion E-Commerce Starter

## Prerequisites

- Node >= 20
- Yarn >= 3.5
- Docker and Docker Compose
- Stripe account (for payments)

## Quickstart

```bash
git clone git@github.com:Agilo/fashion-starter.git
```

### Medusa

```bash
cd medusa

# Create the .env file
cp .env.template .env

# Install dependencies
yarn

# Spin up the database and redis
docker-compose up -d

# Build the project
yarn build

# Run the migrations
yarn medusa db:migrate

# Seed the database
yarn seed

# Create an user
yarn medusa user -e "admin@admin.local" -p "supersecret"

# Start the development server
yarn dev
```

At this point you should be able to access the Medusa admin at http://localhost:9000/app with the credentials you just created. After logging in, you should go to http://localhost:9000/app/settings/publishable-api-keys, copy the publishable key and paste it into the `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` env variable in the `storefront/.env.local` file.

### Storefront

```bash
cd storefront

# Create the .env.local file
cp .env.template .env.local

# Install dependencies
yarn

# Start the development server
yarn dev
```
