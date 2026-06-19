function WorkshopDetails() {
  const details = [
    { title: "Age Group", value: "16-25 Yrs", badge: "Ages" },
    { title: "Duration", value: "4 Weeks", badge: "Live" },
    { title: "Mode", value: "Online", badge: "Remote" },
    { title: "Fee", value: "₹999", badge: "Offer" },
    { title: "Start Date", value: "1 July", badge: "Upcoming" }
  ];

  return (
    <section className="bg-white py-12 px-6 border-b border-slate-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xs uppercase font-bold tracking-widest text-slate-400 text-center mb-8">
          Quick Overview
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {details.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50/60 border border-slate-100 rounded-2xl p-4 flex flex-col justify-between items-center text-center relative group hover:bg-white hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 mb-2">
                {item.badge}
              </span>
              <p className="text-xl font-black text-slate-800 tracking-tight">
                {item.value}
              </p>
              <h3 className="text-xs text-slate-500 font-medium mt-1">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopDetails;