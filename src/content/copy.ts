// src/content/copy.ts

export type ServiceItem = {
  title: string;
  description: string;
  bestFor: string;
  output: string;
  ctaText: string;
  ctaHref: string;
};

export type ProofBlock = {
  title: string;
  description: string;
};

export type CaseStudy = {
  title: string;
  context: string;
  work: string;
  outcome: string;
};

export type HomeCopy = {
  hero: {
    headline: string;
    subhead: string;
    credibility: string;
  };
  heroCta: {
    text: string;
    href: string;
  };
  problems: string[];
  proof: ProofBlock[];
  services: {
    headline: string;
    items: ServiceItem[];
  };
  whoIWorkWith: string[];
  howIWork: string[];
  footerCta: {
    body: string;
    ctaText: string;
    ctaHref: string;
    email: string;
  };
  caseStudies: CaseStudy[];
};

export const home: HomeCopy = {
  hero: {
    headline: "Institutional digital asset advisory for Europe",
    subhead:
      "I help digital asset platforms, wealth managers, and family offices navigate custody, governance, MiCA readiness, and institutional go-to-market.",
    credibility:
      "Led by Vishal Kapadia — Oxford, ESCP, Endaoment, KlimaDAO.",
  },

  heroCta: {
    text: "Book a scoped conversation",
    href: "mailto:vishal@elemental.so",
  },

  problems: [
    "Evaluating Europe without a structure compliance can stand behind",
    "Choosing custody, counterparties, and governance without creating problems later",
    "Translating digital-asset capability into language institutional buyers can approve",
    "Building an institutional GTM motion that survives diligence",
  ],

  proof: [
    {
      title: "Endaoment",
      description:
        "Helped define the institutional GTM and partner strategy that supported growth from $25M to $130M AUM.",
    },
    {
      title: "KlimaDAO",
      description:
        "Worked on institutional positioning and partner strategy during launch, helping translate a novel on-chain model into language institutions could engage with.",
    },
    {
      title: "Policy and market development",
      description:
        "Advised the United Nations and European Commission on digital asset adoption frameworks and on-chain market design.",
    },
    {
      title: "Selected client work",
      description:
        "Defined digital-asset operating models, custody evaluation, and jurisdictional decision frameworks for family office and wealth-management contexts.",
    },
  ],

  services: {
    headline: "Engagements",
    items: [
      {
        title: "MiCA Readiness Diagnostic",
        description:
          "A structured review of your current operating model against likely MiCA requirements and institutional diligence expectations.",
        bestFor:
          "Platforms, funds, and wealth managers preparing for EU market entry.",
        output:
          "Priority gaps, risk map, and a decision framework your team can act on.",
        ctaText: "Enquire",
        ctaHref: "mailto:vishal@elemental.so",
      },
      {
        title: "Swiss Market Entry Roadmap",
        description:
          "Jurisdiction mapping across Switzerland and the EU, custody provider evaluation, regulatory posture assessment, and a structured decision framework.",
        bestFor:
          "Funds and platforms anchoring in Zurich or Zug, or evaluating Switzerland as a primary jurisdiction.",
        output:
          "Jurisdictional comparison, custody shortlist, and investment committee-ready decision framework.",
        ctaText: "Enquire",
        ctaHref: "mailto:vishal@elemental.so",
      },
      {
        title: "Institutional GTM Sprint",
        description:
          "First three target institutional clients identified. Pitch materials built for compliance and fiduciary scrutiny. Outreach and partner engagement structured for commercial sustainability.",
        bestFor:
          "Series A+ digital asset platforms ready to sell to family offices, private banks, or wealth managers.",
        output:
          "Target client shortlist, institutional pitch deck, and structured outreach plan.",
        ctaText: "Enquire",
        ctaHref: "mailto:vishal@elemental.so",
      },
    ],
  },

  whoIWorkWith: [
    "Digital asset platforms entering Europe",
    "Wealth managers and private banks evaluating digital-asset capability",
    "Family offices and allocators building first operating models",
    "Custody, trading, and reporting providers selling into institutional buyers",
  ],

  howIWork: [
    "Direct with founders, CIOs, and executive teams",
    "Scoped, senior-led engagements with clear outputs",
    "Built around real institutional decision processes, not slide production",
  ],

  footerCta: {
    body: "If you are evaluating institutional market entry in Europe, I can help map the structural, regulatory, and commercial decisions that matter first.",
    ctaText: "Book a scoped conversation",
    ctaHref: "mailto:vishal@elemental.so",
    email: "vishal@elemental.so",
  },

  caseStudies: [
    {
      title: "Endaoment",
      context:
        "A crypto-native donor-advised fund looking to move beyond retail adoption and build institutional credibility with wealth managers and HNW donors.",
      work: "Defined the institutional go-to-market strategy, partner acquisition framework, and positioning for the $250B donor-advised fund industry. Built the sales motion that translated on-chain infrastructure into language wealth managers could recommend.",
      outcome: "Growth from $25M to $130M in assets under management.",
    },
    {
      title: "KlimaDAO",
      context:
        "A novel on-chain carbon market protocol at launch, needing institutional positioning and partner strategy to establish credibility beyond DeFi-native audiences.",
      work: "Defined partner strategy and institutional positioning during the protocol's launch phase. Helped translate an unfamiliar on-chain model into terms that institutional buyers and funds could evaluate. Coined the term 'digital carbon', now standard industry language.",
      outcome:
        "$1B market cap at launch. 25 million tons of carbon brought on-chain.",
    },
    {
      title: "Policy and institutional advisory",
      context:
        "The United Nations and European Commission needed frameworks for understanding digital asset adoption and on-chain market infrastructure.",
      work: "Advised on digital asset policy, adoption frameworks, and the formation of on-chain carbon markets. Contributed to shaping how institutional buyers and funds engage with tokenised environmental assets.",
      outcome:
        "Informed policy frameworks and institutional engagement models for digital assets at a multilateral level.",
    },
    {
      title: "Family office operating model",
      context:
        "A European family office evaluating its first digital asset allocation, with no existing infrastructure or internal expertise.",
      work: "Defined the operating model end-to-end: custody selection, governance structure, counterparty evaluation, and reporting integration with existing investment processes.",
      outcome:
        "Investment committee-approved operating model and custody architecture. First allocation executed.",
    },
    {
      title: "Jurisdictional decision framework",
      context:
        "A wealth manager evaluating MiCA-compliant fund structures across Switzerland and the EU, needing a structured comparison their investment committee could act on.",
      work: "Mapped jurisdictional options, regulatory postures, and custody provider landscapes. Built a decision framework covering compliance, operational, and commercial dimensions.",
      outcome:
        "Decision framework adopted by the investment committee. Jurisdiction selected and entry process initiated.",
    },
  ],
};
