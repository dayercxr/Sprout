# Sprout
Sprout is a light-weight data-driven web application designed for NFT and cryptocurrency pricing analysis. 
This platform provides a centralized dashboard to discover trending NFT collections, track historical floor prices, analyze
market capitalizations, and view trading volumes across multiple blockchain networks.

## ✨ Key Features
- Multi-Chain Comparison: Compare collection entry points side-by-side across Ethereum, Solana, and Polygon in a unified view.

- Smart Caching: Temporarily holds fetched data locally using a configurable Time-To-Live (TTL) module to completely eliminate redundant external requests.

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
│   │   │   └── watchlist
│   │   │       └── page.tsx
│   │   ├── api
│   │   │   └── auth
│   │   │       └── [...all]
│   │   │           └── route.ts
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components
│   │   ├── calculator
│   │   │   ├── calculate.tsx
│   │   │   ├── calculateDisplay.tsx
│   │   │   ├── calculateHeader.tsx
│   │   │   └── calculateInput.tsx
│   │   ├── dashboard
│   │   │   ├── topCollection.tsx
│   │   │   └── trendingCollections.tsx
│   │   ├── general
│   │   │   ├── navbar.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── themeProvider.tsx
│   │   │   └── themeToggle.tsx
│   │   ├── home
│   │   │   ├── banner.tsx
│   │   │   ├── features.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── nav.tsx
│   │   │   └── setup.tsx
│   │   └── watchlist
│   │       ├── content.tsx
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
│   │   ├── auth-client.ts
│   │   ├── auth-schema.ts
│   │   ├── auth.ts
│   │   └── index.ts
│   ├── hooks
│   ├── libs
│   │   ├── coins.ts
│   │   ├── index.ts
│   │   └── nft.ts
│   ├── migrations
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
> Only use `drizzle-kit push` for local development, rapid prototyping, or working with databases like SQlite/Vercel Postgres.
> Never use `drizzle-kit push` in production as the absence of static migration files causes difficulty in tracking execution history safely via CI/CD deployment pipeline, which can lead to unintended, data-destructive alter operations.

## Auto-Format Code
```bash
npm run lint
npm run format
```
