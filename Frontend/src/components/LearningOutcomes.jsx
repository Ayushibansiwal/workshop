function LearningOutcomes() {
  const outcomes = [
    "Learn React Fundamentals",
    "Build Responsive User Interfaces",
    "Understand REST APIs",
    "Work with MongoDB Databases",
    "Deploy Full Stack Projects"
  ];

  return (
    <section className="py-16 px-6 bg-[#fdfcf9]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">
          What you will learn
        </h2>
        <p className="text-sm text-slate-500 text-center mb-10">
          Comprehensive curriculum designed for modern engineers
        </p>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden divide-y divide-slate-100">
          {outcomes.map((item, index) => (
            <div
              key={index}
              className="p-5 flex items-center gap-4 hover:bg-slate-50 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0 text-xs">
                ✓
              </span>
              <span className="text-slate-700 font-medium text-sm md:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningOutcomes;