ALTER TABLE "watchlist" ADD CONSTRAINT "watchlist_user_id_coin_id_pk" PRIMARY KEY("user_id","coin_id");--> statement-breakpoint
ALTER TABLE "watchlist" ADD COLUMN "buyPrice" double precision;--> statement-breakpoint
ALTER TABLE "watchlist" ADD COLUMN "quantity" double precision;--> statement-breakpoint
ALTER TABLE "watchlist" ADD COLUMN "coin_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "watchlist" ADD COLUMN "price_usd" double precision;--> statement-breakpoint
ALTER TABLE "watchlist" ADD COLUMN "market_cap" double precision;--> statement-breakpoint
ALTER TABLE "watchlist" ADD COLUMN "change_24h" double precision;--> statement-breakpoint
ALTER TABLE "watchlist" ADD COLUMN "updated_at" timestamp;--> statement-breakpoint
ALTER TABLE "watchlist" DROP COLUMN "id";--> statement-breakpoint
ALTER TABLE "watchlist" DROP COLUMN "crypto_id";--> statement-breakpoint
ALTER TABLE "watchlist" DROP COLUMN "percent_change";--> statement-breakpoint
ALTER TABLE "watchlist" DROP COLUMN "created_at";