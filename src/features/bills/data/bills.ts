const billsSummarySchema = [
  { field: "id", headerName: "ID", flex: 1, minWidth: 80, maxWidth: 80 },
  {
    field: "billName",
    headerName: "Bill Name",
    type: "string",
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "vendor",
    headerName: "Vendor",
    type: "string",
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    flex: 1,
    minWidth: 110,
    maxWidth: 110,
  },
  {
    field: "paymentDate",
    headerName: "Payment Date",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 140,
    maxWidth: 140,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    description: "The date by which the bill payment is due.",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 120,
    maxWidth: 120,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "frequency",
    headerName: "Frequency",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "paymentMethod",
    headerName: "Payment Method",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 160,
    maxWidth: 160,
  },
  {
    field: "category",
    headerName: "Category",
    type: "string",
    sortable: true,
    flex: 1,
    minWidth: 130,
    maxWidth: 130,
  },
  {
    field: "notes",
    headerName: "Notes",
    type: "string",
    sortable: false,
    flex: 1,
    minWidth: 160,
    maxWidth: 190,
  },
];

const billsSummaryData = [
  {
    id: 1,
    billName: "Studio lease",
    vendor: "SCI Vieux-Port",
    status: "Paid",
    paymentDate: "2026-08-03",
    dueDate: "2026-09-01",
    amount: 1450,
    frequency: "Monthly",
    paymentMethod: "Bank Transfer",
    category: "Studio",
    notes: "Atelier on quai de la Calanque",
  },
  {
    id: 2,
    billName: "Electricity",
    vendor: "EDF",
    status: "Paid",
    paymentDate: "2026-08-08",
    dueDate: "2026-09-05",
    amount: 132,
    frequency: "Monthly",
    paymentMethod: "Direct Debit",
    category: "Utilities",
    notes: "Includes the edit suite and the kiln",
  },
  {
    id: 3,
    billName: "Fibre & mobile",
    vendor: "Orange Pro",
    status: "Paid",
    paymentDate: "2026-08-06",
    dueDate: "2026-09-06",
    amount: 79,
    frequency: "Monthly",
    paymentMethod: "Direct Debit",
    category: "Utilities",
    notes: "1 Gb/s pro line + two SIM cards",
  },
  {
    id: 4,
    billName: "Adobe Creative Cloud",
    vendor: "Adobe",
    status: "Paid",
    paymentDate: "2026-08-01",
    dueDate: "2026-09-01",
    amount: 95,
    frequency: "Monthly",
    paymentMethod: "Credit Card",
    category: "Software",
    notes: "Three seats, annual plan billed monthly",
  },
  {
    id: 5,
    billName: "Figma Organization",
    vendor: "Figma",
    status: "Unpaid",
    paymentDate: null,
    dueDate: "2026-09-12",
    amount: 135,
    frequency: "Monthly",
    paymentMethod: "Credit Card",
    category: "Software",
    notes: "Client hand-off files live here",
  },
  {
    id: 6,
    billName: "URSSAF contributions",
    vendor: "URSSAF PACA",
    status: "Unpaid",
    paymentDate: null,
    dueDate: "2026-09-15",
    amount: 1180,
    frequency: "Quarterly",
    paymentMethod: "Direct Debit",
    category: "Taxes",
    notes: "Q3 social contributions",
  },
  {
    id: 7,
    billName: "Professional insurance",
    vendor: "MAIF Pro",
    status: "Paid",
    paymentDate: "2026-07-28",
    dueDate: "2026-10-28",
    amount: 210,
    frequency: "Quarterly",
    paymentMethod: "Direct Debit",
    category: "Insurance",
    notes: "Covers gear on location shoots",
  },
  {
    id: 8,
    billName: "Accountant",
    vendor: "Cabinet Marseille Compta",
    status: "Unpaid",
    paymentDate: null,
    dueDate: "2026-09-20",
    amount: 260,
    frequency: "Monthly",
    paymentMethod: "Bank Transfer",
    category: "Professional",
    notes: "Bookkeeping and the annual filing",
  }
];

