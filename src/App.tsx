import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  ChevronDown,
  Layout,
  Rocket,
  Smartphone,
  Zap,
  Globe,
  Database
} from "lucide-react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion, AnimatePresence, Variants } from "framer-motion";

// --- Data ---
const ADDONS = [
  { id: "migration", name: "Migration Service", price: 500, desc: "Move old blog posts to Framer CMS" },
  { id: "darkmode", name: "Dark Mode", price: 400, desc: "Toggle switch for light/dark themes" },
  { id: "og", name: "Custom OG Images", price: 300, desc: "Social share previews for Twitter/WhatsApp" },
];

const FAQS = [
  {
    question: "Why is the landing page $1,500? I saw people on Upwork for $300.",
    answer: "The $300 designers just put pictures on a screen. I build high-performance assets. My sites are engineered to load instantly (which Google loves) and convert traffic (which investors love). If my page gets you just 5 extra customers a month, it pays for itself in weeks. Do you want a cheap site, or a profitable one?"
  }
];

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-primary selection:bg-blue-100 selection:text-blue-900">

      {/* Background Blobs (Essential for Glass) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        <HeroSection />
        <PricingSection />
      </div>
    </div>
  );
}

// --- HERO SECTION (Untouched) ---
function HeroSection() {
  return (
    <motion.main
      className="py-20 border-b border-slate-200/60"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1
        className="text-8xl md:text-9xl tracking-tight font-medium text-slate-900"
        variants={itemVariants}
      >
        <span className="font-bold">Keshi Chuks</span> Web Developer based in
        Nigeria.
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl py-12 font-light text-slate-600 max-w-3xl leading-relaxed"
        variants={itemVariants}
      >
        I don't just design for aesthetics; I design for growth. I believe the
        right interface bridges the gap between a complex product and a loyal
        customer. My obsession is taking your raw vision and turning it into a
        high-performance asset that builds trust with investors and drives real
        revenue
      </motion.p>

      <motion.div
        className="flex items-center justify-between w-full"
        variants={itemVariants}
      >
        <div className="group pb-1 border-b-2 w-auto md:w-[20%] font-bold border-b-slate-900 flex justify-between gap-4 transition-colors duration-500 hover:border-b-blue-600 cursor-pointer">
          Get in touch
          <ArrowUpRight className="transform transition-transform duration-500 group-hover:rotate-45" />
        </div>

        <div className="flex items-center py-1 gap-4 text-xl text-slate-600">
          <a target="_blank" className="hover:text-slate-900 transition-colors" href="https://x.com/_rudosurebec"><FaXTwitter /></a>
          <a target="_blank" href="https://www.linkedin.com/in/keshiemmanuel/" className="hover:text-slate-900 transition-colors"><FaLinkedin /></a>
          <a target="_blank" href="mailto:keshichukwuebuka@gmail.com" className="hover:text-slate-900 transition-colors"><IoMdMail /></a>
        </div>
      </motion.div>
    </motion.main>
  );
}

// --- PRICING SECTION ---
function PricingSection() {
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  // Toggle Logic
  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate Extra Cost
  const extraCost = selectedAddons.reduce((total, id) => {
    const addon = ADDONS.find((a) => a.id === id);
    return total + (addon ? addon.price : 0);
  }, 0);

  return (
    <motion.section
      className="py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="mb-16 text-center md:text-left">
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900">
          World-Class Framer Sites <br /> for High-Growth Startups
        </motion.h2>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

        {/* Tier 1 */}
        <PricingCard
          title="High-Converting Landing Page"
          basePrice={1500}
          extraCost={extraCost}
          subtitle="Waitlist, App, or MVP"
          description="A single, high-impact page designed to do one thing: turn visitors into users. Elite design meets psychological triggers."
          features={[
            "Strategic One-Page Design",
            "Conversion Optimization Layouts",
            "Premium Animations (Scroll effects)",
            "Mobile Perfection (Native feel)",
            "Speed Optimization (Instant load)",
            "Analytics Setup"
          ]}
          cta="Start Project"
        />

        {/* Tier 2 */}
        <PricingCard
          title="The Full Marketing Site"
          basePrice={2000}
          extraCost={extraCost}
          subtitle="Seed/Series A & Established Brands"
          description="A complete digital headquarters. Scalable, multi-page site with CMS to help you rank on Google and establish authority."
          isPopular
          features={[
            "Everything in Tier 1",
            "Multi-Page Structure (Home, About, etc)",
            "CMS Integration (Blog/Changelog)",
            "Advanced Interactivity (Filtering)",
            "SEO Infrastructure",
            "Form Integrations (CRM/Email)",
            "30 Days Priority Support"
          ]}
          cta="Book Discovery Call"
        />
      </div>

      {/* Add-ons Section */}
      <motion.div variants={itemVariants} className="mb-24">
        <h3 className="text-xl font-bold mb-6 text-slate-900 flex items-center gap-2">
          <Plus className="w-5 h-5 text-blue-600" /> Optional Add-ons
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ADDONS.map((addon) => (
            <div
              key={addon.id}
              onClick={() => toggleAddon(addon.id)}
              className={`cursor-pointer p-5 rounded-xl border backdrop-blur-md transition-all duration-200 select-none flex items-start gap-3
                ${selectedAddons.includes(addon.id)
                  ? "bg-blue-50/50 border-blue-500 shadow-md ring-1 ring-blue-500"
                  : "bg-white/40 border-white/60 hover:border-blue-300 hover:bg-white/60"
                }
              `}
            >
              <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center transition-colors
                 ${selectedAddons.includes(addon.id) ? "bg-blue-600 border-blue-600" : "bg-white border-slate-300"}
              `}>
                {selectedAddons.includes(addon.id) && <Check className="w-3.5 h-3.5 text-white" />}
              </div>
              <div>
                <div className="flex justify-between items-center w-full">
                  <span className="font-bold text-slate-900">{addon.name}</span>
                  <span className="text-sm font-semibold text-blue-600">+${addon.price}</span>
                </div>
                <p className="text-sm text-slate-500 mt-1 leading-tight">{addon.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Accordion / Justification */}
      <motion.div variants={itemVariants} className="max-w-2xl">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Common Questions</h3>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </motion.div>

    </motion.section>
  );
}

// --- Sub-Components ---

function PricingCard({ title, subtitle, basePrice, extraCost, description, features, cta, isPopular }: any) {
  // Animate the price change
  const totalPrice = basePrice + extraCost;

  return (
    <motion.div
      variants={itemVariants}
      className={`relative flex flex-col p-8 rounded-2xl h-full transition-all duration-300
        ${isPopular
          ? "bg-white/70 backdrop-blur-xl border border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          : "bg-white/40 backdrop-blur-lg border border-white/60 hover:bg-white/60 hover:shadow-lg hover:shadow-blue-900/5"
        }
      `}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-bl-xl rounded-tr-xl">
          Best Value
        </div>
      )}

      <h3 className="text-2xl font-bold text-slate-900 mb-1">{title}</h3>
      <div className="text-xs uppercase tracking-wide mb-6 text-slate-500 font-medium">{subtitle}</div>

      <div className="flex items-end gap-1 mb-4">
        <span className="text-4xl font-bold text-slate-900 tracking-tight">
          ${totalPrice.toLocaleString()}
        </span>
        {extraCost > 0 && (
           <span className="text-sm text-blue-600 mb-1.5 font-medium bg-blue-50 px-2 py-0.5 rounded-full">
             Includes add-ons
           </span>
        )}
      </div>

      <p className="text-sm mb-8 leading-relaxed text-slate-600 font-light border-b border-slate-100 pb-6">
        {description}
      </p>

      <div className="flex-grow space-y-3 mb-8">
        {features.map((feat: string, i: number) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <div className={`mt-0.5 p-0.5 rounded-full ${isPopular ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`}>
              <Check className="w-3 h-3" />
            </div>
            <span className="text-slate-700">{feat}</span>
          </div>
        ))}
      </div>

      <button className={`w-full py-3 text-sm font-bold rounded-xl transition-all
        ${isPopular
          ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/30"
          : "bg-white text-slate-900 border border-slate-200 hover:border-blue-400 hover:text-blue-600"
        }
      `}>
        {cta}
      </button>
    </motion.div>
  );
}

function AccordionItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/60 bg-white/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-white/60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-slate-900 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100/50">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
