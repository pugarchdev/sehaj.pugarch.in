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
              Collectorate Jharsuguda
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors ${pathname === "/" ? "text-violet-400" : "text-gray-400 hover:text-white"}`}
          >
            Home
          </Link>
          <Link
            to="/privacy"
            className={`text-sm font-semibold transition-colors ${pathname === "/privacy" ? "text-violet-400" : "text-gray-400 hover:text-white"}`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`text-sm font-semibold transition-colors ${pathname === "/terms" ? "text-violet-400" : "text-gray-400 hover:text-white"}`}
          >
            Terms of Service
          </Link>
          <a
            href="https://wa.me/918999470824"
            target="_blank"
            className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
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
                to="/privacy"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold"
              >
                Terms of Service
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
      <p className="text-violet-400/80 text-sm font-bold mb-4">
        Developed and maintained by{" "}
        <strong className="text-white">PugArch Technology Pvt Ltd</strong>
        <br />
        for the{" "}
        <span className="text-white">
          District Administration of Jharsuguda.
        </span>
      </p>
      <div className="flex gap-8 mb-8">
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
          href="https://jharsuguda.odisha.gov.in"
          target="_blank"
          className="text-xs text-gray-500 hover:text-white transition-colors"
        >
          Official Website
        </a>
      </div>
      <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">
        &copy; 2026 Collectorate Jharsuguda. All rights reserved.
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
            Official Citizen Service Helpdesk
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            Sahaj – <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-violet-500">
              Collectorate Jharsuguda
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
           Sahaj is a digital citizen helpdesk platform developed by PugArch Technology Pvt Ltd for the District Administration of Jharsuguda.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            
            Citizens can contact the Sahaj WhatsApp helpdesk to receive district
            services and support directly from Collectorate Jharsuguda.
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
              <h3 className="text-2xl font-black mb-4">Official Information</h3>
              <p className="text-gray-400 leading-relaxed">
                Get verified information about district services, schemes, and
                official department procedures directly on your mobile.
              </p>
            </div>

            <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 group hover:border-violet-500/50 transition-all">
              <div className="w-14 h-14 bg-violet-600/20 rounded-2xl flex items-center justify-center text-violet-400 mb-8 border border-violet-500/20 group-hover:scale-110 transition-transform">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4">Grievance Portal</h3>
              <p className="text-gray-400 leading-relaxed">
                A seamless way to submit and track grievances. Our system
                ensures your concerns reach the right officials promptly.
              </p>
            </div>

            <div className="p-10 rounded-[40px] bg-white/5 border border-white/10 group hover:border-violet-500/50 transition-all">
              <div className="w-14 h-14 bg-violet-600/20 rounded-2xl flex items-center justify-center text-violet-400 mb-8 border border-violet-500/20 group-hover:scale-110 transition-transform">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-black mb-4">Meta Verified</h3>
              <p className="text-gray-400 leading-relaxed">
                An official, verified channel for communication. This platform
                acts as a secure digital bridge for the residents of Jharsuguda.
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
              Administration
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8">
              Collectorate <br />
              Jharsuguda
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              The Office of the District Magistrate and Collector is the primary
              administrative unit of the district, coordinating development and
              governance for the citizens of Jharsuguda.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            Sahaj is the official WhatsApp chatbot service of Collectorate Jharsuguda implemented for citizen assistance and public information.
            </p> <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Official Whatsapp Chatbot Number</span>
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
          Last Updated: March 4, 2026
        </p>
        <p>
          This Privacy Policy describes how{" "}
          <strong className="text-white">
            Sahaj – Collectorate Jharsuguda WhatsApp Helpdesk
          </strong>{" "}
          handles your information. Sahaj is the official digital service
          platform for citizen services of Collectorate Jharsuguda, developed
          and maintained by{" "}
          <strong className="text-white">PugArch Technology Pvt Ltd</strong>.
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
        <h2 className="text-2xl font-bold text-white mb-6">
          1. Acceptance of Terms
        </h2>
        <p>
          By using the Sahaj WhatsApp Helpdesk, you agree to comply with the
          official guidelines set by the Collectorate Jharsuguda District
          Administration.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">2. Permitted Use</h2>
        <p>
          This service is strictly for official citizen inquiries and grievance
          submissions. Misuse of the chatbot for spam, harassment, or spreading
          misinformation is prohibited.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6">3. Disclaimer</h2>
        <p>
          While we strive for 24/7 availability, service may be suspended for
          maintenance. Information provided is as per official district records.
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
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
