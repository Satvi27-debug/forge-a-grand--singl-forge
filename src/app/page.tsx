'use client';
import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles, Code, Globe, Github, ExternalLink, Cpu, Layers } from 'lucide-react';

export default function ForgedPortfolio() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Dynamic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.2),transparent_100%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full animate-pulse decoration-1000" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 tracking-widest uppercase">
            <Zap className="w-3 h-3" />
            Neural Build Protocol Verified
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-purple-400">
            AETHER NOIR
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Cybernetic High-Fidelity Orchestration <span className="text-blue-500 mx-2">/</span> The Neural Nexus
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95">
              Explore Projects
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all active:scale-95">
              Initiate Contact
            </button>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <Layers className="w-6 h-6" />
        </div>
      </section>

      {/* Stats / Proof Cluster */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <ProofCard 
            icon={Cpu} 
            title="Sovereign Execution" 
            desc="Built autonomously via the Forge Master protocol." 
            color="text-blue-400" 
          />
          <ProofCard 
            icon={Shield} 
            title="Antigravity Sealed" 
            desc="Locked with peak automation security headers." 
            color="text-purple-400" 
          />
          <ProofCard 
            icon={Sparkles} 
            title="Neural Materialization" 
            desc="Advanced scaffolding with zero human interaction." 
            color="text-cyan-400" 
          />
        </div>
      </section>

      {/* Skills Matrix */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-black mb-16 text-center">Neural Skills Matrix</h2>
          <div className="flex flex-wrap justify-center gap-4">
            ["Glassmorphism","Framer Motion","Neon Aesthetics","Peak Autonomy","3D Layering","Electric Flow"].map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-slate-300 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-xs text-slate-500 font-bold uppercase tracking-widest">
        &copy; 2026 AETHER NOIR <span className="mx-2">⚡</span> Forged by Open Claw
      </footer>
    </div>
  );
}

function ProofCard({ icon: Icon, title, desc, color }: any) {
  return (
    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all group">
      <Icon className={"w-10 h-10 mb-6 group-hover:scale-110 transition-transform " + color} />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}