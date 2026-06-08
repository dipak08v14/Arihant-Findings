import React, { useMemo, useState, ChangeEvent, FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock,
  Crown,
  FileCheck,
  HelpCircle,
  Layers,
  Menu,
  MessageCircle,
  Package,
  PhoneCall,
  Ruler,
  Scale,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  X,
  User,
} from "lucide-react";
import { B2B_PRODUCTS } from "./data/products";
import { Product } from "./types";

/* ==========================================================================
   HIGH FIDELITY VECTOR ILLUSTRATIONS - POLISHED FOR EMERALD/GOLD THEME
   ========================================================================== */

const ChainIllustration = () => (
  <svg viewBox="0 0 200 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" id="chain-illustration-svg">
    <defs>
      <linearGradient id="gold-link-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF2" />
        <stop offset="30%" stopColor="#CFA054" />
        <stop offset="70%" stopColor="#A07D3E" />
        <stop offset="100%" stopColor="#6D5220" />
      </linearGradient>
      <linearGradient id="gold-link-2" x1="100%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF2" />
        <stop offset="40%" stopColor="#E1BA72" />
        <stop offset="75%" stopColor="#A07D3E" />
        <stop offset="100%" stopColor="#4C3B18" />
      </linearGradient>
      <filter id="svg-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="var(--color-brand-emerald)" floodOpacity="0.12" />
      </filter>
    </defs>
    
    {/* Blueprint CAD Guidelines */}
    <g opacity="0.15" stroke="var(--color-brand-gold)" strokeWidth="0.5" id="chain-blueprint-lines">
      <line x1="10" y1="0" x2="10" y2="180" />
      <line x1="50" y1="0" x2="50" y2="180" />
      <line x1="100" y1="0" x2="100" y2="180" />
      <line x1="150" y1="0" x2="150" y2="180" />
      <line x1="190" y1="0" x2="190" y2="180" />
      <line x1="0" y1="30" x2="200" y2="30" />
      <line x1="0" y1="90" x2="200" y2="90" />
      <line x1="0" y1="150" x2="200" y2="150" />
    </g>

    <g filter="url(#svg-shadow)" id="chain-metallic-links">
      {/* Top Left Link */}
      <path
        d="M 40 40 C 25 25, 20 45, 35 60 L 75 100 C 90 115, 110 95, 95 80 Z"
        fill="none"
        stroke="url(#gold-link-1)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      {/* Middle Interlocking Link */}
      <path
        d="M 70 70 C 55 55, 50 75, 65 90 L 105 130 C 120 145, 140 125, 125 110 Z"
        fill="none"
        stroke="url(#gold-link-2)"
        strokeWidth="12"
        strokeLinecap="round"
      />
      
      {/* Floating glitter dots representing micro facets */}
      <motion.g
        animate={{
          scale: [0, 1.3, 0],
          opacity: [0, 1, 0],
          x: [40, 75, 115],
          y: [40, 75, 115]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
        id="chain-glint-g"
      >
        <path d="M0 -6 L2 -2 L6 0 L2 2 L0 6 L-2 2 L-6 0 L-2 -2 Z" fill="#FFFDF2" />
        <circle r="1.5" fill="#E1BA72" />
      </motion.g>
    </g>
  </svg>
);

const MiraclePlateIllustration = () => (
  <svg viewBox="0 0 200 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" id="miracle-plate-svg">
    <defs>
      <linearGradient id="gold-radial-mesh" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF2" />
        <stop offset="30%" stopColor="#E5C483" />
        <stop offset="55%" stopColor="#CFA054" />
        <stop offset="85%" stopColor="#A07D3E" />
        <stop offset="100%" stopColor="#6D5220" />
      </linearGradient>
    </defs>

    {/* Technical alignment rings */}
    <g opacity="0.15" stroke="var(--color-brand-gold)" strokeWidth="0.5" id="miracle-blueprint-rings">
      <circle cx="100" cy="90" r="70" />
      <circle cx="100" cy="90" r="50" />
      <circle cx="100" cy="90" r="30" />
      <line x1="30" y1="90" x2="170" y2="90" />
      <line x1="100" y1="20" x2="100" y2="160" />
    </g>

    <motion.g
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      id="miracle-plate-mesh"
    >
      {/* Heavy Base Mirror Plate */}
      <circle cx="100" cy="90" r="48" fill="none" stroke="url(#gold-radial-mesh)" strokeWidth="6" />
      
      {/* Faceted Mirror Metal Carvings */}
      <path d="M 100 42 L 100 138 M 52 90 L 148 90 M 66 56 L 134 124 M 66 124 L 134 56" stroke="url(#gold-radial-mesh)" strokeWidth="2" strokeOpacity="0.8" />
      
      {/* Inner Bezel for Prong Set - Styled deep navy for brand prestige */}
      <circle cx="100" cy="90" r="23" fill="var(--color-brand-emerald)" stroke="url(#gold-radial-mesh)" strokeWidth="2" />
      
      {/* Diamond Cut center piece */}
      <polygon points="100,77 110,84 108,96 92,96 90,84" fill="none" stroke="url(#gold-radial-mesh)" strokeWidth="1.5" />
      <circle cx="100" cy="90" r="5" fill="#FFFDF2" />

      {/* Sparkling diamond reflection flashes */}
      <motion.g
        animate={{
          scale: [0.8, 1.3, 0.8],
          rotate: [0, 180, 360]
        }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
          ease: "linear"
        }}
        style={{ originX: "100px", originY: "90px" }}
        id="miracle-sparkle-shine"
      >
        <path d="M 100 66 L 102 84 L 120 86 L 102 88 L 100 106 L 98 88 L 80 86 L 98 84 Z" fill="#FFFDF2" opacity="0.85" />
        <path d="M 100 75 L 101 85 L 111 86 L 101 87 L 100 97 L 99 87 L 89 86 L 99 85 Z" fill="#CFA054" opacity="0.95" />
      </motion.g>
    </motion.g>
  </svg>
);

const ChakipostIllustration = () => (
  <svg viewBox="0 0 200 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" id="chakipost-svg">
    <defs>
      <linearGradient id="gold-brilliant" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF2" />
        <stop offset="45%" stopColor="#CFA054" />
        <stop offset="80%" stopColor="#A07D3E" />
        <stop offset="100%" stopColor="#6D5220" />
      </linearGradient>
    </defs>

    {/* Technical axes */}
    <g opacity="0.15" stroke="var(--color-brand-gold)" strokeWidth="0.5" id="chakipost-blueprint-axes">
      <line x1="0" y1="90" x2="200" y2="90" strokeDasharray="3,3" />
      <line x1="45" y1="20" x2="45" y2="160" />
      <line x1="135" y1="20" x2="135" y2="160" />
    </g>

    {/* Stud Pin Shaft */}
    <rect x="35" y="86" width="105" height="8" rx="4" fill="url(#gold-brilliant)" id="chakipost-shaft" />
    {/* Micro lock ridges */}
    <line x1="75" y1="84" x2="75" y2="96" stroke="#6D5220" strokeWidth="1.5" />
    <line x1="95" y1="84" x2="95" y2="96" stroke="#6D5220" strokeWidth="1.5" />
    <line x1="115" y1="84" x2="115" y2="96" stroke="#6D5220" strokeWidth="1.5" />

    {/* Sliding Back Clutch component */}
    <motion.g
      animate={{ x: [0, 12, 0] }}
      transition={{
        repeat: Infinity,
        duration: 3.5,
        ease: "easeInOut"
      }}
      id="chakipost-clutch-mount"
    >
      {/* Scroll Wings */}
      <path d="M 115 70 C 105 70, 100 80, 110 90 C 100 100, 105 110, 115 110 L 128 110 C 128 110, 134 90, 128 70 Z" fill="url(#gold-brilliant)" stroke="#A07D3E" strokeWidth="1.5" />
      {/* Central barrel collar - styled elegant slate navy */}
      <rect x="110" y="78" width="10" height="24" rx="2.5" fill="var(--color-brand-emerald)" stroke="#A07D3E" strokeWidth="1" />
      
      {/* Visual locks confirm stars */}
      <motion.path
        d="M 104 64 L 105 68 L 109 69 L 105 70 L 104 74 L 103 70 L 99 69 L 103 68 Z"
        fill="#FFFDF2"
        animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.g>

    {/* Solid base pad fitting */}
    <circle cx="35" cy="90" r="14" fill="url(#gold-brilliant)" stroke="#A07D3E" strokeWidth="1" id="chakipost-head" />
  </svg>
);

const SHookIllustration = () => (
  <svg viewBox="0 0 200 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" id="s-hook-svg">
    <defs>
      <linearGradient id="gold-polished" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF2" />
        <stop offset="25%" stopColor="#E5C483" />
        <stop offset="60%" stopColor="#CFA054" />
        <stop offset="85%" stopColor="#A07D3E" />
        <stop offset="100%" stopColor="#6D5220" />
      </linearGradient>
    </defs>

    {/* Technical circles */}
    <g opacity="0.15" stroke="var(--color-brand-gold)" strokeWidth="0.5" id="s-hook-geometry">
      <circle cx="100" cy="65" r="38" />
      <circle cx="100" cy="115" r="38" />
    </g>

    <motion.g
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ originX: "100px", originY: "90px" }}
      id="s-hook-wire-body"
    >
      {/* Curvaceous S-line wire */}
      <path
        d="M 132 60 C 132 32, 68 32, 68 65 C 68 95, 132 85, 132 115 C 132 148, 68 148, 68 120"
        fill="none"
        stroke="url(#gold-polished)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Decorative wire coiled wraps on solid point - Navy inner accent */}
      <rect x="91" y="80" width="18" height="18" rx="2" fill="var(--color-brand-emerald)" stroke="url(#gold-polished)" strokeWidth="1.2" />
      <line x1="91" y1="84" x2="109" y2="84" stroke="url(#gold-polished)" strokeWidth="1.2" />
      <line x1="91" y1="89" x2="109" y2="89" stroke="url(#gold-polished)" strokeWidth="1.2" />
      <line x1="91" y1="94" x2="109" y2="94" stroke="url(#gold-polished)" strokeWidth="1.2" />

      {/* Shine overlay reflecting light */}
      <motion.path
        d="M 126 55 C 126 42, 80 37, 72 58"
        fill="none"
        stroke="#FFFDF2"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.65"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
      />
    </motion.g>
  </svg>
);

