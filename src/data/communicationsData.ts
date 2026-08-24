const notificationsData = [
  {
    id: 1,
    type: "expense",
    title: "New expense",
    message: "Adobe Creative Cloud charged 95 € to the studio card.",
    date: "2026-08-01",
    read: false,
  },
  {
    id: 2,
    type: "income",
    title: "Invoice paid",
    message: "Marseille Ferries settled invoice 2026-041 — 4 800 € received.",
    date: "2026-08-04",
    read: false,
  },
  {
    id: 3,
    type: "budget",
    title: "Budget alert",
    message: "Freelance collaborators are at 63% of the monthly limit.",
    date: "2026-08-09",
    read: false,
  },
  {
    id: 4,
    type: "reminder",
    title: "Bill reminder",
    message: "URSSAF Q3 contributions of 1 180 € are due on 15 September.",
    date: "2026-08-12",
    read: true,
  },
  {
    id: 5,
    type: "savings",
    title: "Savings goal progress",
    message: "The tax reserve has reached 70% of its 12 000 € target.",
    date: "2026-08-15",
    read: true,
  },
  {
    id: 6,
    type: "balance",
    title: "Account balance",
    message: "Studio current account balance is 18 640 €.",
    date: "2026-08-20",
    read: true,
  },
  {
    id: 7,
    type: "investing",
    title: "Investment alert",
    message: "The index fund position passed its 20 000 € milestone.",
    date: "2026-08-22",
    read: true,
  }
]

const messagesData = [
  {
    id: 1,
    sender: 'Camille — Calanque Bleue',
    content: 'Retainer renewed for another six months. Same scope, invoice on the 5th.',
    timestamp: '2026-08-05 14:30:00',
    read: false,
  },
  {
    id: 2,
    sender: 'Cabinet Marseille Compta',
    content: 'Q3 books are closed. Please send the August receipts before 10 September.',
    timestamp: '2026-08-09 10:15:00',
    read: false,
  },
  {
    id: 3,
    sender: 'Banque Populaire Méditerranée',
    content: 'The studio card payment of 260 € to Cabinet Marseille Compta is scheduled.',
    timestamp: '2026-08-11 18:45:00',
    read: true,
  },
  {
    id: 4,
    sender: 'Yanis — Panier Coffee Co.',
    content: 'Packaging proofs approved. Adding the two extra SKUs to the next invoice.',
    timestamp: '2026-08-14 09:20:00',
    read: true,
  },
  {
    id: 5,
    sender: 'Stripe',
    content: 'A payout of 780 € from the studio shop is on its way to your account.',
    timestamp: '2026-08-18 15:55:00',
    read: true,
  }
];

export { notificationsData, messagesData }