"use client"

import { useState } from "react"
import { User, Fingerprint, Sliders, Code, Bell, Copy, Plus } from "lucide-react"
import { useLanguage } from "./language-context"

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}

export function SettingsBento() {
  const { t } = useLanguage()
  const [biometricLogin, setBiometricLogin] = useState(true)
  const [sensitivity, setSensitivity] = useState<"low" | "standard" | "strict">("standard")
  const [emailReports, setEmailReports] = useState(true)
  const [realtimeWarnings, setRealtimeWarnings] = useState(true)
  const [workspaceName, setWorkspaceName] = useState("White Ocean AI")

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {/* Card 1: Workspace & Profile */}
      <div className="rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 dark:bg-[#161B26]/80 dark:backdrop-blur-2xl dark:border dark:border-transparent dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0082FD] to-[#A459B5]">
            <User className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{t.accountDetails}</h3>
            <p className="text-xs text-slate-400">{t.yourWorkspaceProfile}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-slate-400">
              {t.environmentName}
            </label>
            <input
              type="text"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              placeholder="White Ocean AI"
              className="w-full rounded-xl bg-slate-100 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0082FD]/30 dark:bg-black/30 dark:text-white dark:placeholder:text-slate-500 dark:focus:bg-black/40"
            />
          </div>
          <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-[#0B0F19]">
            <span className="text-sm text-slate-500">{t.currentRole}</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
              {t.admin}
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: Security & Passkeys */}
      <div className="rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 dark:bg-[#161B26]/80 dark:backdrop-blur-2xl dark:border dark:border-transparent dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/20">
            <Fingerprint className="size-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{t.easyLoginSecurity}</h3>
            <p className="text-xs text-slate-400">{t.quickAccessOptions}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-800 dark:text-white">{t.biometricLogin}</p>
              <p className="text-xs text-slate-400">{t.faceTouchId}</p>
            </div>
            <button
              onClick={() => setBiometricLogin(!biometricLogin)}
              className={cn(
                "relative h-8 w-14 rounded-full transition-all duration-200",
                biometricLogin
                  ? "bg-gradient-to-r from-[#0082FD] to-[#A459B5]"
                  : "bg-slate-300 dark:bg-white/20"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 size-6 rounded-full bg-white shadow-md transition-all duration-200",
                  biometricLogin ? "left-7" : "left-1"
                )}
              />
            </button>
          </div>

          <button className="w-full rounded-xl bg-slate-100 py-3 text-sm text-slate-600 transition-colors hover:bg-slate-200 hover:text-slate-800 dark:bg-[#0B0F19] dark:text-slate-300 dark:hover:bg-[#0B0F19]/80 dark:hover:text-white">
            {t.manageDevices}
          </button>
        </div>
      </div>

      {/* Card 3: Notifications & Alerts (moved here to be below Easy Login) */}
      <div className="rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 dark:bg-[#161B26]/80 dark:backdrop-blur-2xl dark:border dark:border-transparent dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-500/20">
            <Bell className="size-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{t.alertPreferences}</h3>
            <p className="text-xs text-slate-400">{t.notificationSettings}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-800 dark:text-white">{t.emailReports}</span>
            <button
              onClick={() => setEmailReports(!emailReports)}
              className={cn(
                "relative h-8 w-14 rounded-full transition-all duration-200",
                emailReports
                  ? "bg-gradient-to-r from-[#0082FD] to-[#A459B5]"
                  : "bg-slate-300 dark:bg-white/20"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 size-6 rounded-full bg-white shadow-md transition-all duration-200",
                  emailReports ? "left-7" : "left-1"
                )}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-800 dark:text-white">{t.realtimeWarnings}</span>
            <button
              onClick={() => setRealtimeWarnings(!realtimeWarnings)}
              className={cn(
                "relative h-8 w-14 rounded-full transition-all duration-200",
                realtimeWarnings
                  ? "bg-gradient-to-r from-[#0082FD] to-[#A459B5]"
                  : "bg-slate-300 dark:bg-white/20"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 size-6 rounded-full bg-white shadow-md transition-all duration-200",
                  realtimeWarnings ? "left-7" : "left-1"
                )}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Card 4: Detection Sensitivity */}
      <div className="rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 dark:bg-[#161B26]/80 dark:backdrop-blur-2xl dark:border dark:border-transparent dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0082FD] to-[#A459B5]">
            <Sliders className="size-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{t.aiScanSensitivity}</h3>
            <p className="text-xs text-slate-400">{t.detectionThresholdLevel}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {(["low", "standard", "strict"] as const).map((level) => (
            <button
              key={level}
              onClick={() => setSensitivity(level)}
              className={cn(
                "rounded-xl py-4 text-sm font-medium transition-all",
                sensitivity === level
                  ? "bg-gradient-to-r from-[#0082FD] to-[#A459B5] text-white shadow-lg shadow-[#0082FD]/20"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:bg-[#0B0F19] dark:text-slate-400 dark:hover:bg-[#0B0F19]/80 dark:hover:text-slate-200"
              )}
            >
              {level === "low" && t.low}
              {level === "standard" && t.standard}
              {level === "strict" && t.strict}
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-slate-400">
          {sensitivity === "low" && t.lowDesc}
          {sensitivity === "standard" && t.standardDesc}
          {sensitivity === "strict" && t.strictDesc}
        </p>
      </div>

      {/* Card 4: Developer & API (wider) */}
      <div className="rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 md:col-span-2 dark:bg-[#161B26]/80 dark:backdrop-blur-2xl dark:border dark:border-transparent dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/20">
            <Code className="size-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{t.developerKeys}</h3>
            <p className="text-xs text-slate-400">{t.apiAccessIntegrations}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4 dark:bg-[#0B0F19]">
            <div>
              <p className="text-sm font-medium text-slate-800 dark:text-white">Campus_Assistant_Dev</p>
              <p className="mt-1 font-mono text-xs text-slate-400">
                authx_live_••••••••••••8a9f
              </p>
            </div>
            <button className="flex size-10 items-center justify-center rounded-lg bg-slate-200 text-slate-500 transition-colors hover:bg-slate-300 hover:text-slate-700 dark:bg-black/40 dark:text-slate-400 dark:hover:bg-black/50 dark:hover:text-white">
              <Copy className="size-4" />
            </button>
          </div>

          <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#0082FD] transition-colors hover:bg-[#0082FD]/10">
            <Plus className="size-4" />
            {t.newKey}
          </button>
        </div>
      </div>

      </div>
  )
}