const LobsterLockIllustration = () => (
  <svg viewBox="0 0 200 180" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" id="lobster-lock-svg">
    <defs>
      <linearGradient id="gold-deep-lobster" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFDF2" />
        <stop offset="35%" stopColor="#E5C483" />
        <stop offset="65%" stopColor="#CFA054" />
        <stop offset="85%" stopColor="#A07D3E" />
        <stop offset="100%" stopColor="#6D5220" />
      </linearGradient>
    </defs>

    {/* Technical layout boundary box */}
    <g opacity="0.15" stroke="var(--color-brand-gold)" strokeWidth="0.5" id="lobster-technical-grids">
      <rect x="30" y="32" width="140" height="116" rx="4" />
      <line x1="30" y1="90" x2="170" y2="90" />
      <line x1="100" y1="32" x2="100" y2="148" />
    </g>

    <g id="lobster-mechanical-parts">
      {/* Swivel eye loop */}
      <circle cx="54" cy="90" r="16" fill="none" stroke="url(#gold-deep-lobster)" strokeWidth="6" />

      {/* Heavy Lock Case chassis */}
      <path
        d="M 64 90 L 128 54 C 146 54, 162 72, 162 90 C 162 108, 146 126, 128 126 L 64 90 Z"
        fill="url(#gold-deep-lobster)"
        stroke="#A07D3E"
        strokeWidth="1"
      />

      {/* Internal gate cutaway - deep brand navy */}
      <path d="M 104 76 L 132 76 C 138 76, 144 82, 144 90 C 144 98, 138 104, 132 104 L 104 104 Z" fill="var(--color-brand-emerald)" stroke="url(#gold-deep-lobster)" strokeWidth="1.5" />

      {/* Spring-tensioned latch gate */}
      <motion.g
        animate={{
          rotate: [0, -22, 0],
          x: [0, -3, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }}
        style={{ originX: "104px", originY: "76px" }}
        id="lobster-gate-arm"
      >
        {/* Wire latch gate */}
        <path d="M 91 65 L 110 86 M 94 63 L 103 83" stroke="url(#gold-deep-lobster)" strokeWidth="4.5" strokeLinecap="round" />
        
        {/* Tiny trigger lever node */}
        <rect x="81" y="53" width="13" height="7.5" rx="2" fill="url(#gold-deep-lobster)" stroke="#A07D3E" strokeWidth="0.8" />
      </motion.g>

      {/* Compression spring pivot rivet */}
      <circle cx="105" cy="90" r="4.5" fill="#FFFDF2" stroke="#A07D3E" strokeWidth="1" />
    </g>
  </svg>
);

function ProductIllustration({ id }: { id: string }) {
  switch (id) {
    case "chain":
      return <ChainIllustration />;
    case "miracle-plate":
      return <MiraclePlateIllustration />;
    case "chakipost":
      return <ChakipostIllustration />;
    case "s-hook":
      return <SHookIllustration />;
    case "lobster-lock":
      return <LobsterLockIllustration />;
    default:
      return null;
  }
}

/* ==========================================================================
   FLOATING SHIMMERING GLINTS IN BACKGROUND
   ========================================================================== */

const FloatingGlints = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {[...Array(6)].map((_, i) => {
        const delays = [0, 1.5, 3, 0.8, 2.2, 4];
        const lefts = ["12%", "85%", "45%", "25%", "75%", "90%"];
        const tops = ["18%", "28%", "62%", "81%", "74%", "45%"];
        const durations = [6, 8, 7, 9, 8, 10];
        
        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: lefts[i],
              top: tops[i],
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.15, 0.75, 0.15],
              scale: [0.7, 1.3, 0.7],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: durations[i],
              repeat: Infinity,
              delay: delays[i],
              ease: "easeInOut",
            }}
            className="text-brand-gold opacity-30"
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
        );
      })}
    </div>
  );
};

