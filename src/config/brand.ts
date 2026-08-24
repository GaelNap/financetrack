/**
 * Studio Calanque — brand & account configuration.
 *
 * Everything that identifies this instance of the app lives here, so the
 * dashboard can be re-pointed at another studio (or another person) by
 * editing this single file instead of hunting through components.
 */

export const brand = {
  /** Short product name, shown in the sidebar and the browser tab. */
  name: "Calanque",
  /** Full name, used where the studio has to be spelled out. */
  fullName: "Studio Calanque",
  tagline: "Studio finance, from the coast",
  description:
    "The finance dashboard of Studio Calanque — income, expenses, bills, runway and investments in one place.",
} as const;

/** The account the dashboard belongs to. */
export const account = {
  displayName: "Studio Calanque",
  shortName: "Calanque",
  /** Initials used by the fallback monogram avatar. */
  initials: "SC",
  owner: "Gaël",
  role: "Founder & Creative Director",
  legalForm: "SASU",
  foundedIn: "2021",
  email: "contact@studiocalanque.fr",
  phone: "+33 4 91 00 00 00",
  address: {
    street: "12 quai de la Calanque",
    city: "Marseille",
    postalCode: "13007",
    country: "France",
  },
  /** French company registration number — replace with the real one. */
  taxId: "FR 42 908 217 344",
} as const;

/** Regional preferences: the studio invoices in euros, from Marseille. */
export const preferences = {
  locale: "fr-FR",
  language: "English (FR formats)",
  currency: "EUR",
  currencySymbol: "€",
  dateFormat: "D/M/Y",
  timezone: "Europe/Paris (UTC+2)",
} as const;

const currencyFormatter = new Intl.NumberFormat(preferences.locale, {
  style: "currency",
  currency: preferences.currency,
  maximumFractionDigits: 0,
});

const preciseCurrencyFormatter = new Intl.NumberFormat(preferences.locale, {
  style: "currency",
  currency: preferences.currency,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** `220350` -> `220 350 €` */
export const formatCurrency = (value: number) => currencyFormatter.format(value);

/** `145.64` -> `145,64 €` — for prices and per-unit figures. */
export const formatPreciseCurrency = (value: number) =>
  preciseCurrencyFormatter.format(value);

/**
 * Chart palette, in the order series should be coloured: sea turquoise,
 * azure, terracotta, sun gold, pine, rock grey. Every value stays legible
 * against both the limestone and the deep-sea card backgrounds, so no
 * series can disappear into the surface it is drawn on.
 */
export const chartPalette = [
  "#2ec4b6",
  "#1b8ac9",
  "#e07a5f",
  "#f2b134",
  "#7fb069",
  "#5f7d8c",
];
