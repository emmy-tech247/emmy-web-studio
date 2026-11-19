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
  { title: "Schools", text: "Admissions information, academic programmes, news, gallery and a parent contact page. Student or fee portals when you’re ready." },
  { title: "Churches", text: "Service times, sermons, events, giving details, prayer requests and a mobile-first layout for members on the go." },
  { title: "Hotels", text: "Room pages, photo galleries, location map, enquiry or booking requests and WhatsApp contact." },
  { title: "Real estate", text: "Property listings with filters, photo galleries, agent contacts and an admin dashboard to add or remove listings yourself." },
  { title: "Cooperatives and microfinance", text: "Member records, loan applications, approvals, repayments and staff dashboards with role-based access." },
];

export const projects = [
  { title: "Modern school website", text: "Next.js, TypeScript and PostgreSQL. Programmes, activities and school services in one clear site.", url: "https://school-delta-jade.vercel.app/" },
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

export const carePlan = { price: "₦10,000", text: "Hosting, backups, security updates and small content changes, so your site stays online and up to date after launch." };

export const steps = [
  { title: "Tell me what you need", text: "Send a WhatsApp message or book a short call. I ask about your goals, pages and deadline." },
  { title: "Get a fixed quote", text: "You receive a written scope, price and timeline before any work starts." },
  { title: "Review and refine", text: "I share a working preview. You request changes in agreed revision rounds." },
  { title: "Launch and support", text: "Your site goes live on your domain, and I stay on hand for updates." },
];

export const stack = ["React", "Next.js", "Angular", "TypeScript", "Node.js", "Laravel", "PHP", "WordPress", "Django", "MySQL", "PostgreSQL", "Tailwind CSS"];
