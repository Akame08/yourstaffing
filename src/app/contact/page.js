"use client";
export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-32 px-6 max-w-xl mx-auto">
      <h1 className="text-5xl font-black mb-8 text-center">Contact Us</h1>
      <form className="space-y-4">
        <input placeholder="Name" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl" />
        <input placeholder="Email" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl" />
        <textarea placeholder="Message" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl" rows="4"></textarea>
        <button className="w-full py-4 bg-white text-black font-bold rounded-xl">Send Sequence</button>
      </form>
    </div>
  );
}
