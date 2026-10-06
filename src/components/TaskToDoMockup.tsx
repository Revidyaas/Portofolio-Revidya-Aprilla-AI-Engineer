import React, { useState } from 'react';
import { Database, Cloud, ExternalLink, RefreshCw, Globe } from 'lucide-react';

export const TaskToDoMockup: React.FC = () => {
  const [iframeKey, setIframeKey] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const LIVE_URL = "https://taskto-19c5f.web.app/";

  return (
    <div className="w-full neo-inset rounded-2xl p-3 sm:p-4 flex flex-col gap-3">
      {/* App Header & Browser Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg neo-surface flex items-center justify-center text-blue-600">
            <Globe className="w-3.5 h-3.5" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-800">
              TaskToDo
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
            <span className="text-[11px] text-emerald-700 font-medium">Live</span>
          </div>
        </div>

        {/* Live URL & External Link */}
        <div className="flex items-center gap-2 text-xs">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg neo-btn text-[11px] font-semibold text-blue-600 hover:text-blue-700 hover:scale-[1.02] transition-all"
            title="Open TaskToDo in new tab"
          >
            <span>taskto-19c5f.web.app</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>

          <button
            onClick={() => {
              setIframeLoaded(false);
              setIframeKey(k => k + 1);
            }}
            className="p-1.5 rounded-lg neo-btn text-slate-500 hover:text-slate-800 transition-colors"
            title="Reload live app preview"
            aria-label="Reload preview"
          >
            <RefreshCw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Content Area: Live Embedded Iframe */}
      <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] bg-white rounded-xl overflow-hidden shadow-inner border border-slate-200/80">
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-500 gap-2 z-10">
            <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono">Loading taskto-19c5f.web.app...</span>
          </div>
        )}

        <iframe
          key={iframeKey}
          src={LIVE_URL}
          title="TaskToDo Live Application"
          className="w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          onLoad={() => setIframeLoaded(true)}
        />

        {/* Quick External Link Overlay Banner at bottom */}
        <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center justify-between text-[11px] text-slate-300">
          <span className="truncate">Live Production Build on Firebase Hosting</span>
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold flex items-center gap-1 hover:underline shrink-0 ml-2"
          >
            <span>Full Screen</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Backend Architecture Note with direct link */}
      <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-1 border-t border-slate-200/50">
        <div className="flex items-center gap-1.5">
          <Database className="w-3 h-3 text-amber-500" />
          <span>Firebase Firestore</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Cloud className="w-3 h-3 text-blue-500" />
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 hover:underline flex items-center gap-1"
          >
            <span>Firebase Hosting</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
