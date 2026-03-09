import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  MessageSquare,
  Info,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src="/sahaj.png"
            alt="Odisha Emblem"
            className="h-14 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform"
          />
          <div className="h-10 w-[1px] bg-white/20 hidden sm:block" />
          <div className="flex flex-col">
            <span className="text-xl font-black bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent">
              Sahaj
            </span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              Citizen Helpdesk Platform
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors ${pathname === "/" ? "text-violet-400" : "text-gray-400 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors ${pathname === "/about" ? "text-violet-400" : "text-gray-400 hover:text-white"}`}
          >
            About
          </Link>
          <Link
            to="/partners"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors ${pathname === "/partners" ? "text-violet-400" : "text-gray-400 hover:text-white"}`}
          >
            Partners
          </Link>
          <Link
            to="/whatsapp"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors ${pathname === "/whatsapp" ? "text-violet-400" : "text-gray-400 hover:text-white"}`}
          >
            WhatsApp
          </Link>
          <Link
            to="/contact"
            className={`text-xs font-semibold uppercase tracking-wider transition-colors ${pathname === "/contact" ? "text-violet-400" : "text-gray-400 hover:text-white"}`}
          >
            Contact
          </Link>
          <a
            href="https://wa.me/918999470824"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-[10px] font-bold rounded-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
          >
            Launch Chatbot
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                About
              </Link>
              <Link
                to="/partners"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                Partners
              </Link>
              <Link
                to="/whatsapp"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                WhatsApp Services
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                Contact
              </Link>
              <a
                href="https://wa.me/918999470824"
                className="py-4 bg-green-600 text-white text-center rounded-xl font-black"
              >
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black border-t border-white/10 py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
      <img src="/sahaj.png" alt="Odisha Emblem" className="h-24 w-auto mb-8" />
      <p className="text-violet-400/80 text-sm font-bold mb-4 uppercase tracking-widest">
        Sahaj Platform
      </p>
      <p className="text-gray-400 text-sm mb-6 max-w-xl">
        Sahaj is a digital citizen service platform developed and operated by{" "}
        <strong className="text-white">PugArch Technologies Pvt Ltd</strong>.
        Government departments may use the Sahaj platform to deliver citizen services through digital channels including WhatsApp.
      </p>
      <div className="mb-8">
        <p className="text-violet-400/80 text-xs font-bold uppercase tracking-widest mb-2">
          Current Implementation
        </p>
        <p className="text-white text-sm">
          District Administration Jharsuguda, Government of Odisha
        </p>
      </div>
      <div className="flex gap-8 mb-8">
        <Link
          to="/about"
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          About
        </Link>
        <Link
          to="/partners"
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          Partners
        </Link>
        <Link
          to="/contact"
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/privacy"
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms"
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          Terms of Service
        </Link>
        <a
          href="https://linkedin.com/company/pugarch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">
        &copy; 2026 PugArch Technologies Pvt Ltd. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Collectorate Jharsuguda"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 max-w-5xl text-center"
        >
          <div className="inline-block px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.3em] text-violet-400 uppercase border border-violet-500/30 rounded-full bg-violet-500/10 backdrop-blur-sm">
            Citizen Interaction Platform
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            Sahaj
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-violet-500 text-4xl md:text-6xl">
              WhatsApp Citizen Helpdesk Platform
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 font-medium leading-relaxed">
            Sahaj is a digital citizen service platform developed by PugArch Technologies that enables government departments and organizations to deliver services through WhatsApp and web interfaces.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-6 font-medium leading-relaxed">
            The platform allows citizens to register grievances, schedule appointments, access public information, and communicate with government offices through automated WhatsApp workflows.
          </p>
          <p className="text-lg md:text-xl text-violet-400/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            District Administration Jharsuguda is one of the government entities currently using the Sahaj platform to improve citizen service delivery.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://wa.me/918999470824"
              target="_blank"
              className="px-10 py-5 bg-[#25D366] text-white font-black text-xl rounded-2xl flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(37,211,102,0.3)] hover:scale-105 transition-all"
            >
              Chat on WhatsApp
            </a>
            <Link
              to="/terms"
              className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              How it works <ChevronRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Stats/Feature Grid */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 group hover:border-violet-500/50 transition-all">
              <div className="w-14 h-14 bg-violet-600/20 rounded-2xl flex items-center justify-center text-violet-400 mb-8 border border-violet-500/20 group-hover:scale-110 transition-transform">
                <Info size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4">Citizen Information</h3>
              <p className="text-gray-400 leading-relaxed">
                Get verified information about district services, schemes, and
                department procedures directly on your mobile.
              </p>
            </div>

            <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 group hover:border-violet-500/50 transition-all">
              <div className="w-14 h-14 bg-violet-600/20 rounded-2xl flex items-center justify-center text-violet-400 mb-8 border border-violet-500/20 group-hover:scale-110 transition-transform">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4">Grievance Portal</h3>
              <p className="text-gray-400 leading-relaxed">
                Connect with automated assistance to find information about 
                district services, schemes, and procedures through the platform.
              </p>
            </div>

            <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 group hover:border-violet-500/50 transition-all">
              <div className="w-14 h-14 bg-violet-600/20 rounded-2xl flex items-center justify-center text-violet-400 mb-8 border border-violet-500/20 group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4">Meta Verified</h3>
              <p className="text-gray-400 leading-relaxed">
                A secure, verified channel for communication. This platform
                acts as a digital bridge for the residents of Jharsuguda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-black tracking-widest text-violet-400 uppercase">
              Current Deployment
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 text-white">
              Collectorate Jharsuguda
            </h2>
            <p className="text-violet-400 text-sm font-bold uppercase tracking-widest mb-8">
              District Administration of Jharsuguda, Odisha
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              The Sahaj platform is currently used to assist citizens interacting 
              with district administration services in Jharsuguda. The Collectorate 
              Jharsuguda uses this technology to bring governance closer to people.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Address
                </span>
                <p className="text-white font-medium">
                  District Administration Office,
                  <br />
                  Collectorate, Jharsuguda,
                  <br />
                  Odisha – 768204
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                  Official Website
                </span>
                <p className="text-white font-medium">
                  <a
                    href="https://jharsuguda.odisha.gov.in"
                    target="_blank"
                    className="hover:text-violet-400 underline decoration-violet-500/50"
                  >
                    jharsuguda.odisha.gov.in
                  </a>
                </p>
                <br></br>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">WhatsApp Helpdesk Number</span>
                <p className="text-white font-medium">8999470824</p>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-violet-600 blur-[100px] opacity-20 -z-10 group-hover:opacity-30 transition-opacity" />
            <img
              src="/hero.jpg"
              alt="Collectorate Jharsuguda Building"
              className="w-full max-w-lg mx-auto rounded-[2rem] border border-white/10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-black mb-12"
    >
      About Sahaj
    </motion.h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
        <p>
          <strong className="text-white text-xl block mb-2">Defining Modern Governance</strong>
          Sahaj is a digital governance platform developed by PugArch Technologies to simplify citizen service delivery through messaging platforms like WhatsApp.
        </p>
        <p>
          Our mission is to help government departments and organizations automate citizen services such as grievance management, appointment booking, and service information dissemination.
        </p>
        <p>
          By integrating with the WhatsApp Business API, Sahaj enables secure and structured communication between citizens and government offices, ensuring that every query is tracked and resolved efficiently.
        </p>
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8">
          <p className="text-violet-400 font-bold mb-2 uppercase tracking-widest text-xs">Current Use Case</p>
          <p className="text-white">
            The platform is currently being used by District Administration Jharsuguda, Government of Odisha, to provide citizen services digitally to the residents of the district.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-3xl font-black text-white mb-2">Automated</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Workflows</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-3xl font-black text-white mb-2">Secure</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Information</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-3xl font-black text-white mb-2">Scalable</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Platform</div>
        </div>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
          <div className="text-3xl font-black text-white mb-2">Real-time</div>
          <div className="text-xs text-gray-500 uppercase tracking-widest">Resolution</div>
        </div>
      </div>
    </div>
  </div>
);

