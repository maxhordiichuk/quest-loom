# Quest Loom

Quest Loom is a platform for creating and sharing quests. A quest is a series of tasks that a user can complete. Quests can be created by anyone and shared with others.

## Prerequisites

- Node.js
- MongoDB
- AWS S3

## Setup

Set the environment variables. You can use the `.env` file as a template.

Install the dependencies:

```bash
npm install
```

Generate the Prisma client:

```bash
npm run prisma:generate
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Development

### Database

This project uses [Prisma](https://prisma.io) to interact with the database.

To generate the Prisma client, run the following command:

```bash
npm run prisma:generate
```

To sync the database, run the following command:

```bash
npm run prisma:db:push
```

## Production

Set the environment variables. You can use the `.env` file as a template.

Install the dependencies:

```bash
npm install
```

Generate the Prisma client:

```bash
npm run prisma:generate
```

To build the project, run the following command:

```bash
npm run build
```

To start the production server, run the following command:

```bash
npm start
```

## Testing

This project uses [Jest](https://jestjs.io) for testing.

To run the tests, run the following command:

```bash
npm test
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
