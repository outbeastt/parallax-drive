"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, Code, Server, Zap, CheckCircle2, ChevronRight, Mail, MapPin } from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-amber-500 selection:text-black">
      
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="fixed inset-0 z-0 pointer-events-none bg-linear-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-4 h-4 bg-amber-500 rounded-sm"></div>
            PARALLAX<span className="text-amber-500">DRIVE</span>
          </div>
          <a href="#pricing" className="hidden md:inline-flex text-sm font-medium hover:text-amber-500 transition-colors">
            Pricing Model
          </a>
          <a href="#contact" className="bg-white text-black px-5 py-2 text-sm font-bold rounded hover:bg-amber-500 hover:text-white transition-all">
            Start Project
          </a>
        </div>
      </nav>

      <div className="relative z-10">
        
        <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-amber-500 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Accepting New Clients
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl">
            Premium Web Infrastructure. <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-amber-500">Zero Upfront Agony.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
            We build, host, and maintain high-performance websites for local businesses. 
            No massive build fees. No monthly surprises. Just a flat, transparent annual subscription.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#pricing" className="bg-amber-500 text-black px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
              View The WaaS Model <ChevronRight size={20} />
            </a>
            <a href="#contact" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center">
              Contact Us
            </a>
          </div>
        </section>

        <section className="py-20 px-6 bg-black/40 border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl bg-linear-to-b from-white/5 to-transparent border border-white/10 hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Modern Stack</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Built on cutting-edge frameworks (React/Next.js) for lightning-fast load times. Your business deserves better than clunky, outdated page builders.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-linear-to-b from-white/5 to-transparent border border-white/10 hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <Server size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Hosting</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We deploy your site on global edge networks. Fast, secure, and incredibly reliable. We handle the servers so you can run your business.
                </p>
              </div>

              <div className="p-8 rounded-xl bg-linear-to-b from-white/5 to-transparent border border-white/10 hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center mb-6">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Zero Hassle</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  From domain registration to DNS setup and SSL certificates, we handle the entire technical pipeline. It just works.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-32 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">The Complete Package</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Everything you need for a professional digital presence, wrapped into one simple, predictable annual fee.</p>
          </div>

          <div className="max-w-lg mx-auto bg-linear-to-b from-[#111] to-[#0a0a0a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-amber-500/5 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent"></div>
            
            <div className="p-10">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Business WaaS</h3>
                  <p className="text-amber-500 text-sm font-medium mt-1">Website as a Service</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-extrabold text-white">R2,500</div>
                  <div className="text-gray-500 text-sm mt-1">/ per year</div>
                </div>
              </div>

              <div className="space-y-4 mb-10 mt-8">
                {[
                  "Custom Multi-page or Single-page website",
                  "High-performance Edge Hosting included",
                  "Mobile-responsive modern design",
                  "Domain connection & SSL Certificate",
                  "Basic text & image updates throughout the year",
                  "SEO-optimized code structure"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="block w-full text-center bg-white text-black py-4 rounded font-bold hover:bg-amber-500 transition-colors">
                Secure Your Spot
              </a>
              <p className="text-center text-xs text-gray-500 mt-4">
                No hidden setup fees. Custom structural changes billed separately.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6 bg-amber-500 text-black">
          <div className="max-w-4xl mx-auto text-center">
            <Rocket size={48} className="mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to launch?</h2>
            <p className="text-xl font-medium mb-10 opacity-80">
              Stop fighting with DIY builders. Let Parallax Drive build your foundation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@parallaxdrive.xyz" className="bg-black text-white px-8 py-4 rounded font-bold text-lg hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                <Mail size={20} /> Email hello@parallaxdrive.xyz
              </a>
            </div>
          </div>
        </section>

        <footer className="py-8 px-6 border-t border-white/5 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4">
          <div className="flex items-center gap-2 font-bold text-gray-400 tracking-tighter">
            <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
            PARALLAXDRIVE
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} /> South Africa
          </div>
          <div>
            &copy; {new Date().getFullYear()} Parallax Drive. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}