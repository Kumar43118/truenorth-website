const items = [
  "Licensed Professional Engineer (P.Eng.)",
  "Building Science Expertise",
  "Comprehensive Digital Reports",
  "Serving Ottawa & Surrounding Areas",
];

export default function TrustBar() {
  return (
    <section className="bg-[#102A43]">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 text-sm font-medium text-white md:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3">
            <span className="text-[#B88A2A]">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}