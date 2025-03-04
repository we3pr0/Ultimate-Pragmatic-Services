export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Ultimate Pragmatic Services helped us secure $1.2M in funding with their expertly crafted business plan. Their attention to detail and market insights were invaluable.",
    author: "Sarah Johnson",
    company: "TechStart Solutions",
    rating: 5
  },
  {
    id: 2,
    quote: "The financial model UPS created for our startup was comprehensive and exactly what our investors were looking for. We couldn't be happier with the results.",
    author: "Michael Chen",
    company: "GreenLife Innovations",
    rating: 5
  },
  {
    id: 3,
    quote: "Working with UPS on our nonprofit business plan was a game-changer. They understood our mission and helped us secure crucial grant funding.",
    author: "David Williams",
    company: "Community Health Initiative",
    rating: 4
  },
  {
    id: 4,
    quote: "The pitch deck created by Ultimate Pragmatic Services was instrumental in our successful funding round. Professional, compelling, and right on target.",
    author: "Jessica Martinez",
    company: "Orbital Analytics",
    rating: 5
  },
  {
    id: 5,
    quote: "Their feasibility study saved us from making a costly mistake and redirected our business model. The ROI on their services has been tremendous.",
    author: "Robert Thompson",
    company: "Meridian Enterprises",
    rating: 5
  },
  {
    id: 6,
    quote: "UPS delivered our SBA business plan ahead of schedule, and we secured our loan within weeks. Their expertise in what lenders look for is unmatched.",
    author: "Amanda Lewis",
    company: "Coastal Brewing Co.",
    rating: 4
  }
];