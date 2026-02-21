// src/content/copy.ts

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
  cta_banner: {
    line: string;
    linkText: string;
    linkHref: string;
  };
  whatIDo: HomeWhatWeDoItem[];
  trackRecord: TrackRecordItem[];
  whyItMatters: {
    lead: string;
    body: string;
  };
  outcomes: string[];
  howIEngage: HowWeEngageItem[];
  whoIWorkWith: string[];
  whoIWorkWithClarifier: string;
  cta: {
    title: string;
    body: string;
  };
};

export const home: HomeCopy = {
  hero: {
    headline:
      "You're moving digital assets into institutional portfolios. The custody, governance, and regulatory questions aren't theoretical anymore.",
    subhead:
      "I advise family offices, wealth managers, and funds on the operational reality of digital asset exposure — custody architecture, reporting, counterparty risk, and regulatory posture across Switzerland and the EU.",
    subhead2:
      "Every engagement is grounded in what holds up under institutional scrutiny, not what sounds good in a pitch deck.",
  },

  cta_banner: {
    line: "Currently advising on EU market entry and MiCA readiness. Open to new engagements.",
    linkText: "Get in touch",
    linkHref: "mailto:vishal@elemental.so",
  },

  whatIDo: [
    {
      title: "Research",
      body:
        "Jurisdiction and infrastructure mapping across custody, fund structures, market plumbing, privacy, and reporting. I focus on institutional constraints, not narratives.",
    },
    {
      title: "Advisory",
      body:
        "Retained engagements directly with founders and executive teams to define strategy, structure, and operating model for institutional digital asset exposure.",
    },
    {
      title: "Build",
      body:
        "Selective execution support to turn strategy into systems, workflows, and integrations.",
    },
  ],

  trackRecord: [
    {
      metric: "Endaoment — $25M to $130M",
      description:
        "Grew Endaoment, an on-chain donor-advised fund, from $25M to $130M in revenue by pivoting go-to-market toward HNW individuals and wealth managers. Defined the institutional positioning, partner strategy, and sales motion.",
    },
    {
      metric: "KlimaDAO — $1bn market cap",
      description:
        "Early contributor to KlimaDAO, which reached a $1bn market cap at launch and brought 25 million tons of carbon on-chain. Defined partner strategy and institutional positioning during the protocol's launch phase.",
    },
    {
      metric: "Policy and adoption",
      description:
        "Contributed to the formation of on-chain carbon markets as an early architect of the digital carbon category, including work that informed how institutional buyers and funds engage with tokenised environmental assets. Coined the term digital carbon.",
    },
  ],

  whyItMatters: {
    lead: "Digital assets are moving into institutional portfolios, but the operating reality remains fragmented.",
    body:
      "For wealth and fund operators, the hard problems are custody, governance, reporting, counterparty risk, regulatory posture, and integration with existing investment processes. I focus on decisions that reduce ambiguity, withstand institutional scrutiny, and make participation durable.",
  },

  outcomes: [
    "Defined the operating model for a family office's first digital asset allocation — covering custody selection, governance structure, and reporting integration",
    "Mapped jurisdictional options across Switzerland and the EU for a wealth manager evaluating MiCA-compliant fund structures, resulting in a decision framework adopted by their investment committee",
    "Built partner evaluation and selection logic for custodians and execution venues, used to shortlist and onboard three infrastructure providers",
    "Designed the institutional GTM playbook that drove Endaoment's growth from $25M to $130M, covering HNW acquisition, wealth manager partnerships, and onboarding architecture",
  ],

  howIEngage: [
    "Retained engagements directly with founders and executive teams",
    "I work alongside custody providers, infrastructure partners, and existing advisors to complement what's already in place",
  ],

  whoIWorkWith: [
    "Family offices and UHNW principals",
    "Wealth managers and private banks",
    "Digital asset funds and allocators",
    "Custody, trading, and reporting infrastructure providers",
    "Founders building institutional crypto products",
  ],

  whoIWorkWithClarifier:
    "Engagements are discrete, confidential, and shaped around institutional decision processes — not volume delivery.",

  cta: {
    title:
      "Currently building institutional partnerships in Zurich and Zug, focused on the MiCA transition window.",
    body:
      "If you're working on custody, fund structure, wealth infrastructure, or institutional adoption, I'm open to a direct conversation to map constraints and decision paths.",
  },
};
