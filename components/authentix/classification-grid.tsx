"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  ScanFace,
  AudioWaveform,
  Mic,
  Fingerprint,
  Eye,
  Brain,
  Layers,
  ShieldAlert,
} from "lucide-react"
import { useLanguage } from "./language-context"

const getModules = (t: ReturnType<typeof import("./language-context").useLanguage>["t"]) => [
  {
    id: "face-swap",
    icon: ScanFace,
    label: t.faceSwapAnalysis,
    description: t.faceSwapDesc,
  },
  {
    id: "lip-sync",
    icon: AudioWaveform,
    label: t.lipSyncDetection,
    description: t.lipSyncDesc,
  },
  {
    id: "voice-clone",
    icon: Mic,
    label: t.voiceCloneCheck,
    description: t.voiceCloneDesc,
  },
  {
    id: "artifacts",
    icon: Layers,
    label: t.contextualArtifacts,
    description: t.contextualArtifactsDesc,
  },
  {
    id: "biometric",
    icon: Fingerprint,
    label: t.biometricMarkers,
    description: t.biometricMarkersDesc,
  },
  {
    id: "gaze",
    icon: Eye,
    label: t.gazeTracking,
    description: t.gazeTrackingDesc,
  },
  {
    id: "neural",
    icon: Brain,
    label: t.neuralSignature,
    description: t.neuralSignatureDesc,
  },
  {
    id: "threat",
    icon: ShieldAlert,
    label: t.threatAssessment,
    description: t.threatAssessmentDesc,
  },
]

export function ClassificationGrid() {
  const { t } = useLanguage()
  const modules = getModules(t)
  const [activeModules, setActiveModules] = useState<string[]>([
    "face-swap",
    "voice-clone",
  ])

  const toggleModule = (id: string) => {
    setActiveModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    )
  }

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 dark:bg-[#161B26]/80 dark:backdrop-blur-2xl dark:border dark:border-transparent dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800 dark:text-white">{t.analysisModules}</h3>
        <span className="text-xs text-slate-400">
          {activeModules.length} {t.selected}
        </span>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-3">
        {modules.map((module) => {
          const isActive = activeModules.includes(module.id)
          return (
            <button
              key={module.id}
              onClick={() => toggleModule(module.id)}
              className={cn(
                "group relative flex flex-col items-start rounded-2xl p-4 text-left transition-all duration-200",
                isActive
                  ? "bg-gradient-to-br from-[#0082FD]/5 to-[#A459B5]/5 ring-1 ring-[#0082FD]/20 dark:from-[#0082FD]/10 dark:to-[#A459B5]/10 dark:ring-[#0082FD]/30"
                  : "bg-slate-50 hover:bg-slate-100 dark:bg-[#0B0F19] dark:hover:bg-[#0B0F19]/80"
              )}
            >
              <div className="relative z-10 flex w-full items-start justify-between">
                <module.icon
                  className={cn(
                    "size-5 transition-colors",
                    isActive ? "text-[#0082FD]" : "text-slate-400 dark:text-zinc-500"
                  )}
                />
                <div
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    isActive ? "bg-[#0082FD]" : "bg-slate-300 dark:bg-zinc-700"
                  )}
                />
              </div>

              <h4
                className={cn(
                  "relative z-10 mt-3 text-xs font-medium transition-colors",
                  isActive ? "text-slate-800 dark:text-white" : "text-slate-600 dark:text-zinc-300"
                )}
              >
                {module.label}
              </h4>
              <p className="relative z-10 mt-1 text-[10px] leading-relaxed text-slate-400 dark:text-zinc-500">
                {module.description}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
