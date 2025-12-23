"use client";
export default function Jobs() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl font-black mb-12 text-center">Open Nodes</h1>
      <div className="space-y-4">
        {["AI Engineer", "Growth Lead", "Product Designer"].map(job => (
          <div key={job} className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl flex justify-between items-center">
            <span className="text-xl font-bold">{job}</span>
            <button className="px-6 py-2 bg-blue-600 rounded-lg font-bold">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
}
