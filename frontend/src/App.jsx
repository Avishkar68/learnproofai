import React, { useState } from 'react';
import { ShieldAlert, Lock, AlertTriangle, Mail, Check, Copy, ExternalLink, FileText } from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const ownerEmail = "kakadeavishkar84@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(ownerEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-rose-500 selection:text-white relative overflow-hidden font-sans">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-rose-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/40 backdrop-blur-md px-6 py-4 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center shadow-lg shadow-rose-950/50">
            <Lock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-white flex items-center gap-2">
              LearnProof AI
              <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-950 text-rose-400 border border-rose-800/60">
                Locked
              </span>
            </h1>
            <p className="text-xs text-slate-400">Competition Submission Archival</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Access Restricted</span>
        </div>
      </header>

      {/* Main Content Box */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="max-w-2xl w-full">
          {/* Main Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/80 backdrop-blur-xl relative">
            {/* Glowing Accent Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600 rounded-t-2xl" />

            {/* Shield Icon & Badge */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-2xl bg-rose-950/60 border border-rose-800/50 flex items-center justify-center text-rose-400 shadow-inner">
                  <ShieldAlert className="w-10 h-10 animate-pulse" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-full shadow">
                  <Lock className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 border border-rose-700/60 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>Restricted Codebase Notice</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                You cannot modify or view code without permission from repo owner.
              </h2>

              <p className="mt-3 text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
                This repository has been formatted as an official archival bundle for competition submission.
                All core algorithmic logic, AI pipelines, and internal infrastructure secrets are protected under proprietary licensing.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 bg-slate-950/60 border border-slate-800/90 rounded-xl p-4 text-xs">
              <div className="space-y-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Repository Owner:</span>
                <p className="font-semibold text-slate-200">Kakade Avishkar</p>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Platform:</span>
                <p className="font-semibold text-slate-200">LearnProof AI System</p>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Status:</span>
                <p className="font-semibold text-amber-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Locked / Protected Stubs
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-slate-400 uppercase font-mono tracking-wider">Notice ID:</span>
                <p className="font-mono text-slate-300">LP-COMP-ARCHIVE-2026</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`mailto:${ownerEmail}?subject=LearnProof%20AI%20Access%20Request`}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-950/60 transition active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Repo Owner</span>
              </a>

              <button
                onClick={handleCopy}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm flex items-center justify-center gap-2 border border-slate-700 transition active:scale-[0.98]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setShowTerms(!showTerms)}
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 text-sm flex items-center justify-center gap-2 border border-slate-800 transition"
              >
                <FileText className="w-4 h-4" />
                <span>{showTerms ? "Hide Terms" : "View License"}</span>
              </button>
            </div>

            {/* Expandable Terms Drawer */}
            {showTerms && (
              <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 space-y-2 bg-slate-950/40 p-4 rounded-xl">
                <p className="font-semibold text-slate-300">Legal Copyright Terms & Conditions:</p>
                <p>
                  1. <strong>Intellectual Property:</strong> All original source code, AI prompts, video processing pipelines, and user verification workflows belong exclusively to the repository owner.
                </p>
                <p>
                  2. <strong>No License to Clone or Modify:</strong> Possession of a copy, clone, or download of this repository does not grant any rights to modify, distribute, reproduce, or execute the underlying proprietary platform without prior written authorization.
                </p>
                <p>
                  3. <strong>Competition Evaluation:</strong> Authorized judges or evaluators requesting verification proofs should contact the repository author directly using the link above.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-900/30 px-6 py-4 text-center text-xs text-slate-400 relative z-10">
        <p>© 2026 Kakade Avishkar. All Rights Reserved. LearnProof AI is a registered intellectual property.</p>
      </footer>
    </div>
  );
}