const PartnersPage = () => (
  <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
    <div className="text-center mb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black mb-6"
      >
        Government Partners
      </motion.h1>
      <p className="text-gray-400 text-xl max-w-2xl mx-auto">
        Sahaj works with government departments to enable digital service delivery through messaging platforms.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-8">
          <ExternalLink className="text-gray-600 group-hover:text-violet-400 transition-colors" />
        </div>
        <span className="text-[10px] font-black tracking-widest text-violet-400 uppercase">Featured Deployment</span>
        <h2 className="text-3xl font-black text-white mt-4 mb-2">District Administration Jharsuguda</h2>
        <p className="text-gray-500 mb-8 font-bold">Government of Odisha, India</p>
        
        <div className="space-y-4">
          <p className="text-white font-bold opacity-80 uppercase tracking-widest text-xs">Services Enabled:</p>
          <ul className="space-y-3">
            {[
              "Citizen grievance registration",
              "Appointment scheduling",
              "Public information services",
              "WhatsApp based citizen communication"
            ].map((service, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-400">
                <ChevronRight size={16} className="text-violet-500" />
                {service}
              </li>
            ))}
          </ul>
        </div>
        <a 
          href="https://jharsuguda.odisha.gov.in" 
          target="_blank" 
          className="inline-block mt-10 px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all"
        >
          Visit Official Portal
        </a>
      </div>

      <div className="p-10 rounded-[40px] bg-gradient-to-br from-violet-600/20 to-transparent border border-white/10 flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-black text-white mb-4">Partner With Us</h3>
        <p className="text-gray-400 mb-8">
          Are you a government organization looking to modernize your citizen service delivery?
        </p>
        <Link to="/contact" className="px-10 py-5 bg-violet-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-lg shadow-violet-600/20">
          Become a Partner
        </Link>
      </div>
    </div>
  </div>
);

