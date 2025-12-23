"use client";
export default function Pricing() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-6 text-center">
      <h1 className="text-6xl font-black mb-8">Fees & Models</h1>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
          <div className="text-5xl font-black text-blue-500 mb-4">15%</div>
          <h3 className="text-xl font-bold">Standard Placement</h3>
        </div>
        <div className="p-10 bg-white/5 border border-white/10 rounded-3xl">
          <div className="text-5xl font-black text-blue-500 mb-4">25%</div>
          <h3 className="text-xl font-bold">Executive Search</h3>
        </div>
      </div>
    </div>
  );
}
