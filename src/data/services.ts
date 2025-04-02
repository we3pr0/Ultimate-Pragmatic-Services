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
  image: string;
  illustrativeImage: string; // New property
}

export const services: Service[] = [
  {
    id: 'business-plan-investors',
    category: 'Business Plan',
    title: 'Business Plan for Investors',
    heading: 'Compelling business plans for investors from Ultimate Pragmatic Services.',
    description: 'With over a decade of experience developing strategies for organizations ranging from Fortune 10 and Fortune 500 companies to startups and small businesses, we specialize in crafting investor-ready business plans tailored to your needs. Over the past 18 months alone, our business plans have helped more than 85 clients across five continents secure over $38 million in funding from various investors. We work closely with you to articulate your value proposition clearly and persuasively—ensuring your business stands out.',
    features: [
      'Target Audience: Angle Investor, Venture Capitalist & Other type of investors',
      'Size: 30 – 50 pages',
      'Duration – 14 days',
      'Free Post-Sales Support – 3 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: FileText,
    image: "https://as1.ftcdn.net/v2/jpg/03/18/01/92/1000_F_318019262_8BCHnotaSUf1RoVAhCPhn9wf7Txy5Ub3.jpg",
    illustrativeImage: "https://as1.ftcdn.net/v2/jpg/00/99/59/22/1000_F_99592236_B1cZL1h44chDx3W6I2AfePC6scfzwaNx.jpg" // New illustrative image
  },
  {
    id: 'business-plan-sba',
    category: 'Business Plan',
    title: 'Business Plan for SBA / Bank',
    heading: 'Specialized Business Plans Designed to Secure Bank and SBA Funding',
    description: 'Our SBA and bank-ready business plans are strategically crafted to inspire lender confidence by highlighting the unique strengths, market positioning, and revenue potential of your business. Whether you\'re a startup or an established venture, we tailor each plan to meet strict SBA and bank underwriting standards. In just the past 6 months, our business plans have helped clients secure over $2.8 million in SBA loans alone.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: 25 – 35 pages',
      'Duration – 10 days',
      'Free Post-Sales Support – 3 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: FileText,
    image: "https://t4.ftcdn.net/jpg/02/96/34/37/240_F_296343799_h7V3vFgT3MYr5nYV71P41HG6B9ctng3K.jpg",
    illustrativeImage: "https://via.placeholder.com/600x400?text=Business+Plan+SBA" // New illustrative image
  },
  {
    id: 'business-plan-nonprofit',
    category: 'Business Plan',
    title: 'Business Plan for Nonprofit startup',
    heading: 'Expert business plans tailored for nonprofit startups',
    description: 'We specialize in developing comprehensive business plans that empower nonprofit startups to articulate their mission, strategy, and impact. Our plans clearly communicate the problems your organization addresses, the target demographics, cost-benefit analysis, and strategic roadmap—ensuring alignment with stakeholders, grant providers, and volunteers. UPS has supported numerous nonprofit startups with high-quality business plans, helping clients secure over $4.8 million in grants and waiver applications to date.',
    features: [
      'Target Audience: Government, International bodies, Trust Fund and Foundations',
      'Size: 25 – 35 pages',
      'Duration – 10 days',
      'Free Post-Sales Support – 3 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: FileText,
    image: "https://as2.ftcdn.net/v2/jpg/02/10/40/89/1000_F_210408928_I8Drm3XboModYitHcswFfgz2O3oK30SB.jpg",
    illustrativeImage: "https://via.placeholder.com/600x400?text=Nonprofit+Startup" // New illustrative image
  },
  {
    id: 'business-plan-other',
    category: 'Business Plan',
    title: 'Custom Business Plan',
    heading: 'Custom Business Plans Tailored to Your Specific Goals',
    description: 'Our consultants bring a track record of guiding businesses from startup stage to multi-million-dollar enterprises. Each business plan we deliver is built on proven growth strategies, unique market positioning, and a deep understanding of what drives investor and lender decisions. Having served on panels representing investors and financial institutions, our team understands exactly what decision-makers look for. This insider perspective allows us to craft business plans that align with funding criteria and resonate with your target audience. Share your details with us, and we’ll deliver a high-impact, business plan tailored to your vision.',
    features: [
      'Customized to your specific business needs',
      'Proven business strategies',
      'Unique market strategies',
      'Expert consultants with investor panel experience'
    ],
    icon: FileText,
    image: "https://as2.ftcdn.net/v2/jpg/03/13/59/31/1000_F_313593197_8HiEOgKY2AAlor0P7kWoMpBKG87brRIq.jpg",
    illustrativeImage: "https://stock.adobe.com/tr/images/man-sitting-by-spiral-notebook-with-business-plan-ideas-ready-to-be-written-in-it/313593197" // New illustrative image
  },
  {
    id: 'pitch-deck-investors',
    category: 'Pitch Deck',
    title: 'Investors Pitch Deck',
    heading: 'Impress Investors with High-Impact Pitch Decks from Ultimate Pragmatic Services',
    description: 'At Ultimate Pragmatic Services, we craft professionally designed, investor-focused pitch decks that help you cut through the noise and get straight to what matters: funding your vision. Whether you\'re a startup, scaling venture, or launching an ICO, our decks tell your story with clarity, confidence, and compelling visuals. We distill complex ideas into concise, persuasive narratives that highlight your value proposition, business model, traction, financials, and go-to-market strategy—all designed to resonate with the investor mindset. Our pitch decks have directly contributed to over $5 million in successful capital raises for our clients across industries. Backed by data, market insight, and investor psychology, we help you stand out in any room—whether it\'s with angels, VCs, or institutional backers. Let us help you build a deck that gets funded.',
    features: [
      'Target Audience: Angle Investor, Venture Capitalist & Other type of investors',
      'Size: 10 – 15 pages',
      'Duration – 10 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: PresentationIcon,
    image: "https://as1.ftcdn.net/v2/jpg/01/83/25/96/1000_F_183259637_8JG3aHCDM9NV5QrJSLLpRlccV3CBuQNs.jpg",
    illustrativeImage: "https://via.placeholder.com/600x400?text=Investors+Pitch+Deck" // New illustrative image
  },
  {
    id: 'pitch-deck-sales',
    category: 'Pitch Deck',
    title: 'Sales Pitch Deck',
    heading: 'Turn Prospects into Paying Customers with Persuasive Sales Pitch Decks',
    description: 'Close more deals with expertly crafted sales pitch decks that communicate the value, impact, and competitive edge of your product or service. At Ultimate Pragmatic Services, we design powerful, results-driven pitch decks that tell your business story in a way that resonates with your target audience and drives buying decisions. Our decks are strategically structured to highlight key benefits, unique selling points, and tailored offers—while addressing customer pain points and delivering a clear call to action. The result? Increased conversions, shorter sales cycles, and better alignment with your revenue goals. We\'ve helped clients boost sales performance across various industries, with measurable results tied directly to their key performance indicators (KPIs). Let us help you create a sales pitch that doesn’t just inform—but sells.',
    features: [
      'Target Audience: Clients, Business Development Specialist etc.',
      'Size: 10 – 20 pages',
      'Duration – 10 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: PresentationIcon,
    image: "https://as1.ftcdn.net/v2/jpg/05/57/87/50/1000_F_557875086_Q9d8q1GN5gzaplpqfLRIOlCwNHAa9kEG.jpg",
    illustrativeImage: "https://via.placeholder.com/600x400?text=Sales+Pitch+Deck" // New illustrative image
  },
  {
    id: 'financial-forecast',
    category: 'Financial Model',
    title: '3 Statement Financial Forecast',
    heading: 'Integrated Financial Forecasts Tailored to Your Business.',
    description: 'At Ultimate Pragmatic Services, we deliver professionally developed 3-statement financial forecasts—Income Statement, Balance Sheet, and Cash Flow—designed to provide a clear, data-driven projection of your business’s financial future. Our forecasts go beyond numbers. They tell a compelling financial story that demonstrates your business\'s viability, scalability, and revenue potential. Whether you\'re targeting banks, investors, or internal planning, our models help decision-makers understand the value proposition and funding justification behind your business. Accurate. Credible. Tailored. Let us help you present a financial outlook that builds confidence and opens doors to funding.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: Spreadsheet and PowerPoint containing the summary',
      'Duration – 10 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: BarChart2,
    image: "https://as2.ftcdn.net/v2/jpg/01/61/87/73/1000_F_161877355_Q5jAgfMvUTkVNljtz5i7rGaTyoGXgSzx.jpg",
    illustrativeImage: "https://via.placeholder.com/600x400?text=Financial+Forecast" // New illustrative image
  },
  {
    id: 'financial-models',
    category: 'Financial Model',
    title: 'Financial Models',
    heading: 'Expert financial models for your business.',
    description: 'At Ultimate Pragmatic Services, we specialize in building robust, investor-grade financial models tailored to your business objectives. Our seasoned consultants apply a range of industry-standard and custom financial modeling techniques—spanning: Spreadsheet-based forecasting, ROI analysis, Credit rating models, Debt-to-equity structuring, Payback periods, Breakeven analysis, Profitability assessments, Discounted cash flow (DCF) models. Whether you\'re budgeting, evaluating an acquisition, planning for growth, or raising capital, our financial models provide the clarity and precision needed to support sound, data-driven decisions. Our models have empowered clients to secure funding, improve financial strategy, and optimize operational performance with confidence. Make smarter decisions with expert financial modeling support.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: Spreadsheet and PowerPoint containing the summary',
      'Duration – 10 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: LineChart,
    image: "https://as2.ftcdn.net/v2/jpg/00/45/34/81/1000_F_45348143_9gn1ptcqIKILPm1nGI0UUeC2TQoWTW1S.jpg",
    illustrativeImage: "../../photos/undraw_business-plan_wv9q.svg" // New illustrative image
  },
  {
    id: 'feasibility-study-startup',
    category: 'Feasibility Study',
    title: 'Startup Feasibility Study',
    heading: 'Professional Feasibility Studies Tailored to Your Startup’s Unique Vision',
    description: 'Professional Feasibility Studies Tailored to Your Startup’s Unique Vision. At Ultimate Pragmatic Services, we develop high-impact feasibility studies that help startup founders validate their ideas, mitigate risks, and position their ventures for investor confidence and long-term success. Our feasibility studies highlight your startup’s core strengths, assess market viability, identify potential challenges, and deliver actionable insights to sharpen your competitive edge. With a focus on both strategic and operational feasibility, we empower you to make informed go/no-go decisions—and present a credible case to investors and stakeholders. Our work has helped clients avoid costly missteps, saving over $1 million in potential losses, while also enabling startups to secure over $500,000 in early-stage funding. Make smarter decisions. Win investor trust. Launch with confidence.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: 25 – 40 pages',
      'Duration – 14 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: Search,
    image: "https://cdn-icons-png.flaticon.com/512/2921/2921234.png",
    illustrativeImage: "https://via.placeholder.com/600x400?text=Startup+Feasibility+Study" // New illustrative image
  },
  {
    id: 'feasibility-study-technical',
    category: 'Feasibility Study',
    title: 'Technical Feasibility Study',
    heading: 'Professional Technical Feasibility Studies to Validate Your Business Concept',
    description: 'At Ultimate Pragmatic Services, we deliver expertly crafted technical feasibility studies that evaluate whether your proposed business or project can be successfully implemented from a technical standpoint. Our consultants assess the technical requirements, infrastructure, operational workflows, and resource readiness needed to bring your concept to life. We help startups, existing businesses, and organizations determine whether their ideas are not only technically viable—but scalable and sustainable in real-world conditions. By identifying potential bottlenecks, gaps, and success enablers, we help you turn technical plans into actionable, profitable structures—minimizing risk and optimizing execution. Make informed decisions. Build with confidence.',
    features: [
      'Target Audience: SBA, banks, private lenders, and financial institutions',
      'Size: 25 – 40 pages',
      'Duration – 14 days',
      'Free Post-Sales Support – 2 weeks',
      'Faster Delivery Duration – Available'
    ],
    icon: Code,
    image: "https://as1.ftcdn.net/v2/jpg/01/54/16/82/1000_F_154168217_GqUWQuuZiGByogp8XF0TkRrFpse4sS2y.jpg",
    illustrativeImage: "https://as1.ftcdn.net/v2/jpg/00/99/59/22/1000_F_99592236_B1cZL1h44chDx3W6I2AfePC6scfzwaNx.jpg" // New illustrative image
  },
  {
    id: 'general-consulting',
    category: 'General Consulting',
    title: 'General Consulting',
    image: "https://as1.ftcdn.net/v2/jpg/02/99/99/20/1000_F_299992035_WV9wyKH4E3oiynFw7r2UZUe6bOtDbBXy.jpg",
    heading: 'Expert Business Consulting Services to Accelerate Growth and Drive Success',
    description: 'At Ultimate Pragmatic Services, we offer comprehensive business consulting services designed to help you overcome challenges, seize opportunities, and achieve sustainable growth. Our team of seasoned consultants brings deep expertise across industries, providing actionable insights and tailored strategies to address your unique business needs. Whether you\'re looking to optimize operations, enhance market positioning, or drive innovation, we work closely with you to deliver measurable results. From startups to established enterprises, our consulting services empower you to navigate complexity, unlock potential, and achieve your goals with confidence.',
    features: [
      'Customized consulting solutions',
      'Expert guidance across industries',
      'Actionable insights and strategies',
      'Measurable results'
    ],
    icon: Users,
    illustrativeImage: "../photos/undraw_business-plan_wv9q.svg" // New illustrative image
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