/* ==========================================================================
   MAIN APPLICATION COMPONENT - REDESIGNED & FRESH LIGHT THEME
   ========================================================================== */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [rfqBasket, setRfqBasket] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [submittedRfq, setSubmittedRfq] = useState(false);

  // RFQ form input state
  const [formState, setFormState] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    quantity: "500",
    purityGrade: "18K Yellow Gold",
    message: ""
  });

  const year = useMemo(() => new Date().getFullYear(), []);

  // Soft fresh light transitions
  const springTransition = { type: "spring", stiffness: 120, damping: 22 };
  
  const smoothReveal = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const handleAddToRfq = (productName: string) => {
    if (!rfqBasket.includes(productName)) {
      setRfqBasket((prev) => [...prev, productName]);
    }
    // Auto populate message with product name
    setFormState((prev) => ({
      ...prev,
      message: `Hi Arihant Findings team, I am interested in a bulk enquiry for "${productName}". Please provide technical pricing and lead times for a container wholesale order. Thanks!`
    }));
    // Scroll to contact form smoothly
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleRemoveFromRfq = (productName: string) => {
    setRfqBasket((prev) => prev.filter((p) => p !== productName));
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert("Please provide at least your Name and Phone Number to submit an enquiry.");
      return;
    }
    setSubmittedRfq(true);
    setTimeout(() => {
      setSubmittedRfq(false);
      // Reset basket and select fields
      setRfqBasket([]);
    }, 5000);
  };

  // Filtered list based on search/category (all, chains, parts, clasps)
  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return B2B_PRODUCTS;
    if (activeCategory === "chains") return B2B_PRODUCTS.filter(p => p.id === "chain");
    if (activeCategory === "parts") return B2B_PRODUCTS.filter(p => p.id === "miracle-plate" || p.id === "chakipost");
    if (activeCategory === "clasps") return B2B_PRODUCTS.filter(p => p.id === "s-hook" || p.id === "lobster-lock");
    return B2B_PRODUCTS;
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-brand-mint text-brand-dark selection:bg-brand-emerald selection:text-white font-sans antialiased" id="app-root-div">
      
      {/* 1. FRESH LIGHT BACKGROUND GLOW ACCENTS */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" id="app-background-effects">
        <motion.div 
          animate={{
            scale: [1, 1.12, 0.95, 1],
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-[-15%] top-[-10%] h-[32rem] w-[32rem] rounded-full bg-brand-sage/35 blur-3xl" 
        />
        <motion.div 
          animate={{
            scale: [1, 0.92, 1.08, 1],
            x: [0, -40, 30, 0],
            y: [0, 30, -15, 0]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-[-10%] top-[15%] h-[40rem] w-[40rem] rounded-full bg-[#EAF2EE]/50 blur-3xl" 
        />
        <div className="absolute bottom-[-5%] left-[25%] h-96 w-96 rounded-full bg-white/80 blur-[120px]" />
      </div>

      {/* Floating Sparkles in Background */}
      <FloatingGlints />

      {/* 2. PREMIUM BRAND NAVIGATION HEADER */}
      <motion.header 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-brand-sage/30 bg-white/75 backdrop-blur-md" 
        id="app-navbar-header"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          
          <motion.a 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            href="#home" 
            className="flex items-center gap-3.5 group"
            id="brand-logo-link"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-emerald text-brand-gold shadow-md shadow-brand-emerald/10 transition-transform duration-500 group-hover:rotate-[360deg] border border-brand-gold/20">
              <Crown className="h-5.5 w-5.5" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.45em] text-brand-emerald/80 font-sans">ARIHANT</p>
              <p className="text-xl font-light tracking-[0.25em] text-brand-dark font-serif -mt-1">
                FINDINGS<span className="text-brand-gold font-sans font-bold text-sm ml-1">.</span>
              </p>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-10 lg:flex" id="desktop-navbar-nav">
            {[
              { label: "Home", href: "#home" },
              { label: "About Company", href: "#about" },
              { label: "Products Catalog", href: "#products" },
              { label: "Why Choose Us", href: "#why-us" },
              { label: "Trade Enquiry", href: "#contact" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative text-base font-semibold text-brand-dark/85 hover:text-brand-emerald py-1.5 transition-colors duration-200"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-brand-gold transition-all duration-300 hover:w-full group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Header B2B Call to Action */}
          <div className="hidden items-center gap-4 lg:flex" id="header-cta-group">
            {rfqBasket.length > 0 && (
              <motion.a
                href="#contact"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-3.5 py-1.5 text-xs font-semibold text-brand-emerald"
              >
                <FileCheck className="h-3.5 w-3.5" />
                <span>Selected: {rfqBasket.length}</span>
              </motion.a>
            )}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-emerald px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-brand-emerald/90 transition-all border border-brand-emerald/10"
              id="header-bulk-rfq-btn"
            >
              <span>Request Quote</span>
              <ArrowRight className="h-4 w-4 text-brand-gold" />
            </motion.a>
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-brand-sage bg-white p-2.5 text-brand-dark shadow-sm lg:hidden focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-trigger"
          >
            {mobileOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </motion.button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="border-t border-brand-sage/35 bg-white lg:hidden overflow-hidden shadow-inner"
              id="mobile-navbar-dropdown"
            >
              <div className="mx-auto flex flex-col px-4 py-4 gap-1.5">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Company", href: "#about" },
                  { label: "Products Catalog", href: "#products" },
                  { label: "Why Choose Us", href: "#why-us" },
                  { label: "Trade Enquiry", href: "#contact" },
                ].map((item) => (
                  <motion.a
                    whileTap={{ scale: 0.98 }}
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex justify-between items-center rounded-xl px-4 py-3 text-base font-semibold text-brand-dark/85 hover:bg-brand-mint hover:text-brand-emerald transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="h-4 w-4 text-brand-gold" />
                  </motion.a>
                ))}
                {rfqBasket.length > 0 && (
                  <div className="mt-2 text-center py-2 px-3 bg-brand-gold/10 rounded-xl text-xs text-brand-emerald font-semibold mx-4">
                    📦 {rfqBasket.length} Items added to RFQ Cart
                  </div>
                )}
                <div className="p-2 border-t border-brand-sage/20 mt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex justify-center items-center gap-2 bg-brand-emerald text-white rounded-xl py-3 text-sm font-medium w-full text-center hover:opacity-90"
                  >
                    <Sliders className="h-4 w-4 text-brand-gold" />
                    Configure Inquiry Form
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main id="app-main-content">
        
        {/* 3. HERO HEROIC SHOWCASE SECTION */}
        <section id="home" className="mx-auto max-w-7xl px-4 pt-6 pb-12 sm:px-6 lg:px-8 relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            
            {/* Title Block & Primary Copys */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-emerald"
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-gold fill-brand-gold/25" />
                <span>B2B Jewelry Findings Manufacturer</span>
              </motion.div>

              {/* Majestic Serif Jewelry Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl"
              >
                <span className="font-serif block font-light italic text-brand-gold">The Premium Standard in</span>
                <span className="text-brand-emerald font-sans uppercase tracking-wide">ARIHANT FINDINGS</span>
              </motion.h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Precision-engineered loose chains, flawless locking clasps, premium miracle plates, and secure friction scrolls built strictly for wholesalers, major distributors, and high-volume trade partnerships.
              </p>

              <blockquote className="mt-4 border-l-2 border-brand-gold/60 pl-4 py-1 italic text-xs text-slate-500 max-w-lg">
                &ldquo;Every link and setting is certified with uniform wire calibration and state-of-the-art alloy safety to withstand standard B2B jewelry assembly workflows.&rdquo;
              </blockquote>

              {/* Dynamic Call to Actions */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransition}
                  href="#products"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-emerald px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-emerald/15 hover:bg-brand-emerald/95 transition-all"
                >
                  Explore Interactive Showroom <ArrowRight className="h-4 w-4 text-brand-gold" />
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={springTransition}
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-brand-sage bg-white px-7 py-3 text-sm font-semibold text-brand-dark shadow-sm hover:border-brand-gold/50 hover:bg-brand-mint transition-all"
                >
                  Instant B2B Request <PhoneCall className="h-4 w-4 text-brand-gold" />
                </motion.a>
              </div>

              {/* Professional Corporate Metrics Ribbon */}
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="mt-8 grid grid-cols-3 gap-3 border-t border-brand-sage pt-5 max-w-xl"
              >
                {[
                  { value: "XRF Certified", label: "Gold & Silver Alloys" },
                  { value: "0.85mm Post", label: "Precision Calibrated" },
                  { value: "Bulk Ready", label: "Worldwide Supply" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={staggerItem}
                    whileHover={{ y: -3 }}
                    className="flex flex-col"
                  >
                    <span className="text-xs font-extrabold text-brand-emerald font-mono">{item.value}</span>
                    <span className="text-[10px] text-slate-500 mt-0.5 font-sans">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Premium CAD Spec interactive Frame - Right Hand Showcard */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Outer decorative brand rings */}
              <div className="absolute -left-6 top-6 hidden h-28 w-28 rounded-full border border-brand-gold/25 lg:block animate-pulse" />
              <div className="absolute -right-6 bottom-6 hidden h-36 w-36 rounded-full border border-brand-sage/40 lg:block" />

              <motion.div 
                whileHover={{ y: -4 }}
                transition={springTransition}
                className="overflow-hidden rounded-[2rem] border border-white bg-white p-4 shadow-[0_20px_50px_rgba(10,17,40,0.06)]"
              >
                <div className="rounded-[1.7rem] bg-gradient-to-br from-brand-emerald via-[#151D35] to-brand-dark p-6 md:p-8 text-white relative">
                  
                  {/* Decorative faint background vector diagram */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none p-4 overflow-hidden">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
                      <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" />
                      <line x1="10" y1="50" x2="90" y2="50" stroke="white" strokeWidth="0.5" />
                      <line x1="50" y1="10" x2="50" y2="90" stroke="white" strokeWidth="0.5" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between gap-4 relative z-10">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <p className="text-[11px] tracking-[0.35em] text-brand-gold uppercase font-mono">Operations Portfolio</p>
                      <h2 className="mt-1 text-2xl md:text-3xl font-serif font-light text-white leading-tight">Master Craftsmanship</h2>
                    </motion.div>
                    <div className="rounded-2xl bg-white/10 p-2.5 border border-white/10 shrink-0">
                      <Crown className="h-5 w-5 text-brand-gold" />
                    </div>
                  </div>

                  {/* Highlights Grid with custom Icons */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2 relative z-10">
                    {[
                      { title: "Pure Gold/Silver Alloys", text: "XRF certified 22K (916), 18K (750), 14K (585) & sterling silver 925." },
                      { title: "Calibrated Dimensions", text: "Solder spots and lock gates calibrated to +/- 0.02mm tolerance levels." },
                      { title: "B2B Customized Weight", text: "Weight variations customizable and balanced to achieve targeted budget goals." },
                      { title: "Comprehensive QA tests", text: "Tested to sustain high tensile stress, salt water immersion, and rapid trigger locks." },
                    ].map((feat, idx) => (
                      <motion.div 
                        key={feat.title} 
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                        className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-colors duration-250 hover:border-brand-gold/30"
                      >
                        <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
                          <span className="text-[9px] font-mono bg-brand-gold/20 px-1.5 py-0.5 rounded text-white">{idx + 1}</span>
                          {feat.title}
                        </p>
                        <p className="mt-1.5 text-[11px] leading-relaxed text-slate-200">{feat.text}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Trust footer label */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-white/70 relative z-10 font-mono">
                    <span className="flex items-center gap-1.5"><BadgeCheck className="h-3.5 w-3.5 text-brand-gold" /> ISO certified metals</span>
                    <span>Ravi Soni Management</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* 4. REFINED BRAND IDENTITY STORY (ABOUT SECTION) */}
        <section id="about" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 relative">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            
            {/* Elegant Narrative Card */}
            <motion.div 
              {...smoothReveal}
              className="rounded-[2rem] border border-white bg-white p-6 md:p-8 shadow-[0_15px_40px_rgba(10,17,40,0.03)] relative"
            >
              {/* absolute golden corner line decoration */}
              <div className="absolute right-0 top-0 w-24 h-24 border-r-2 border-t-2 border-brand-gold/30 rounded-tr-[2rem] pointer-events-none" />

              <motion.p 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold font-sans"
              >
                Brand Ethos & Roots
              </motion.p>
              
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-3 text-3xl md:text-4xl font-serif font-light tracking-tight text-brand-dark leading-tight"
              >
                An Authorized Manufacturer & Supplier for the Global Jewelry Trade
              </motion.h3>
              
              <p className="mt-4 text-xs md:text-sm leading-relaxed text-slate-650">
                With deep heritage under the direction of **Ravi Soni**, Arihant Findings has evolved into a key commercial supplier. We eliminate middlemen markups and supply structured high-precision component batches directly to retail and wholesale jewelers.
              </p>
              
              <p className="mt-3 text-xs md:text-sm leading-relaxed text-slate-600">
                Our manufacturing operations combine modern automated CNC laser faceting with traditional metallurgical hardening methods. This ensures that every finding is not just beautiful, but behaves optimally during the heat of production soldering and final consumer wear.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "100% Fine Quality Assay",
                  "Direct Manufacturer B2B Tariff",
                  "Flexible Sample Ordering",
                  "Custom Laser Engraving Ready",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-sage/50 bg-brand-mint px-3.5 py-1.5 text-[10px] font-semibold text-brand-emerald font-sans"
                  >
                    <Check className="h-3 w-3 text-brand-gold stroke-[3]" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Strategic Strengths Stack */}
            <div className="space-y-3.5">
              <div className="pl-2">
                <span className="text-xs uppercase tracking-widest text-brand-gold font-mono">Our Operational Capabilities</span>
                <h4 className="text-xl font-serif font-light text-brand-dark mt-0.5">Foundry Excellence & Delivery Support</h4>
              </div>

              {[
                {
                  title: "Consistent Solderability",
                  desc: "We wash and finish every piece using localized gold-ash neutralization. This leaves the metal free from post-manufacturing oxides, making direct jewelry soldering fast and reliable.",
                  icon: Layers,
                  tag: "SOLDER-READY"
                },
                {
                  title: "Calibrated Weight Profiles",
                  desc: "We help jewelry brands balance tight price points. From heavy-duty commercial lobster locks to hollowed weight-optimized visual plates, we support precise target weights.",
                  icon: Scale,
                  tag: "WEIGHT REGULATION"
                },
                {
                  title: "Steady Production Capacity",
                  desc: "We plan schedules in coordination with your seasonal launches. Our wholesale foundry in India operates 24/7 to guarantee smooth logistics, secure packaging, and quick dispatch times.",
                  icon: Clock,
                  tag: "SUPPLY CHAIN"
                },
              ].map((strength) => {
                const StrengthIcon = strength.icon;
                return (
                  <motion.div
                    key={strength.title}
                    whileHover={{ x: 6, borderColor: "var(--color-brand-gold)" }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className="flex gap-4 rounded-xl border border-brand-sage/40 bg-white/70 p-4 shadow-sm hover:bg-white transition-all duration-300"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/5">
                      <StrengthIcon className="h-4.5 w-4.5 text-brand-emerald" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="font-sans font-bold text-sm text-brand-dark">{strength.title}</h5>
                        <span className="text-[8px] font-mono bg-brand-sage text-brand-emerald font-semibold px-1.5 py-0.5 rounded-full">{strength.tag}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{strength.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 5. INTERACTIVE SHOWROOM PRO-CATALOG (PRODUCTS SECTION) */}
        <section id="products" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          
          <motion.div 
            {...smoothReveal}
            className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between border-b border-brand-sage pb-5"
          >
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold"
              >
                Curated Inventory
              </motion.p>
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-2 text-3xl md:text-4xl font-serif font-light text-brand-dark"
              >
                Interactive Engineering Specifications Showroom
              </motion.h3>
              <p className="mt-2 max-w-2xl text-xs text-slate-500 leading-relaxed">
                Click on any jewelry finding to launch its detailed CAD engineering specifications and add it directly to standard B2B inquiry sheets. Focuses strictly on certified wholesale parameters.
              </p>
            </div>

            {/* Premium Category Filter Controls */}
            <div className="flex flex-wrap gap-1 bg-white p-1 rounded-full border border-brand-sage shrink-0 shadow-sm">
              {[
                { id: "all", label: "Show All" },
                { id: "chains", label: "Chains" },
                { id: "parts", label: "Miracle & Posts" },
                { id: "clasps", label: "S-Hooks & Lobsters" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 ${
                    activeCategory === tab.id
                      ? "bg-brand-emerald text-brand-gold shadow-sm"
                      : "text-brand-dark/70 hover:text-brand-emerald hover:bg-brand-mint"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Catalog Layout: Custom SVG Illustrations embedded with real JSON metrics */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" id="products-catalog-grid">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => {
                const isSelected = selectedProduct?.id === product.id;
                
                return (
                  <motion.article
                    key={product.id}
                    layoutId={`product-holder-${product.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ 
                      y: -6, 
                      boxShadow: "0 25px 45px -15px rgba(9,62,43,0.08)",
                    }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-brand-sage/40 bg-white shadow-[0_5px_15px_rgba(0,0,0,0.015)] transition-all duration-300 relative hover:border-brand-gold/60"
                    id={`product-card-${product.id}`}
                  >
                    {/* SVG Graphic block */}
                    <div className="relative flex aspect-square items-center justify-center p-3.5 bg-gradient-to-b from-brand-mint to-white overflow-hidden border-b border-brand-sage/10">
                      <div className="w-full h-full max-w-[150px] max-h-[140px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                        <ProductIllustration id={product.id} />
                      </div>
                      
                      {/* Premium spec tags */}
                      <div className="absolute left-3.5 top-3.5 flex flex-col gap-1 z-10">
                        <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-bold text-brand-emerald uppercase tracking-wider border border-brand-sage/40 font-mono">
                          MOQ: {product.specs.moq}
                        </span>
                        <span className="rounded-full bg-brand-gold/10 px-2.5 py-1 text-[9px] font-bold text-brand-emerald uppercase tracking-wider border border-brand-gold/15 font-mono">
                          {product.specs.material[0]}
                        </span>
                      </div>

                      {/* Sparkle hint badge on hover */}
                      <div className="absolute right-3.5 top-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="p-1.5 bg-white rounded-lg shadow-sm border border-brand-sage/30 inline-flex items-center justify-center text-brand-gold">
                          <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                        </span>
                      </div>
                    </div>

                    {/* Content metadata */}
                    <div className="p-5.5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1.5">
                          <h4 className="text-base font-bold tracking-tight text-brand-dark group-hover:text-brand-emerald transition-colors font-sans leading-tight">
                            {product.name}
                          </h4>
                          <span className="font-serif text-[10px] text-brand-gold uppercase tracking-[0.2em] pt-0.5 shrink-0">B2B Standard</span>
                        </div>
                        <p className="mt-1.5 text-[10px] text-slate-500 font-mono tracking-wide">{product.subtitle}</p>
                        <p className="mt-2.5 text-xs leading-relaxed text-slate-600 line-clamp-2">{product.description}</p>
                      </div>

                      <div className="mt-5 pt-4.5 border-t border-brand-sage/20">
                        <div className="grid grid-cols-2 gap-1.5 mb-4 text-[10px] font-mono text-slate-500">
                          <div>
                            <span className="block text-slate-400 capitalize">Dimensions:</span>
                            <span className="text-brand-dark font-medium truncate block">{product.specs.dimensions}</span>
                          </div>
                          <div>
                            <span className="block text-slate-400 capitalize">Finish:</span>
                            <span className="text-brand-dark font-medium truncate block">{product.specs.finishing.split(" ")[0]} Finish</span>
                          </div>
                        </div>

                        {/* Layout actions */}
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => setSelectedProduct(product)}
                            className="flex-1 rounded-xl border border-brand-sage/65 hover:border-brand-emerald bg-white py-2 px-1 text-center text-[10px] font-semibold text-brand-dark hover:bg-brand-mint transition-all"
                          >
                            Read Specs
                          </button>
                          
                          <button
                            onClick={() => handleAddToRfq(product.name)}
                            className={`flex-1 rounded-xl py-2 px-1 text-center text-[10px] font-semibold flex items-center justify-center gap-1.5 transition-all ${
                              rfqBasket.includes(product.name)
                                ? "bg-brand-gold/15 text-brand-emerald border border-brand-gold/20"
                                : "bg-brand-emerald text-white hover:bg-brand-dark border border-brand-emerald/10"
                            }`}
                          >
                            {rfqBasket.includes(product.name) ? "Added ✓" : "Inquire"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* 6. MODAL DRAWER - EXTRA TECHNICAL METRIC DETAILS */}
          <AnimatePresence>
            {selectedProduct && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/45 p-4 backdrop-blur-sm"
                onClick={() => setSelectedProduct(null)}
              >
                <motion.div 
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  transition={{ type: "spring", stiffness: 220, damping: 25 }}
                  className="w-full max-w-2xl overflow-hidden rounded-[2.5rem] border border-brand-sage bg-white shadow-[0_30px_90px_rgba(9,62,43,0.18)]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-brand-emerald text-white p-6.5 flex justify-between items-center relative">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-xl pointer-events-none" />
                    <div>
                      <span className="text-[9px] font-mono text-brand-gold uppercase tracking-[0.3em]">CAD Component spec sheet</span>
                      <h4 className="text-xl font-serif font-light text-white mt-1">{selectedProduct.name}</h4>
                    </div>
                    <button 
                      onClick={() => setSelectedProduct(null)}
                      className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                      id="close-spec-modal-button"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="p-6.5 space-y-6 max-h-[70vh] overflow-y-auto">
                    <div>
                      <span className="text-xs font-bold text-brand-emerald uppercase tracking-wider block mb-2 font-sans">Description</span>
                      <p className="text-sm text-slate-705 leading-relaxed font-sans">{selectedProduct.description}</p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="border border-brand-sage/35 bg-brand-mint/40 rounded-2xl p-4">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1">Purity Alloys (XRF Verified)</span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {selectedProduct.specs.purityGrades.map((g) => (
                            <span key={g} className="bg-white px-2 py-1 rounded-lg text-xs font-semibold text-brand-emerald border border-brand-sage">
                              {g}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border border-brand-sage/35 bg-brand-mint/40 rounded-2xl p-4">
                        <span className="text-[10px] font-mono text-slate-400 block mb-1 font-sans">Materials Offered</span>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {selectedProduct.specs.material.map((m) => (
                            <span key={m} className="bg-brand-emerald/10 text-brand-emerald px-2 py-1 rounded-lg text-xs font-semibold">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Specifications Technical Table */}
                    <div className="border border-brand-sage/40 rounded-2xl overflow-hidden shadow-inner">
                      <div className="bg-brand-mint px-4 py-2.5 text-[10px] font-mono text-[#5e7e72] font-semibold border-b border-brand-sage/40">
                        METALLURGICAL ASSAY METRICS
                      </div>
                      <table className="w-full text-left border-collapse font-sans text-xs">
                        <tbody>
                          <tr className="border-b border-brand-sage/20 hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 text-slate-400 font-mono text-[10px]">Wire Gauge Guide</td>
                            <td className="p-3.5 text-brand-dark font-medium">{selectedProduct.specs.dimensions}</td>
                          </tr>
                          <tr className="border-b border-brand-sage/20 hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 text-slate-400 font-mono text-[10px]">Target Weight/Range</td>
                            <td className="p-3.5 text-brand-dark font-medium">{selectedProduct.specs.weightRange}</td>
                          </tr>
                          <tr className="border-b border-brand-sage/20 hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 text-slate-400 font-mono text-[10px]">Wholesale MOQ Lot</td>
                            <td className="p-3.5 text-brand-gold font-bold">{selectedProduct.specs.moq}</td>
                          </tr>
                          <tr className="border-b border-brand-sage/20 hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 text-slate-400 font-mono text-[10px]">Acid/Oxidation Coating</td>
                            <td className="p-3.5 text-brand-dark font-medium">{selectedProduct.specs.finishing}</td>
                          </tr>
                          <tr className="hover:bg-slate-50 transition-colors">
                            <td className="p-3.5 text-slate-400 font-mono text-[10px]">CNC Machinery Class</td>
                            <td className="p-3.5 text-brand-emerald font-semibold font-mono">{selectedProduct.technicalDetails}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => {
                          handleAddToRfq(selectedProduct.name);
                          setSelectedProduct(null);
                        }}
                        className="flex-1 rounded-xl bg-brand-emerald text-white py-3 px-4 text-xs font-semibold text-center hover:bg-brand-dark transition-colors"
                      >
                        Add to RFQ List
                      </button>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="rounded-xl border border-brand-sage px-4 text-xs font-semibold hover:bg-brand-mint text-brand-dark transition-colors"
                      >
                        Keep Browsing
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* 7. HIGHLY PROFESSIONAL "WHY CHOOSE US" ACCREDITATION ACCORDION BANNER */}
        <section id="why-us" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <motion.div 
            {...smoothReveal}
            className="rounded-[2rem] border border-brand-sage bg-brand-emerald text-white px-6 py-10 shadow-[0_20px_50px_rgba(10,17,40,0.12)] sm:px-10 relative overflow-hidden"
          >
            {/* abstract geometry design lines visual */}
            <div className="absolute right-0 top-0 pointer-events-none opacity-5 scroll-smooth p-6">
              <svg width="220" height="220" fill="none">
                <circle cx="110" cy="110" r="100" stroke="white" strokeWidth="1" />
                <circle cx="110" cy="110" r="70" stroke="white" strokeWidth="1" />
                <circle cx="110" cy="110" r="40" stroke="white" strokeWidth="1" />
              </svg>
            </div>

            <div className="max-w-3xl relative z-10">
              <motion.p 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-gold"
              >
                Trade Guarantee
              </motion.p>
              <motion.h3 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-2.5 text-3xl md:text-4xl font-serif font-light text-white leading-tight"
              >
                Refined Manufacturing Built Specially for Jewelry Procurement Teams
              </motion.h3>
              <p className="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed max-w-xl">
                We satisfy all compliance assays, secure customs delivery standards, and allow flexible sample test weights to fulfill complex purchasing operations cleanly.
              </p>
            </div>

            {/* Accent Highlight Bento Grid */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4 relative z-10"
            >
              {[
                {
                  title: "Assay Compliance",
                  desc: "Guarantees 100% genuine metal purity grades with regular XRF testing certifications provided with every single batch.",
                  icon: Award,
                },
                {
                  title: "Direct B2B Pricing",
                  desc: "Clear weight-driven tier scales optimized for wholesale buyers, ensuring highly competitive pricing templates.",
                  icon: CircleDollarSign,
                },
                {
                  title: "Calibrated Tensile",
                  desc: "Manufactured to resist wire elongation, link breakage and setting warping during intense soldering operations.",
                  icon: Sliders,
                },
                {
                  title: "Rigorous Delivery",
                  desc: "Secure heavy-duty vacuum bags with anti-tarnish protective strips to guard metals against moisture transit decay.",
                  icon: HelpCircle,
                },
              ].map((item, idx) => {
                const HighlightIcon = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={staggerItem}
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)", borderColor: "var(--color-brand-gold)" }}
                    className="rounded-xl border border-white/10 bg-white/5 p-4.5 backdrop-blur-sm transition-all duration-300 relative"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold text-brand-dark mb-3.5">
                      <HighlightIcon className="h-4.5 w-4.5" />
                    </div>
                    <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider">{item.title}</h4>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-300">{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* 8. ELITE COMBINED REQUEST-FOR-QUOTE ENGINE & INQUIRY FORM */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start" id="rfq-system-container">
            
            {/* Informational Column with Cart representation */}
            <motion.div 
              {...smoothReveal}
              className="lg:col-span-4 rounded-[1.5rem] border border-brand-sage/40 bg-white p-5 md:p-6 shadow-sm space-y-5"
            >
              <div>
                <motion.p 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold font-sans"
                >
                  RFQ Cart Engine
                </motion.p>
                <motion.h3 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-2 text-2xl md:text-3xl font-serif font-light text-brand-dark"
                >
                  B2B Trade Inquiry
                </motion.h3>
              </div>

              {/* Dynamic Inquiry Basket */}
              <div className="border border-brand-sage/35 rounded-xl bg-brand-mint/30 p-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-sans">Assigned Inquiry Basket</span>
                
                {rfqBasket.length === 0 ? (
                  <div className="text-xs text-slate-500 italic py-4 flex flex-col items-center justify-center text-center gap-2 font-sans">
                    <Package className="h-6 w-6 text-brand-gold opacity-50" />
                    <span>No component added yet.<br />Click &quot;Inquire&quot; on products to auto-fill here.</span>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {rfqBasket.map((itemName) => (
                      <div key={itemName} className="flex justify-between items-center bg-white border border-brand-sage px-3 py-1.5 rounded-xl text-xs text-brand-dark animate-fade-in font-sans">
                        <span className="font-semibold text-brand-emerald">{itemName}</span>
                        <button 
                          onClick={() => handleRemoveFromRfq(itemName)}
                          className="text-slate-400 hover:text-red-500 p-1 rounded-lg hover:bg-neutral-100 transition-colors"
                          title="Remove from RFQ list"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {rfqBasket.length > 0 && (
                  <p className="mt-2.5 text-[9px] text-brand-gold font-mono block border-t border-brand-sage/20 pt-2">
                    ⚙️ Adding components auto-compiles the trade query below.
                  </p>
                )}
              </div>

              {/* Company contact registries */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center gap-3 rounded-xl p-3 border border-brand-sage/40 bg-slate-50">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-emerald text-brand-gold">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="font-sans">
                    <span className="block text-[8px] font-mono text-slate-400">Owner / Managing Director</span>
                    <span className="text-xs font-bold text-brand-dark">Ravi Soni</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl p-3 border border-brand-sage/40 bg-slate-50">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-emerald text-brand-gold">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="font-sans">
                    <span className="block text-[8px] font-mono text-slate-400">Trade Registered Office</span>
                    <span className="text-xs font-medium text-slate-600 block">Arihant Findings, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RFQ Form Elements */}
            <motion.div 
              {...smoothReveal}
              className="lg:col-span-8 rounded-[2.5rem] border border-brand-sage/40 bg-white p-7 md:p-10 shadow-[0_15px_35px_rgba(9,62,43,0.015)] relative"
            >
              {submittedRfq ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-4"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/15 text-brand-emerald border border-brand-gold border-dashed animate-bounce">
                    <Crown className="h-7 w-7 text-brand-emerald" />
                  </div>
                  <h4 className="text-2xl font-serif font-light text-brand-emerald">Inquiry Transmitted Successfully</h4>
                  <p className="max-w-md text-xs leading-relaxed text-slate-600 font-sans">
                    Thank you. Managing Director Ravi Soni and the customer support dispatch team have been notified. A formal technical quote sheet and lead times will be sent to your registered business email and phone number within 12 trade hours.
                  </p>
                  <div className="text-xs text-brand-gold font-semibold font-mono animate-pulse mt-4">
                    RECEIPT STATUS: STYLING COMPILED
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5.5">
                  <div className="grid gap-5.5 sm:grid-cols-2 font-sans">
                    <div>
                      <label className="mb-2 block text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">Full Name *</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleFormChange}
                        placeholder="e.g., Jane Smith"
                        className="w-full rounded-xl border border-brand-sage/65 bg-brand-mint/20 px-4.5 py-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:bg-white focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-brand-dark uppercase tracking-wider">Business / Company Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formState.companyName}
                        onChange={handleFormChange}
                        placeholder="e.g., Elite Fine Jewelers Pvt Ltd"
                        className="w-full rounded-xl border border-brand-sage/65 bg-brand-mint/20 px-4.5 py-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:bg-white focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-brand-dark uppercase tracking-wider">Contact Phone / Mobile *</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleFormChange}
                        placeholder="e.g., +1 (555) 0192 / +91"
                        className="w-full rounded-xl border border-brand-sage/65 bg-brand-mint/20 px-4.5 py-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:bg-white focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-brand-dark uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleFormChange}
                        placeholder="e.g., procurement@elitejewels.com"
                        className="w-full rounded-xl border border-brand-sage/65 bg-brand-mint/20 px-4.5 py-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:bg-white focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-brand-dark uppercase tracking-wider font-sans">Alloy Purity Requirement</label>
                      <select
                        name="purityGrade"
                        value={formState.purityGrade}
                        onChange={handleFormChange}
                        className="w-full rounded-xl border border-brand-sage/65 bg-brand-mint/20 px-4.5 py-3 text-xs outline-none transition focus:border-brand-gold focus:bg-white focus:ring-1 focus:ring-brand-gold"
                      >
                        <option value="22K Yellow Gold (916)">22K Yellow Gold (916 Assay)</option>
                        <option value="18K Yellow Gold (750)">18K Yellow Gold (750 Assay)</option>
                        <option value="18K White Gold">18K White Gold</option>
                        <option value="18K Rose Gold">18K Rose Gold</option>
                        <option value="14K Gold (585)">14K Gold (585 Assay)</option>
                        <option value="925 Sterling Silver">925 Sterling Silver (Anti-Tarnish)</option>
                        <option value="Platinum PT950">Platinum PT950 (High-Density)</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-bold text-brand-dark uppercase tracking-wider">Target Order Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={formState.quantity}
                        onChange={handleFormChange}
                        placeholder="e.g., 1000 pieces / 200 meters"
                        className="w-full rounded-xl border border-brand-sage/65 bg-brand-mint/20 px-4.5 py-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:bg-white focus:ring-1 focus:ring-brand-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-brand-dark uppercase tracking-wider">Custom Technical Requirements</label>
                    <textarea
                      rows={4}
                      name="message"
                      value={formState.message}
                      onChange={handleFormChange}
                      placeholder="Specify required wire gauge thickness, hook lock lengths, custom laser logo stamp needs, target target sample packaging, or dispatch deadlines."
                      className="w-full rounded-xl border border-brand-sage/65 bg-brand-mint/20 px-4.5 py-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-brand-gold focus:bg-white focus:ring-1 focus:ring-brand-gold"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-slate-500 text-[11px] leading-relaxed select-none">
                    <input type="checkbox" id="terms-accept" defaultChecked required className="accent-brand-emerald h-3.5 w-3.5 cursor-pointer rounded" />
                    <label htmlFor="terms-accept" className="cursor-pointer">
                      I confirm these details match registered corporate procurement needs.
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={springTransition}
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-emerald py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-emerald/15 hover:bg-brand-dark transition-all"
                    id="submit-rfq-button"
                  >
                    <span>Submit Formal B2B Enquiry</span>
                    <ArrowRight className="h-4 w-4 text-brand-gold" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </section>

      </main>

      {/* 9. AUTHORITATIVE BRAND FOOTER */}
      <footer className="border-t border-brand-sage/35 bg-white py-12 relative overflow-hidden" id="app-footer-wrapper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-emerald text-brand-gold">
                <Crown className="h-5 w-5" />
              </div>
              <p className="text-base font-extrabold tracking-[0.2em] text-brand-dark">ARIHANT FINDINGS</p>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 font-sans max-w-sm">
              Authorized B2B supplier of certified high-tensile jewelry chains, miracle plates, earrings post accessories, and spring-tension clasps. India foundry shipping globally.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[10px] font-mono text-[#5e7e72] uppercase font-bold tracking-wider">Foundry Status: Operational</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold mb-4 font-sans">Product Families</p>
            <div className="flex flex-col gap-2.5 text-xs text-slate-605">
              <a href="#products" onClick={() => setActiveCategory("chains")} className="hover:text-brand-emerald transition-colors font-sans">Precision Loose Chains</a>
              <a href="#products" onClick={() => setActiveCategory("parts")} className="hover:text-brand-emerald transition-colors font-sans">Optical Miracle Plates</a>
              <a href="#products" onClick={() => setActiveCategory("parts")} className="hover:text-brand-emerald transition-colors font-sans">Earring Posts & Scrolls (Chakipost)</a>
              <a href="#products" onClick={() => setActiveCategory("clasps")} className="hover:text-brand-emerald transition-colors font-sans">S-hook / M-hook Clasps</a>
              <a href="#products" onClick={() => setActiveCategory("clasps")} className="hover:text-brand-emerald transition-colors font-sans">Calibrated Trigger Lobster Claws</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold mb-4">Assay Standards</p>
            <div className="flex flex-col gap-2.5 text-xs text-slate-600">
              <span className="flex items-center gap-1.5"><Award className="h-3.5 w-3.5 text-brand-gold" /> XRF Spectrometer Assayed</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-brand-gold" /> ISO 9001 Compliance</span>
              <span className="flex items-center gap-1.5"><Sliders className="h-3.5 w-3.5 text-brand-gold" /> Calibrated CAD Dimensions</span>
              <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand-gold" /> Strict Anti-Oxidant Acid Bath</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-gold mb-4">Registered Corporate Office</p>
            <p className="text-xs leading-relaxed text-slate-600">
              <span className="font-semibold block text-brand-emerald">Arihant Findings Corporation Ltd.</span>
              Managing Director: Ravi Soni
              <br />
              Foundry: Mumbai / Jaipur Production Corridors, India
              <br />
              <span className="mt-3.5 block font-serif italic text-brand-gold">Trade Enquiries: Ravi.Soni@arihantfindings.com</span>
            </p>
          </div>

        </div>

        <div className="border-t border-brand-sage/20 mt-10 pt-6 text-center text-[11px] text-slate-450 uppercase tracking-widest font-mono select-none">
          © {year} Arihant Findings. Crafted strictly for accredited jewelry brands & wholesale partners.
        </div>
      </footer>

      {/* 10. FLOATING DYNAMIC WHATSAPP BUTTON (FOR ACCIDENT-FREE TOUCH CHANNELS) */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, ...springTransition }}
        whileHover={{ scale: 1.05, y: -4 }}
        whileTap={{ scale: 0.95 }}
        href="https://wa.me/917572853217"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-brand-emerald px-5 py-3.5 text-xs font-extrabold text-white shadow-[0_15px_35px_rgba(9,62,43,0.22)] transition-all hover:bg-brand-dark border border-brand-gold/25 group"
        aria-label="Direct Manager WhatsApp Line"
        id="whatsapp-button-float"
      >
        <span className="relative flex h-2.5 w-2.5" id="whatsapp-indicator">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
        </span>
        <svg className="h-4.5 w-4.5 text-[#25D366] fill-[#25D366] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="whatsapp-logo-svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.457 5.704 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="tracking-wider uppercase font-mono">B2B Chat support</span>
      </motion.a>

    </div>
  );
}
