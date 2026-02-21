// src/content/copy.ts

export type ServiceItem = {
  title: string;
  duration: string;
  body: string;
  forLine: string;
  ctaText: string;
  ctaHref: string;
};

export type TrackRecordItem = {
  metric: string;
  description: string;
};

export type HomeCopy = {
  hero: {
    headline: string;
    subhead: string;
  };
  heroCta: {
    text: string;
    href: string;
  };
  heroSecondary: string;
  credibilityBar: string[];
  whyItMatters: {
    lead: string;
    body: string;
  };
  trackRecord: TrackRecordItem[];
  outcomes: string[];
  services: {
    headline: string;
    subheadline: string;
    items: ServiceItem[];
    note: string;
  };
  whoIWorkWith: string[];
  howIEngage: string[];
  footerCta: {
    headline: string;
    body: string;
    ctaText: string;
    ctaHref: string;
    secondary: string;
  };
};

export const home: HomeCopy = {
  hero: {
    headline:
      "The institutional digital asset window is open. Most platforms will miss it.",
    subhead:
      "I help digital asset platforms, family offices, and wealth managers navigate the operational reality of institutional adoption — custody, governance, MiCA compliance, and the relationships that make regulated institutions say yes.",
  },

  heroCta: {
    text: "Book a scoped conversation",
    href: "mailto:vishal@elemental.so",
  },

  heroSecondary:
    "Currently advising on EU market entry and MiCA readiness. 3 engagements available.",

  credibilityBar: [
    "University of Oxford",
    "ESCP Business School",
    "BNP Paribas",
    "EDF Energy",
    "United Nations (advisor)",
    "European Commission (advisor)",
    "Endaoment",
    "KlimaDAO",
  ],

  whyItMatters: {
    lead: "Digital assets are entering institutional portfolios. The operating reality hasn't caught up.",
    body: "For wealth managers, family offices, and fund operators, the hard problems are custody architecture, governance structure, counterparty risk, MiCA compliance, and integration with existing investment processes. Most platforms are built for retail adoption. Institutional entry requires a different playbook — one built around what holds up under regulatory and fiduciary scrutiny, not what sounds good in a pitch deck. The MiCA transition window is open now. The platforms that move in the next 12 months will define the institutional digital asset landscape for the next decade. The ones that wait will be locked out.",
  },

  trackRecord: [
    {
      metric: "Endaoment — $25M to $130M AUM",
      description:
        "Grew Endaoment from $25M to $130M in assets under management by pivoting go-to-market toward HNW individuals and wealth managers. Defined the institutional positioning, partner strategy, and sales motion that unlocked the $250B donor-advised fund industry for on-chain infrastructure.",
    },
    {
      metric: "KlimaDAO — $1B market cap at launch",
      description:
        "Early contributor to KlimaDAO, which reached a $1B market cap at launch and brought 25 million tons of carbon on-chain. Defined partner strategy and institutional positioning during the protocol's launch phase. Coined the term 'digital carbon', now standard industry language.",
    },
    {
      metric: "Policy and institutional adoption",
      description:
        "Advisor to the United Nations and European Commission on digital asset policy and adoption frameworks. Contributed to the formation of on-chain carbon markets and informed how institutional buyers and funds engage with tokenised environmental assets.",
    },
  ],

  outcomes: [
    "Defined the operating model for a family office's first digital asset allocation — custody selection, governance structure, and reporting integration",
    "Mapped jurisdictional options across Switzerland and the EU for a wealth manager evaluating MiCA-compliant fund structures, resulting in a decision framework adopted by their investment committee",
    "Built partner evaluation and selection logic for custodians and execution venues, used to shortlist and onboard three infrastructure providers",
    "Designed the institutional GTM playbook that drove Endaoment's growth from $25M to $130M, covering HNW acquisition, wealth manager partnerships, and onboarding architecture",
    "More client outcomes coming soon",
  ],

  services: {
    headline: "How I Can Help",
    subheadline:
      "Three scoped engagements. Fixed outcomes. Senior-led.",
    items: [
      {
        title: "MiCA Readiness Diagnostic",
        duration: "2 weeks",
        body: "A structured gap analysis of your current structure against MiCA requirements. You receive a prioritised risk map and a decision framework your compliance team can act on immediately.",
        forLine:
          "For: Digital asset platforms, funds, and wealth managers preparing for EU market entry in 2025–26.",
        ctaText: "Enquire",
        ctaHref: "mailto:vishal@elemental.so",
      },
      {
        title: "Swiss Market Entry Roadmap",
        duration: "4 weeks",
        body: "Jurisdiction mapping across Switzerland and the EU, custody provider shortlist, regulatory posture assessment, and a structured decision framework for your investment committee.",
        forLine:
          "For: Funds and platforms anchoring in Zurich or Zug, or evaluating Switzerland as a primary jurisdiction.",
        ctaText: "Enquire",
        ctaHref: "mailto:vishal@elemental.so",
      },
      {
        title: "Institutional GTM Sprint",
        duration: "8 weeks, retained",
        body: "First three target institutional clients identified. Pitch materials built for compliance and fiduciary scrutiny. Outreach strategy and partner engagement structured for commercial sustainability.",
        forLine:
          "For: Series A+ digital asset platforms ready to sell to family offices, private banks, or wealth managers.",
        ctaText: "Enquire",
        ctaHref: "mailto:vishal@elemental.so",
      },
    ],
    note: "All engagements are retained, senior-led, and measured by institutional outcomes. I work with 3–4 organisations at a time.",
  },

  whoIWorkWith: [
    "Family offices and UHNW principals",
    "Wealth managers and private banks",
    "Digital asset funds and allocators",
    "Custody, trading, and reporting infrastructure providers",
    "Founders building institutional crypto products",
  ],

  howIEngage: [
    "Retained engagements directly with founders and executive teams",
    "I work alongside custody providers, infrastructure partners, and existing advisors to complement what's already in place",
    "Engagements are discrete, confidential, and shaped around institutional decision processes — not volume delivery",
    "Client testimonials and references available on request",
  ],

  footerCta: {
    headline:
      "If you're preparing for institutional market entry in Europe in the next 6 months, let's talk.",
    body: "I'm available for a scoped conversation to map constraints and decision paths. No pitch. No deck. Just a direct conversation about what you're building and whether I can help.",
    ctaText: "Book a scoped conversation",
    ctaHref: "mailto:vishal@elemental.so",
    secondary: "vishal@elemental.so · Currently available for 3 new engagements.",
  },
};
