"use client"

import { Scan, AlertTriangle, ShieldCheck } from "lucide-react"
import { useLanguage } from "./language-context"

export function HistoryStats() {
  const { t } = useLanguage()
  
  const stats = [
    {
      id: "totalScans",
      label: t.totalScans30Days,
      value: "1,248",
      icon: Scan,
      iconColor: "text-slate-500",
      iconBg: "bg-slate-100",
      valueColor: "text-slate-800",
    },
    {
      id: "aiInterventions",
      label: t.aiInterventionsDetected,
      value: "342",
      icon: AlertTriangle,
      iconColor: "text-red-500",
      iconBg: "bg-red-50",
      valueColor: "bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-transparent",
    },
    {
      id: "authenticityScore",
      label: t.averageAuthenticityScore,
      value: "78%",
      icon: ShieldCheck,
      iconColor: "text-cyan-600",
      iconBg: "bg-cyan-50",
      valueColor: "text-cyan-600",
    },
  ]
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 dark:bg-[#161B26]/80 dark:backdrop-blur-2xl dark:border dark:border-transparent dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="flex items-center gap-3">
            <div className={`rounded-lg p-2 ${stat.iconBg} dark:bg-[#0B0F19]`}>
              <stat.icon className={`size-5 ${stat.iconColor}`} />
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {stat.label}
            </span>
          </div>
          <p className={`mt-4 text-4xl font-semibold tracking-tight ${stat.valueColor}`}>
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  )
}
