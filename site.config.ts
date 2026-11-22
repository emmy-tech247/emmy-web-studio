// Edit this file to change the name, contact details, prices and projects.
// Everything on the page reads from here.

export const site = {
  name: "Emmy Web Studio",
  owner: "Emmanuel James Alao",
  city: "Abuja, Nigeria",
  whatsappNumber: "2348061299131", // country code + number, no + or spaces
  email: "alaoemmanuel1978@gmail.com",
  github: "https://github.com/emmy-tech247",
  linkedin: "https://www.linkedin.com/in/emmanuel-alao-9a20b718a",
  year: 2026,
};

export function wa(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const audiences = [
  { title: "Schools", text: "Modern school websites that attract students, engage parents and simplify communication.", features: ["Admissions information and online enquiry forms", "Academic programmes and class pages", "News, events and photo galleries", "Parent contact and WhatsApp integration", "Student and fee portals when you’re ready"] },
  { title: "Churches", text: "Modern church websites that connect members, promote ministries and strengthen engagement.", features: ["Service times and location maps", "Sermon, audio and video pages", "Events calendar and announcements", "Giving details and prayer requests", "Mobile-first layout for members on the go"] },
  { title: "Hotels", text: "Professional hotel websites that showcase facilities, attract guests and simplify bookings.", features: ["Room pages with rates and photo galleries", "Enquiry or booking requests", "Location map and nearby attractions", "Facilities, restaurant and event pages", "WhatsApp contact for quick bookings"] },
  { title: "Real estate", text: "Professional real estate websites showcasing properties, attracting buyers and generating enquiries.", features: ["Property listings with search and filters", "Photo galleries and property details", "Agent profiles and contact forms", "Admin dashboard to add or remove listings", "WhatsApp enquiry button on every property"] },
  { title: "Cooperatives and microfinance", text: "Professional cooperative and microfinance systems that streamline membership, loans and financial management.", features: ["Member registration and records", "Loan applications and approvals", "Repayment and transaction tracking", "Staff dashboards with role-based access", "Reports and financial summaries"] },
];

export const projects = [
  { title: "Modern school website", text: "Modern school websites that attract students, engage parents and simplify communication.", url: "https://school-delta-jade.vercel.app/" },
  { title: "Real estate website", text: "Responsive property pages and discovery layouts for desktop, tablet and mobile.", url: "https://real-estate-using-nextjs.vercel.app/" },
  { title: "Cooperative loan management system", text: "Member management, loan processing, repayments and admin tools, running for a real cooperative.", url: "https://dcgcoop.com.ng" },
];

export const plans = [
  { name: "Starter", price: "₦150,000–₦250,000", note: "One-time project fee", featured: false, cta: "Ask about Starter",
    features: ["Up to 5 pages", "Works on phone, tablet and computer", "Contact form and WhatsApp button", "Basic search engine setup"] },
  { name: "Business", price: "₦300,000–₦600,000", note: "One-time project fee", featured: true, cta: "Ask about Business",
    features: ["8 to 12 pages", "Edit your own content, no coding needed", "Photo gallery, blog and Google Maps", "Speed and security setup"] },
  { name: "Custom system", price: "₦800,000–₦1,500,000+", note: "Quoted after a short call", featured: false, cta: "Request a quote",
    features: ["School or member portals", "Loan and records management", "Property listings with admin dashboard", "Staff logins with different access levels"] },
];

export const carePlan = {
  price: "₦10,000",
  text: "Hosting, backups, security updates and small content changes, so your site stays online and up to date after launch.",
  features: [
    "Fast, secure website hosting",
    "SSL certificate setup and renewal",
    "Regular backups of your website",
    "Security and software updates",
    "Small content changes (text, images, prices)",
    "Uptime checks and quick fixes if something breaks",
    "Support by WhatsApp or email",
  ],
};

export const steps = [
  { title: "Tell me what you need", text: "Send a WhatsApp message or book a short call. I ask about your goals, pages and deadline." },
  { title: "Get a fixed quote", text: "You receive a written scope, price and timeline before any work starts." },
  { title: "Review and refine", text: "I share a working preview. You request changes in agreed revision rounds." },
  { title: "Launch and support", text: "Your site goes live on your domain, and I stay on hand for updates." },
];

export const stack = ["React", "Next.js", "Angular", "TypeScript", "Node.js", "Laravel", "PHP", "WordPress", "Django", "MySQL", "PostgreSQL", "Tailwind CSS"];
