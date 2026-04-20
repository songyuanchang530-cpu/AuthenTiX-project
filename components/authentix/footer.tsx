"use client"

import { useLanguage } from "./language-context"

export function Footer() {
  const { t, lang, toggleLang } = useLanguage()
  
  return (
    <footer className="mt-auto">
      {/* Gradient line separator */}
      <div className="mx-8 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="flex items-center justify-between px-8 py-6">
        {/* Language selector */}
        <button 
          onClick={toggleLang}
          className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 transition-colors hover:bg-slate-200 dark:bg-[#0B0F19] dark:hover:bg-[#0B0F19]/80"
        >
          <span className={`text-sm ${lang === "en" ? "font-medium text-slate-800 dark:text-white" : "text-slate-400"}`}>EN</span>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className={`text-sm ${lang === "zh" ? "font-medium text-slate-800 dark:text-white" : "text-slate-400"}`}>CN</span>
        </button>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
          >
            {t.privacyPolicy}
          </a>
          <a
            href="#"
            className="text-xs text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
          >
            {t.termsOfService}
          </a>
          <a
            href="#"
            className="text-xs text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-white"
          >
            {t.protocolDocs}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-400">AuthentiX Protocol &copy; 2026 - {t.allRightsReserved}</p>
      </div>
    </footer>
  )
}