const billPaymentTrendsData = [
  {
    id: "Studio lease",
    color: "hsl(261, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 400,
      },
      {
        x: "Feb",
        y: 400,
      },
      {
        x: "Mar",
        y: 400,
      },
      {
        x: "Apr",
        y: 400,
      },
      {
        x: "May",
        y: 400,
      },
      {
        x: "Jun",
        y: 500,
      },
      {
        x: "Jul",
        y: 500,
      },
      {
        x: "Aug",
        y: 500,
      },
      {
        x: "Sep",
        y: 500,
      },
      {
        x: "Oct",
        y: 500,
      },
      {
        x: "Nov",
        y: 500,
      },
      {
        x: "Dec",
        y: 500,
      },
    ],
  },
  {
    id: "Utilities",
    color: "hsl(111, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 525,
      },
      {
        x: "Feb",
        y: 600,
      },
      {
        x: "Mar",
        y: 350,
      },
      {
        x: "Apr",
        y: 385,
      },
      {
        x: "May",
        y: 410,
      },
      {
        x: "Jun",
        y: 470,
      },
      {
        x: "Jul",
        y: 510,
      },
      {
        x: "Aug",
        y: 430,
      },
      {
        x: "Sep",
        y: 590,
      },
      {
        x: "Oct",
        y: 550,
      },
      {
        x: "Nov",
        y: 450,
      },
      {
        x: "Dec",
        y: 590,
      },
    ],
  },
  {
    id: "Software",
    color: "hsl(20, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 489,
      },
      {
        x: "Feb",
        y: 437,
      },
      {
        x: "Mar",
        y: 471,
      },
      {
        x: "Apr",
        y: 578,
      },
      {
        x: "May",
        y: 550,
      },
      {
        x: "Jun",
        y: 536,
      },
      {
        x: "Jul",
        y: 675,
      },
      {
        x: "Aug",
        y: 613,
      },
      {
        x: "Sep",
        y: 400,
      },
      {
        x: "Oct",
        y: 675,
      },
      {
        x: "Nov",
        y: 684,
      },
      {
        x: "Dec",
        y: 450,
      },
    ],
  },
  {
    id: "Collaborators",
    color: "hsl(258, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 220,
      },
      {
        x: "Feb",
        y: 284,
      },
      {
        x: "Mar",
        y: 217,
      },
      {
        x: "Apr",
        y: 312,
      },
      {
        x: "May",
        y: 344,
      },
      {
        x: "Jun",
        y: 339,
      },
      {
        x: "Jul",
        y: 319,
      },
      {
        x: "Aug",
        y: 597,
      },
      {
        x: "Sep",
        y: 553,
      },
      {
        x: "Oct",
        y: 551,
      },
      {
        x: "Nov",
        y: 593,
      },
      {
        x: "Dec",
        y: 656,
      },
    ],
  },
  {
    id: "Other",
    color: "hsl(101, 70%, 50%)",
    data: [
      {
        x: "Jan",
        y: 622,
      },
      {
        x: "Feb",
        y: 610,
      },
      {
        x: "Mar",
        y: 635,
      },
      {
        x: "Apr",
        y: 653,
      },
      {
        x: "May",
        y: 657,
      },
      {
        x: "Jun",
        y: 700,
      },
      {
        x: "Jul",
        y: 696,
      },
      {
        x: "Aug",
        y: 688,
      },
      {
        x: "Sep",
        y: 670,
      },
      {
        x: "Oct",
        y: 652,
      },
      {
        x: "Nov",
        y: 535,
      },
      {
        x: "Dec",
        y: 666,
      },
    ],
  },
];

export { billsSummarySchema, billsSummaryData, billPaymentTrendsData };
