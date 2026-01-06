import {
  ArrowUpRight,
  Check,
  Zap,
  Smartphone,
  Rocket,
  Layout,
} from "lucide-react";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { motion, Variants } from "framer-motion";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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
      {/* BACKGROUND BLOBS (Essential for Glassmorphism to be visible) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[40%] left-[10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[100px] opacity-70" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-purple-200/40 rounded-full blur-[100px] opacity-70" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        <HeroSection />
        <PricingSection />
      </div>
    </div>
  );
}

// --- HERO SECTION (Strictly Preserved) ---
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
          <a
            target="_blank"
            className="hover:text-slate-900 transition-colors"
            href="https://x.com/_rudosurebec"
          >
            <FaXTwitter />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/keshiemmanuel/"
            className="hover:text-slate-900 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            href="mailto:keshichukwuebuka@gmail.com"
            className="hover:text-slate-900 transition-colors"
          >
            <IoMdMail />
          </a>
        </div>
      </motion.div>
    </motion.main>
  );
}

// --- PRICING SECTION (Light Glassmorphism) ---
function PricingSection() {
  return (
    <motion.section
      className="py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Header */}
      <div className="mb-16 text-center md:text-left">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-slate-900"
        >
          High-Performance <br /> Framer Sites for Startups
        </motion.h2>
      </div>

      {/* Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <PricingCard
          title="Design to Live"
          price="$800"
          subtitle="Founders & Designers"
          description="You have the Figma file. You need it live. I convert your design into a pixel-perfect, interactive Framer site."
          features={[
            "1:1 Design Match",
            "Mobile Responsive",
            "SEO Ready",
            "Super Fast Loading",
            "48-Hour Delivery",
          ]}
          cta="Start Build"
        />

        {/* Card 2 - Highlighted (Glass + Subtle Gradient Border) */}
        <PricingCard
          title="Growth"
          price="$1,800"
          subtitle="Startups & App Launches"
          description="A complete marketing website designed to capture leads. We build a system that converts visitors into users."
          isPopular
          features={[
            "Everything in Tier 1",
            "Interactive Elements",
            "CMS Setup (Blog/Team)",
            "Advanced Forms",
            "Premium Animations",
            "30 Days Support",
          ]}
          cta="Book Discovery Call"
        />

        {/* Card 3 */}
        <PricingCard
          title="Membership"
          price="$3,500"
          subtitle="Communities & Courses"
          description="Turn your Framer site into a membership business. Users can sign up, log in, and access exclusive content."
          features={[
            "Everything in Tier 2",
            "User Accounts (Login)",
            "Payment Integration",
            "Gated Content",
            "User Dashboard",
            "Zero Maintenance",
          ]}
          cta="Get a Quote"
        />
      </div>

      {/* "Why Me" Section - Clean Glass Boxes */}
      <motion.div
        className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
      >
        <Feature
          icon={<Layout className="w-5 h-5 text-blue-600" />}
          title="Framer Specialist"
          desc="I don't use generic builders. I specialize in Framer to give you the fastest, smoothest site possible."
        />
        <Feature
          icon={<Smartphone className="w-5 h-5 text-blue-600" />}
          title="Perfect on Mobile"
          desc="Most designers just shrink the desktop version. I rebuild the mobile layout so it feels like a native app."
        />
        <Feature
          icon={<Rocket className="w-5 h-5 text-blue-600" />}
          title="Speed Obsessed"
          desc="I optimize every image and animation so your site loads instantly, which Google loves."
        />
      </motion.div>
    </motion.section>
  );
}

// --- Sub-Components (High-End Glass) ---

function PricingCard({
  title,
  subtitle,
  price,
  description,
  features,
  cta,
  isPopular,
}: any) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative flex flex-col p-8 rounded-2xl h-full transition-all duration-300
        ${
          isPopular
            ? "bg-white/70 backdrop-blur-xl border border-blue-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            : "bg-white/40 backdrop-blur-lg border border-white/60 hover:bg-white/60 hover:shadow-lg hover:shadow-blue-900/5"
        }
      `}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-bl-xl rounded-tr-xl">
          Recommended
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>
      <div className="text-xs uppercase tracking-wide mb-6 text-slate-500 font-medium">
        {subtitle}
      </div>

      <div className="text-4xl font-bold mb-4 tracking-tight text-slate-900">
        {price}
      </div>

      <p className="text-sm mb-8 leading-relaxed text-slate-600 font-light">
        {description}
      </p>

      <div className="flex-grow space-y-3 mb-8">
        {features.map((feat: string, i: number) => (
          <div key={i} className="flex items-start gap-3 text-sm">
            <div
              className={`mt-0.5 p-0.5 rounded-full ${isPopular ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"}`}
            >
              <Check className="w-3 h-3" />
            </div>
            <span className="text-slate-700">{feat}</span>
          </div>
        ))}
      </div>

      <button
        className={`w-full py-3 text-sm font-bold rounded-xl transition-all
        ${
          isPopular
            ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/30"
            : "bg-white text-slate-900 border border-slate-200 hover:border-blue-400 hover:text-blue-600"
        }
      `}
      >
        {cta}
      </button>
    </motion.div>
  );
}

function Feature({ icon, title, desc }: any) {
  return (
    <motion.div
      variants={itemVariants}
      className="p-6 rounded-2xl bg-white/40 border border-white/60 backdrop-blur-md hover:bg-white/60 transition-colors"
    >
      <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm text-blue-600 border border-slate-100">
        {icon}
      </div>
      <h4 className="font-bold text-lg text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 leading-relaxed text-sm font-light">
        {desc}
      </p>
    </motion.div>
  );
}
