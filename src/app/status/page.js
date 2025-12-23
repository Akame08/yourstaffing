import React from 'react';
import { Activity, CheckCircle, Server, Database, Globe } from 'lucide-react';

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6 font-mono">
      <div className="max-w-3xl mx-auto">
        
        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <Activity className="text-green-500" /> System Status
          </h1>
          <div className="flex items-center gap-2 bg-green-900/20 px-4 py-2 rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-bold">All Systems Operational</span>
          </div>
        </div>

        <div className="space-y-4">
          <StatusRow name="API Gateway (Global)" icon={<Globe />} uptime="99.99%" />
          <StatusRow name="Database Clusters" icon={<Database />} uptime="100%" />
          <StatusRow name="AI Inference Engine" icon={<Server />} uptime="99.95%" />
          <StatusRow name="Payments (Stripe/Crypto)" icon={<CheckCircle />} uptime="100%" />
        </div>

        <div className="mt-12 bg-[#111] p-6 rounded-xl border border-white/10">
          <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase">Incident History</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-xs text-gray-500 w-24">Dec 21, 2025</div>
              <div>
                <div className="text-sm font-bold text-white">Scheduled Maintenance</div>
                <div className="text-xs text-gray-400">Database optimization completed successfully.</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-xs text-gray-500 w-24">Dec 10, 2025</div>
              <div>
                <div className="text-sm font-bold text-white">Minor Latency - US East</div>
                <div className="text-xs text-gray-400">Resolved in 4 minutes.</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function StatusRow({ name, icon, uptime }) {
  return (
    <div className="flex items-center justify-between bg-[#0A0A0A] p-4 rounded-lg border border-white/10 hover:border-white/20 transition">
      <div className="flex items-center gap-4">
        <div className="text-gray-500">{icon}</div>
        <span className="font-bold">{name}</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="h-1 w-24 bg-gray-800 rounded-full overflow-hidden hidden sm:block">
          <div className="h-full bg-green-500 w-full" />
        </div>
        <span className="text-green-400 font-bold text-sm">{uptime}</span>
      </div>
    </div>
  );
}
