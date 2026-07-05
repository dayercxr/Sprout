# Sprout
Sprout is a light-weight web application designed for cryptocurrency pricing analysis. 
It provides a centralized dashboard to discover trending coin collections, track floor prices, analyze
market capitalizations, and view trading volumes.

## ✨ Key Features
- Multi-Chain Comparison: Compare collection entry points side-by-side across Ethereum, Solana, and Polygon in a unified view.

- Smart Caching: Temporarily holds fetched data locally to completely eliminate redundant external requests.

- Delta Snapshotting: Preserves local chronological logs to track price variances without hitting premium historical API endpoints.

- Zero Cost Overhead: Tailored explicitly to operate reliably within standard public tiers or free developer account limitations.



## 🛠️ Tech Stack:

- React.js
- Next.js
- Better Auth
- Typescript
- PostgreSQL
- Drizzle ORM
- Material-UI (MUI)


## 📁 Project Structure

```bash
.
├── AGENTS.md
├── CLAUDE.md
├── drizzle.config.ts
├── eslint.config.mjs
├── eslint.config.mts
├── next.config.ts
├── package-lock.json
├── package.json
├── prettier.config.ts
├── public
├── README.md
├── src
│   ├── app
│   │   ├── (auth)
│   │   │   ├── layout.tsx
│   │   │   ├── login
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   └── signup
│   │   │       └── page.tsx
│   │   ├── (main)
│   │   │   ├── calculator
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── profile
│   │   │   │   └── page.tsx
│   │   │   └── watchlist
│   │   │       └── page.tsx
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   └── [...all]
│   │   │   │       └── route.ts
│   │   │   └── cron
│   │   │       └── update-prices
│   │   │           └── routes.ts
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components
│   │   ├── calculator
│   │   │   ├── calculate.tsx
│   │   │   ├── calculateDisplay.tsx
│   │   │   ├── calculateHeader.tsx
│   │   │   └── calculateInput.tsx
│   │   ├── dashboard
│   │   │   ├── priceChart.tsx
│   │   │   ├── topCollection.tsx
│   │   │   └── trendingCollections.tsx
│   │   ├── general
│   │   │   ├── auth
│   │   │   │   ├── card.tsx
│   │   │   │   └── container.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── themeProvider.tsx
│   │   │   └── themeToggle.tsx
│   │   ├── home
│   │   │   ├── banner.tsx
│   │   │   ├── features.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── nav.tsx
│   │   │   └── setup.tsx
│   │   ├── login
│   │   │   └── login.tsx
│   │   ├── signup
│   │   │   └── signup.tsx
│   │   └── watchlist
│   │       ├── content.tsx
│   │       ├── dialog.tsx
│   │       ├── entry.tsx
│   │       └── statistics.tsx
│   ├── config.ts
│   ├── context
│   ├── data
│   │   ├── calculator.ts
│   │   ├── dashboard.ts
│   │   ├── home.ts
│   │   ├── login.ts
│   │   ├── navbar.ts
│   │   ├── signup.ts
│   │   └── watchlist.ts
│   ├── db
│   │   ├── index.ts
│   │   └── schema.ts
│   ├── hooks
│   │   └── calculator
│   │       ├── investment.ts
│   │       ├── profit.ts
│   │       └── roi.ts
│   ├── libs
│   │   ├── api
│   │   │   ├── coins.ts
│   │   │   ├── index.ts
│   │   │   └── recharts.ts
│   │   ├── auth
│   │   │   ├── auth-client.ts
│   │   │   ├── auth-server.ts
│   │   │   ├── index.ts
│   │   │   └── schema.ts
│   │   └── client
│   │       ├── calculator.ts
│   │       └── menubar.ts
│   ├── migrations
│   │   ├── 0000_solid_speedball.sql
│   │   └── meta
│   │       ├── _journal.json
│   │       └── 0000_snapshot.json
│   ├── proxy.ts
│   ├── theme.ts
│   └── types.ts
└── tsconfig.json
```

## Development

### Prerequisites

- Node.js


### Setup Environment

- Create a .env file:
```bash
cp .env.example .env
```
You can find the required environment variables in `.env.example`.


### Start Development Environment

- Install Dependencies
```bash
npm i
```

- Run Frontend Application
```bash
npm run dev
```

### Local URLs

- Next.js Application
```bash
http://localhost:3000
```

## API Reference

| Method   | Endpoint      | Auth Required  | Description                      |
| -------- | ------------- | -------------- | -------------------------------- |
| GET      | `/`           | Optional       | Homepage endpoint                |
| GET/POST | `/login`      | No             | Login Authentication endpoint    |
| GET/POST | `/signup`     | No             | Signup Authentication endpoint   |
| GET      | `/dashboard`  | Yes            | Coins Data Dashboard endpoint    |
| GET      | `/calculator` | Yes            | Investment calculations endpoint |
| GET/POST | `/watchlist`  | Yes            | List of personal Coins endpoint  |

> [!NOTE]
> Endpoints marked as Auth Required:<br>
> • Yes: Endpoint is only accessible when authenticated either via credentials or social providers.<br>
> • No: Endpoint is only accessible when not authenticated.<br>
> • Optional: Endpoint is accessible when authenticated/not authenticated, but page content may vary based on authentication status.

## Database Migration

- Generate Migration
```bash
npx drizzle-kit generate
```

- Apply Migration
```bash
npx drizzle-kit migrate
```

## Database Migration (Development)
- Alternatively, if you want to apply schema changes immediately without generating migration files, run
```bash
npx drizzle-kit push
```

> [!CAUTION]
> Only use `drizzle-kit push` for local development/rapid prototyping.  
> Never use it in production.

## Auto-Format Code
```bash
npm run lint
npm run format
```
