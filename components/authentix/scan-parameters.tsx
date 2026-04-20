"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown } from "lucide-react"
import { useLanguage } from "./language-context"

const getSubjects = (t: ReturnType<typeof import("./language-context").useLanguage>["t"]) => [
  t.allSubjects,
  t.subjectA,
  t.subjectB,
  `${t.faceA} #3`,
  `Voice #1`,
]

export function ScanParameters() {
  const { t } = useLanguage()
  const subjects = getSubjects(t)
  const [scanFullFile, setScanFullFile] = useState(true)
  const [startTime, setStartTime] = useState("00:00")
  const [endTime, setEndTime] = useState("03:45")
  const [sensitivity, setSensitivity] = useState(65)
  const [selectedSubject, setSelectedSubject] = useState(t.allSubjects)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 dark:!bg-[#161B26]/80 dark:!shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <h3 className="mb-6 text-sm font-semibold text-slate-800 dark:text-white">{t.scanParameters}</h3>

      <div className="flex flex-1 flex-col gap-5">
        {/* Scan Full File Checkbox */}
        <label className="flex cursor-pointer items-center gap-3">
          <Checkbox
            checked={scanFullFile}
            onCheckedChange={(checked) => setScanFullFile(checked as boolean)}
            className="border-slate-300 data-[state=checked]:border-[#0082FD] data-[state=checked]:bg-[#0082FD] dark:border-zinc-600"
          />
          <span className="text-sm text-slate-600 dark:text-zinc-300">{t.scanFullFile}</span>
        </label>

        {/* Time Window Selection */}
        <div className={cn("transition-opacity", scanFullFile && "opacity-50")}>
          <label className="mb-2 block text-xs uppercase tracking-wider text-slate-400">
            {t.timeWindowSelection}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              disabled={scanFullFile}
              placeholder="MM:SS"
              className="w-full rounded-xl bg-slate-100 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0082FD]/30 disabled:cursor-not-allowed dark:!bg-black/30 dark:!text-white dark:placeholder:!text-zinc-500"
            />
            <span className="text-slate-400">to</span>
            <input
              type="text"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              disabled={scanFullFile}
              placeholder="MM:SS"
              className="w-full rounded-xl bg-slate-100 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0082FD]/30 disabled:cursor-not-allowed dark:!bg-black/30 dark:!text-white dark:placeholder:!text-zinc-500"
            />
          </div>
        </div>

        {/* Subject Focus Dropdown */}
        <div className="relative">
          <label className="mb-2 block text-xs uppercase tracking-wider text-slate-400">
            {t.subjectFocus}
          </label>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex w-full items-center justify-between rounded-xl bg-slate-100 px-3 py-2.5 text-sm text-slate-800 transition-colors hover:bg-slate-200 dark:!bg-black/30 dark:!text-white dark:hover:!bg-white/10"
          >
            <span>{selectedSubject}</span>
            <ChevronDown
              className={cn(
                "size-4 text-slate-400 transition-transform",
                dropdownOpen && "rotate-180"
              )}
            />
          </button>
          
          {dropdownOpen && (
            <div className="absolute left-0 right-0 top-full z-20 mt-1 rounded-xl bg-white py-1 shadow-xl ring-1 ring-slate-100 dark:!bg-[#161B26] dark:!ring-transparent">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => {
                    setSelectedSubject(subject)
                    setDropdownOpen(false)
                  }}
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm transition-colors hover:bg-slate-100 dark:hover:bg-white/10",
                    selectedSubject === subject
                      ? "text-[#0082FD]"
                      : "text-slate-600 dark:text-zinc-300"
                  )}
                >
                  {subject}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Detection Sensitivity Slider */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <label className="text-xs uppercase tracking-wider text-slate-400">
              {t.detectionSensitivity}
            </label>
            <span className="text-xs font-semibold text-[#0082FD]">
              {sensitivity}%
            </span>
          </div>
          
          <div className="relative">
            {/* Track */}
            <div className="h-2 rounded-full bg-slate-200 dark:!bg-white/10">
              {/* Active track with gradient */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0082FD] to-[#A459B5]"
                style={{ width: `${sensitivity}%` }}
              />
            </div>
            
            {/* Slider input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sensitivity}
              onChange={(e) => setSensitivity(Number(e.target.value))}
              className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-[#0082FD]/30 [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-[#0082FD]"
            />
          </div>
          
          <div className="mt-2 flex justify-between text-[10px] text-slate-400">
            <span>{t.lowSensitivity}</span>
            <span>{t.mediumSensitivity}</span>
            <span>{t.highSensitivity}</span>
          </div>
        </div>

        {/* Primary Action Button */}
        <button className="mt-auto rounded-2xl bg-gradient-to-r from-[#0082FD] to-[#A459B5] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-[#0082FD]/25 transition-transform hover:scale-[0.98] active:scale-[0.96]">
          {t.authorizeDetailedScan}
        </button>
      </div>
    </div>
  )
}
