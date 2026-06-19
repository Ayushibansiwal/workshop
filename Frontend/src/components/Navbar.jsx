import { useState } from "react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#fdfcf9]/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo / Title */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer"
        >
          <span className="text-xl font-black text-slate-900 tracking-tight">
            Dev<span className="text-orange-500">Workshop</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleScrollToSection("register")}
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Overview
          </button>
          <button 
            onClick={() => handleScrollToSection("register")} // Navigates toward the next core section
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Curriculum
          </button>
          <button 
            onClick={() => handleScrollToSection("register")}
            className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            FAQs
          </button>
        </div>

        {/* Desktop Action CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleScrollToSection("register")}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-sm transition-all"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-700 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu Container */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white border border-slate-100 rounded-2xl p-4 space-y-3 shadow-xl shadow-slate-200/40">
          <button 
            onClick={() => handleScrollToSection("register")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Overview
          </button>
          <button 
            onClick={() => handleScrollToSection("register")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Curriculum
          </button>
          <button 
            onClick={() => handleScrollToSection("register")}
            className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            FAQs
          </button>
          <hr className="border-slate-100" />
          <button
            onClick={() => handleScrollToSection("register")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 rounded-xl transition-all text-center block"
          >
            Join Now
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;