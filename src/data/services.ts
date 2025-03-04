import { 
  FileText, 
  PresentationIcon, 
  BarChart2, 
  LineChart, 
  Search, 
  Code, 
  Users 
} from 'lucide-react';

export interface Service {
  id: string;
  category: string;
  title: string;
  heading: string;
  description: string;
  features: string[];
  icon: any;
}

export const services: Service[] = [
  {
    id: 'business-plan-investors',
    category: 'Business Plan',
    title: 'Business Plan for Investors',
    heading: 'Compelling business plans for investors from Ultimate Pragmatic Services.',
    description: 'With over 10 years\' experience in formulating strategy for companies of all sizes: Fortune-10, Fortune-500, small businesses, and startups. We will work closely with you to prepare business plans that meet your requirements and convince investors of your business\'s value proposition. Our well-crafted business plans have helped over 85 of our clients across 5 continents in the last 18 months secured more than 38 million USD in funding from several investors.',
    features: [
      'Target Audience: Angle Investor, Venture Capitalist & Other type of investors',
      'Size: 30 – 50 pages',
      'Duration – 14 days',
      'Free Post-Sales Support – 3 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: FileText
  },
  {
    id: 'business-plan-sba',
    category: 'Business Plan',
    title: 'Business Plan for SBA / Bank',
    heading: 'Professional business plans geared towards securing bank/SBA investment.',
    description: 'Our SBA / bank business plans are optimized to instill investor confidence in your business venture while laying emphasis on the unique peculiarities and revenue potential of your business. We have written business plans that have helped our clientele (new start-ups and existing business ventures) attract over 500,000 USD in SBA loans alone in the past 6 months.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: 25 – 35 pages',
      'Duration – 10 days',
      'Free Post-Sales Support – 3 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: FileText
  },
  {
    id: 'business-plan-nonprofit',
    category: 'Business Plan',
    title: 'Business Plan for Nonprofit startup',
    heading: 'Expert business plans tailored for nonprofit startups',
    description: 'Our business plans for nonprofits help nonprofit startups plan and execute their strategies and goals. It can also help convey details such as the problems your nonprofit seeks to solve, the cost benefit analysis, the demographic you intend to serve, the roadmap and purpose behind your nonprofit startups to stakeholders, investors and volunteers alike. UPS has provided business plan writing services for several nonprofit startups. We have helped our customers win grants and put up application for waivers worth over $4.8 million.',
    features: [
      'Target Audience: Government, International bodies, Trust Fund and Foundations',
      'Size: 25 – 35 pages',
      'Duration – 10 days',
      'Free Post-Sales Support – 3 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: FileText
  },
  {
    id: 'business-plan-other',
    category: 'Business Plan',
    title: 'Other Business Plan',
    heading: 'Custom business plans for your specific needs',
    description: 'Our consultants have proven experience in helping business transits from startup to multi million dollars fortune company. Our business plans contain proven business strategies and unique market strategies that helps to grow your business. We know your audience and our members have sat on different panels on behalf of investors and loan companies. This put us at advantage of being familiar with investors criteria. Get in touch with us with your details and we will provide a top-notch business plan specifically tailored to your business needs.',
    features: [
      'Customized to your specific business needs',
      'Proven business strategies',
      'Unique market strategies',
      'Expert consultants with investor panel experience'
    ],
    icon: FileText
  },
  {
    id: 'pitch-deck-investors',
    category: 'Pitch Deck',
    title: 'Investors Pitch Deck',
    heading: 'Wow your investors with professionally written pitch decks from Ultimate pragmatic services.',
    description: 'From start-ups to ICOs, our investor pitch decks help you succinctly communicate the best parts about your business through highly visual representation to your investors. Our best-in-class pitch decks have helped our clients raise $5million in financing.',
    features: [
      'Target Audience: Angle Investor, Venture Capitalist & Other type of investors',
      'Size: 10 – 15 pages',
      'Duration – 10 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: PresentationIcon
  },
  {
    id: 'pitch-deck-sales',
    category: 'Pitch Deck',
    title: 'Sales Pitch Deck',
    heading: 'Convert your prospects into paying customers with persuasive sales pitch decks written by professionals.',
    description: 'Our expertly crafted sales pitch decks help convince your prospects about the value of your product/service offerings by concisely conveying to them a compelling business story and the essential elements, offers and benefits of your business/service. We have helped our clientele drive sales measured against their chosen KPI\'s (Key performance Indexes)',
    features: [
      'Target Audience: Clients, Business Development Specialist etc.',
      'Size: 10 – 20 pages',
      'Duration – 10 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: PresentationIcon
  },
  {
    id: 'financial-forecast',
    category: 'Financial Model',
    title: '3 Statement Financial Forecast',
    heading: 'Professionally written integrated financial forecast statement tailored to your business.',
    description: 'Ultimate Pragmatic Services provides professionally written 3-statement financial forecast that allows you to create an extensive image of your business\'s future financial prospects and also helps banks and prospective financiers see the value proposition and future income potential of your business.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: Spreadsheet and PowerPoint containing the summary',
      'Duration – 10 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: BarChart2
  },
  {
    id: 'financial-models',
    category: 'Financial Model',
    title: 'Financial Models',
    heading: 'Expert financial models for your business.',
    description: 'Our professional consultants are adept at creating professional quality financial models using several financial modelling techniques and models including but not limited to: spreadsheet models, credit rating model, Return on investment, debt and equity ratio, payback plan, profitability, breakeven analysis, discounted cash flow etc. Our first-rate financial models have helped our clients make informed business decisions including efficient financial decisions, budgeting strategy, making acquisitions and raising capital.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: Spreadsheet and PowerPoint containing the summary',
      'Duration – 10 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: LineChart
  },
  {
    id: 'feasibility-study-startup',
    category: 'Feasibility Study',
    title: 'Startup Feasibility Study',
    heading: 'Professional feasibility studies crafted to suit the unique needs of your startup.',
    description: 'Convince your potential investors that your startup is worth taking the plunge over. We provide professional grade feasibility studies for startups that places the strengths of your startup front and center and informs you about the viability as well as potential weaknesses and pitfalls of your proposed business venture. We have assisted business save over a million dollars and help in positioning their business better wining more comparative advantage over peers. Our expertly crafted feasibility studies have helped our customers attract $500,000+ in investments.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: 25 – 40 pages',
      'Duration – 14 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: Search
  },
  {
    id: 'feasibility-study-technical',
    category: 'Feasibility Study',
    title: 'Technical Feasibility Study',
    heading: 'Get a professionally written appraisal of the technical viability of your business',
    description: 'Through the development of first-rate technical feasibility studies, we help individuals and organizations as well as existing businesses and startups evaluate the technical viability of their proposed business. Technical feasibility studies created by our professional consultants helps you to assess the technical requirements of your proposed business as well as the readiness and capacity of your business to fulfill these requirements and convert them into a working and profitable structure.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: 25 – 40 pages',
      'Duration – 14 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: Code
  },
  {
    id: 'general-consulting',
    category: 'General Consulting',
    title: 'General Consulting',
    heading: 'Expert business consulting services for growth and success',
    description: 'Our professional consultants at ultimate pragmatic services also provide consulting and business advisory services to a wide range of businesses. We bring our years of training and professional experience in several sectors to bear in order to put your business on the fast track to positive and sustainable growth.',
    features: [
      'Business strategy development',
      'Market analysis and research',
      'Operational efficiency improvement',
      'Growth planning and execution',
      'Custom advisory services'
    ],
    icon: Users
  }
];

export const getServicesByCategory = () => {
  const categories: { [key: string]: Service[] } = {};
  
  services.forEach(service => {
    if (!categories[service.category]) {
      categories[service.category] = [];
    }
    categories[service.category].push(service);
  });
  
  return categories;
};

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id);
};