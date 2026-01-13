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

export type HomeCopy = {
  hero: {
    headline: string;
    subhead: string;
  };
  whatWeDo: HomeWhatWeDoItem[];
  trackRecord: TrackRecordItem[];
  whyItMatters: {
    lead: string;
    body: string;
  };
  outcomes: string[];
  whoWeWorkWith: string[];
  cta: {
    title: string;
    body: string;
  };
};

export const home: HomeCopy = {
  hero: {
    headline: "Research-led advisory for digital assets and wealth infrastructure.",
    subhead:
      "Elemental helps family offices, wealth managers, and funds translate digital asset innovation into durable structures across custody, governance, reporting, and market access.",
  },

  whatWeDo: [
    {
      title: "Research",
      body:
        "Jurisdiction and infrastructure mapping across custody, fund structures, market plumbing, privacy, and reporting. Clear constraints, not narratives.",
    },
    {
      title: "Advisory",
      body:
        "Senior-led engagements to define strategy, structure, and operating model for digital asset exposure and infrastructure partnerships.",
    },
    {
      title: "Build",
      body:
        "Selective execution support to turn strategy into systems, workflows, and integrations where it makes sense to productise.",
    },
  ],

  trackRecord: [
    {
      metric: "$300m+ AUM",
      description: "Advised a crypto wealth management practice towards establishment and EU growth",
    },
    {
      metric: "$130m onchain",
      description: "Brought assets onchain through growth operations, building from 0-1",
    },
    {
      metric: "Policy & adoption",
      description: "Drafted white papers on digital carbon, real world assets, and high net worth funds onchain",
    },
  ],

  whyItMatters: {
    lead: "Digital assets are moving into institutional portfolios, but the operating reality remains fragmented.",
    body:
      "For wealth and fund operators, the hard problems are custody, governance, reporting, counterparty risk, regulatory posture, and integration with existing investment processes. Elemental focuses on decisions that reduce ambiguity and make participation durable.",
  },

  outcomes: [
    "Defined operating model for digital asset exposure across custody, governance, and reporting",
    "Mapped jurisdictional options and decision criteria for Switzerland and the EU",
    "Partner strategy for custodians, execution venues, and infrastructure providers with clear selection logic",
    "Institutional GTM plan where relevant, built around buyers, procurement, and risk committees",
  ],

  whoWeWorkWith: [
    "Family offices and UHNW principals",
    "Wealth managers and private banks",
    "Digital asset funds and allocators",
    "Custody, trading, and reporting infrastructure providers",
    "Founders building institutional crypto products",
  ],

  cta: {
    title: "In Switzerland in January.",
    body:
      "If you are working on custody, fund structure, wealth infrastructure, or institutional adoption, I am happy to compare notes and map the terrain. Short meetings are best.",
  },
};