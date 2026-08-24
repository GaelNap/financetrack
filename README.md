# Calanque

**The finance dashboard of Studio Calanque — Marseille.**

Calanque is the studio's own dashboard for the money side of running a small
creative practice: what came in this month, what goes out on the 1st, how much
is set aside for URSSAF, and how long the buffer would last if the phone stopped
ringing. It runs entirely in the browser on demo data, so it can be opened,
shown to an accountant, or deployed to GitHub Pages without any backend.

Built on React 18 + TypeScript + MUI, forked from
[Mentorg/fintrack](https://github.com/Mentorg/fintrack) and rebuilt around
Studio Calanque's identity, currency and way of working.

## What's inside

| Page | What it answers |
| --- | --- |
| **Overview** | Income, expenses, balance, savings and investments at a glance |
| **Budget** | Where the studio's money comes from, and where it goes |
| **Bills** | Every recurring cost — lease, fibre, software, URSSAF — and what's due next |
| **Reports** | Trends across the year, month by month |
| **Debt** | Loans and credit lines, and how fast they're shrinking |
| **Investments** | What the studio holds outside the current account |
| **Net Worth** | Everything the studio owns, minus everything it owes |
| **Settings** | The studio profile, address, VAT number and regional preferences |

## Making it yours

Every detail that identifies this instance lives in one file —
[`src/config/brand.ts`](src/config/brand.ts):

```ts
export const brand = { name: "Calanque", fullName: "Studio Calanque", ... };
export const account = { displayName, owner, email, phone, address, taxId, ... };
export const preferences = { locale: "fr-FR", currency: "EUR", ... };
```

Change those values and the sidebar, the user menu, the settings page, the
currency formatting and the chart palette all follow. The contact details
shipped here are placeholders — swap in the studio's real email, phone, VAT
number and address before deploying anywhere public.

The visual identity is two files: `src/assets/logo.svg` (the inlet, cliffs and
sun) and `src/assets/avatar.svg` (the **SC** monogram). Colours live in
`src/assets/theme.ts` — deep-sea navy surfaces, turquoise water as the accent,
limestone in light mode, terracotta for anything negative.

## Running it

Requires Node.js 18+ and npm.

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # type-check and build to dist/
npm run lint    # eslint
npm run deploy  # publish dist/ to GitHub Pages
```

## Data

All figures are illustrative demo data under `src/**/data/`, written to look
like a small Marseille studio's books. Nothing is fetched, stored or sent
anywhere — replace those modules with a real source when the time comes.

## Licence

Apache License 2.0 — see [LICENSE](LICENSE). The upstream project it is based
on is © its original authors under the same licence.
