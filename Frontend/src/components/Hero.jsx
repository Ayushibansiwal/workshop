function Hero() {
  const handleEnrollClick = () => {
    document.getElementById("register")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-[#fdfcf9] pt-16 pb-10 px-6 border-b border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Category Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold mb-6 tracking-wide uppercase">
          ⚡ Interactive Workshop
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Full Stack Web Development Workshop
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Learn React, Node.js, MongoDB and deployment by building real-world projects from scratch.
        </p>

        {/* Main CTA Button styled like the primary action blocks */}
        <button
          onClick={handleEnrollClick}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-md shadow-orange-500/10 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Enroll Now &rarr;
        </button>
      </div>
    </section>
  );
}

export default Hero;