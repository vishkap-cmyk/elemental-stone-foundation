// src/content/copy.ts
// Ensure this path matches your alias import "@/content/copy"

export type HomeWhatWeDoItem = {
  title: string;
  body: string;
};

export type TrackRecordItem = {
  metric: string;
  description: string;
};

export type HowWeEngageItem = string;

export type HomeCopy = {
  hero: {
    headline: string;
    subhead: string;
    subhead2: string;
  };
  whatWeDo: HomeWhatWeDoItem[];
  trackRecord: TrackRecordItem[];
  whyItMatters: {
    lead: string;
    body: string;
  };
  outcomes: string[];
  howWeEngage: HowWeEngageItem[];
  whoWeWorkWith: string[];
  whoWeWorkWithClarifier: string;
  cta: {
    title: string;
    body: string;
  };
};

export const home: HomeCopy = {
  hero: {
    headline: "Institutional advisory and execution for digital assets and wealth infrastructure.",
    subhead:
      "Elemental advises and supports family offices, wealth managers, and funds navigating digital asset exposure across custody, governance, reporting, and market access.",
    subhead2:
      "Work is grounded in regulatory, operational, and counterparty constraints, with a focus on decisions that hold up under institutional scrutiny.",
  },

  whatWeDo: [
    {
      title: "Research",
      body:
        "Jurisdiction and infrastructure mapping across custody, fund structures, market plumbing, privacy, and reporting. Clear institutional constraints, not narratives.",
    },
    {
      title: "Advisory",
      body:
        "Senior-led engagements to define strategy, structure, and operating model for institutional digital asset exposure and infrastructure partnerships.",
    },
    {
      title: "Build",
      body:
        "Selective execution support to turn strategy into systems, workflows, and integrations where it makes sense to productise.",
    },
  ],

  trackRecord: [
    {
      metric: "$1bn market cap",
      description: "Launched an RWA platform including securing partnerships and defining GTM strategy",
    },
    {
      metric: "$130m onchain",
      description: "Led institutional GTM and partner strategy to bring assets onchain from 0–1",
    },
    {
      metric: "Policy & adoption",
      description: "Drafted white papers on digital carbon, real world assets, and high net worth funds onchain",
    },
  ],

  whyItMatters: {
    lead: "Digital assets are moving into institutional portfolios, but the operating reality remains fragmented.",
    body:
      "For wealth and fund operators, the hard problems are custody, governance, reporting, counterparty risk, regulatory posture, and integration with existing investment processes. Elemental focuses on decisions that reduce ambiguity, withstand institutional scrutiny, and make participation durable.",
  },

  outcomes: [
    "Defined operating model for digital asset exposure across custody, governance, and reporting",
    "Mapped jurisdictional options and decision criteria for Switzerland and the EU",
    "Partner strategy for custodians, execution venues, and infrastructure providers with clear selection logic",
    "Institutional GTM plan where relevant, built around buyers, procurement, and risk committees",
  ],

  howWeEngage: [
    "Senior-led, retained engagements with founders and executive teams",
    "Typical counterparts include product, legal/compliance, partnerships, and leadership",
    "Work sits alongside custody providers, infrastructure partners, and existing advisors — not in competition with them",
  ],

  whoWeWorkWith: [
    "Family offices and UHNW principals",
    "Wealth managers and private banks",
    "Digital asset funds and allocators",
    "Custody, trading, and reporting infrastructure providers",
    "Founders building institutional crypto products",
  ],

  whoWeWorkWithClarifier:
    "Engagements are discrete, confidential, and shaped around institutional decision processes rather than volume delivery.",

  cta: {
    title: "In Switzerland in January.",
    body:
      "If you are working on custody, fund structure, wealth infrastructure, or institutional adoption, I am open to discrete conversations to map constraints and decision paths. Short, focused meetings are preferred.",
  },
};