const WhatsAppServicesPage = () => (
  <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-black mb-8 leading-tight"
        >
          WhatsApp <br />
          <span className="text-violet-400">Services</span>
        </motion.h1>
        <p className="text-xl text-gray-400 leading-relaxed mb-8">
          Sahaj integrates with the official WhatsApp Business API to enable secure communication between citizens and government departments.
        </p>
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20">
          <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center text-white">
            <Shield size={24} />
          </div>
          <p className="text-sm text-[#25D366] font-bold">Official Business API Integration</p>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 gap-4">
        {[
          { icon: <MessageSquare />, title: "Register Grievances", desc: "Submit complaints directly through chat with image and document support." },
          { icon: <ExternalLink />, title: "Book Appointments", desc: "Schedule meetings with officials without visiting the office personally." },
          { icon: <Info />, title: "Service Updates", desc: "Receive real-time notifications about your application status." },
          { icon: <Phone />, title: "Government Info", desc: "Access verified department details and procedure information 24/7." }
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex gap-6 hover:border-violet-500/30 transition-colors">
            <div className="text-violet-400 mt-1">{item.icon}</div>
            <div>
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="p-12 rounded-[40px] bg-white/5 border border-white/10 text-center">
      <h2 className="text-2xl font-black text-white mb-6">Security & Verification</h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-0 leading-relaxed">
        All communication is conducted through verified WhatsApp Business accounts. Data is encrypted end-to-end between the citizen and the Sahaj platform, ensuring that sensitive information remains confidential and secure.
      </p>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black mb-6"
      >
        Contact Us
      </motion.h1>
      <p className="text-xl text-gray-400">Get in touch with the team at PugArch Technologies.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-8">
        <div className="p-10 rounded-[3rem] bg-white/5 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6">Our Details</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center text-violet-400 shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:info@pugarch.in" className="text-white hover:text-violet-400 transition-colors">info@pugarch.in</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center text-violet-400 shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Phone</p>
                <p className="text-white">+91 8180006916</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-violet-600/20 rounded-lg flex items-center justify-center text-violet-400 shrink-0">
                <Info size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Office Address</p>
                <p className="text-white leading-relaxed">
                  PugArch Technologies Pvt Ltd<br />
                  L-18 LIG Mahada Colony,<br />Laxman Nagar, Manewada,<br />Nagpur, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 p-10 rounded-[3.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10">
        <h3 className="text-2xl font-black text-white mb-8">Inquiry Form</h3>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-xs text-gray-500 font-bold uppercase tracking-widest ml-1">Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-gray-500 font-bold uppercase tracking-widest ml-1">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Your email" />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs text-gray-500 font-bold uppercase tracking-widest ml-1">Subject</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="How can we help?" />
          </div>
          <div className="sm:col-span-2 space-y-2">
            <label className="text-xs text-gray-500 font-bold uppercase tracking-widest ml-1">Message</label>
            <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-violet-500 transition-colors min-h-[150px]" placeholder="Tell us about your requirements..."></textarea>
          </div>
          <button className="sm:col-span-2 py-5 bg-violet-600 hover:bg-violet-700 text-white font-black rounded-2xl transition-all hover:scale-[1.02] shadow-xl shadow-violet-600/20 mt-4">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-black mb-12"
    >
      Privacy Policy
    </motion.h1>
    <div className="space-y-12 text-gray-400 leading-relaxed text-lg">
      <section>
        <p className="text-white font-medium mb-6 italic">
          Last Updated: March 6, 2026
        </p>
        <p className="mb-4">
          Sahaj respects user privacy and processes citizen data strictly for the purpose of providing government services through the platform.
        </p>
        <p className="mb-4">
          Sahaj is a technology platform developed and maintained by <strong className="text-white">PugArch Technologies Pvt Ltd</strong>.
        </p>
        <p>
          Data shared through WhatsApp or web interfaces is used only for service delivery and is not shared with third parties without authorization. The platform complies with applicable data protection regulations.
        </p>
        <p className="mt-4">
          Currently, Sahaj is deployed for use by the{" "}
          <strong className="text-white">Collectorate Jharsuguda</strong> to 
          assist citizens with district administration services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          1. Information We Collect via WhatsApp
        </h2>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong className="text-white">WhatsApp Number:</strong> Your unique
            phone number used to contact the helpdesk.
          </li>
          <li>
            <strong className="text-white">Message Content:</strong> Inquiries,
            grievances, or feedback you submit.
          </li>
          <li>
            <strong className="text-white">Profile Identity:</strong> The name
            and profile details you provide to WhatsApp.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          2. Usage and Purpose
        </h2>
        <p>
          Information is used exclusively to facilitate government services and
          grievance redressal within the Jharsuguda district jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">3. Data Security</h2>
        <p>
          All data is processed through secure, authorized channels. We do not
          sell, rent, or trade user data with any third-party marketing
          agencies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">
          4. Contact Information
        </h2>
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 mt-6">
          <p className="text-white font-bold mb-2">
            Office of the Collector & DM
          </p>
          <p>Email: dm-jharsuguda@nic.in</p>
          <p>Phone: 06645-270070</p>
        </div>
      </section>
    </div>
  </div>
);

const TermsPage = () => (
  <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-4xl md:text-6xl font-black mb-12"
    >
      Terms of Service
    </motion.h1>
    <div className="space-y-12 text-gray-400 leading-relaxed text-lg">
      <section>
        <p className="mb-8">
          Sahaj is a digital service platform operated by <strong className="text-white">PugArch Technologies Pvt Ltd</strong>. Government departments may use the platform to provide citizen services through WhatsApp and other digital channels. Users interacting with government services through Sahaj agree to the terms outlined in this document.
        </p>
        <h2 className="text-2xl font-bold text-white mb-6">
          1. Acceptance of Terms
        </h2>
        <p>
          By using the Sahaj WhatsApp Helpdesk platform, you agree to these 
          terms. When interacting with specific services deployed for 
          organizations like the Collectorate Jharsuguda, you also agree to 
          comply with their official guidelines.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">2. Permitted Use</h2>
        <p>
          This service is for citizen inquiries and grievance
          submissions. Misuse of the chatbot for spam, harassment, or spreading
          misinformation is prohibited.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">3. Disclaimer</h2>
        <p>
          While we strive for 24/7 availability, service may be suspended for
          maintenance. Information provided is as per available district records.
        </p>
      </section>
    </div>
  </div>
);

// --- App Root ---

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="w-full">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={pathname} key={pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/whatsapp" element={<WhatsAppServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
