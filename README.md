# Brochure Website

Сайт-визитка / лендинг на **Next.js** с отправкой заявок в Telegram и на email (Resend), формой с Cloudflare Turnstile и базой данных на PostgreSQL (Drizzle ORM).

---

## Требования

Перед началом убедитесь, что установлено:

- **Node.js** 18.18+ (рекомендуется 20 LTS) — https://nodejs.org/
- **npm** (идёт вместе с Node.js) или `yarn` / `pnpm` / `bun` — на выбор
- **PostgreSQL** 14+ — локально или в облаке (Neon, Supabase, Railway и т.д.)

Проверить версии:

```bash
node -v
npm -v

git clone git@github.com:perv-cell/brochure-website.git
cd brochure-website

npm install

или, если используете другой пакетный менеджер:
yarn install
# или
pnpm install
# или
bun install

 Создать .env
cp .env.example .env

Настроить базу данных
бедитесь, что PostgreSQL запущен, и создайте базу:
CREATE DATABASE brochure_db;


Примените схему через Drizzle:
npx drizzle-kit push

npm run dev

Откройте http://localhost:3000 — сайт должен открыться.
