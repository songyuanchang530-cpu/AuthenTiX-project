"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Home,
  Image,
  Video,
  AudioLines,
  FileText,
  History,
  Settings,
  MoreHorizontal,
} from "lucide-react"
import { useLanguage } from "./language-context"

const getNavItems = (t: ReturnType<typeof import("./language-context").useLanguage>["t"]) => [
  { icon: Home, label: t.home, id: "home", href: "/home" },
  { icon: Image, label: t.imageFakeDetect, id: "image", href: "/image-detect" },
  { icon: Video, label: t.videoFakeDetect, id: "video", href: "/" },
  { icon: AudioLines, label: t.audioFakeDetect, id: "audio", href: "/audio-detect" },
  { icon: FileText, label: t.textFakeDetect, id: "text", href: "/text-detect" },
  { icon: History, label: t.detectionHistory, id: "history", href: "/history" },
  { icon: Settings, label: t.protocolSettings, id: "settings", href: "/settings" },
]

interface SidebarProps {
  activeItem?: string
  onItemClick?: (id: string) => void
}

export function Sidebar({ activeItem = "video", onItemClick }: SidebarProps) {
  const { t } = useLanguage()
  const navItems = getNavItems(t)
  
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-slate-200 bg-white/90 backdrop-blur-md dark:!border-transparent dark:!bg-[#0f0f1a]/90" translate="no">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-8">
        <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
          <span className="text-lg font-bold text-white">A</span>
        </div>
        <span className="bg-gradient-to-br from-indigo-600 to-purple-600 bg-clip-text text-xl font-bold tracking-tight text-transparent">
          AuthentiX
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 px-3">
        {navItems.map((item) => {
          const isActive = item.id === activeItem
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => onItemClick?.(item.id)}
              className={cn(
                "group flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-indigo-50 shadow-sm dark:!bg-[#0082FD]/20"
                  : "hover:bg-slate-100 dark:hover:!bg-white/5"
              )}
            >
              <item.icon
                className={cn(
                  "size-5 transition-colors",
                  isActive
                    ? "text-indigo-600 dark:!text-[#0082FD]"
                    : "text-slate-400 group-hover:text-slate-600 dark:!text-slate-500 dark:group-hover:!text-slate-300"
                )}
              />
              <span
                className={cn(
                  "transition-colors",
                  isActive
                    ? "text-indigo-700 font-semibold dark:!text-[#0082FD]"
                    : "text-slate-600 group-hover:text-slate-800 dark:!text-slate-400 dark:group-hover:!text-slate-200"
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto px-4 pb-4">
        {/* Protocol Status */}
        <div className="mb-4 rounded-xl bg-slate-50 p-4 dark:!bg-black/20">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            {t.protocolStatus}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <div className="size-2 animate-pulse rounded-full bg-emerald-500" />
            <span className="text-sm text-slate-700 dark:!text-slate-300">{t.activeSecure}</span>
          </div>
        </div>

        {/* Account Block - ChatGPT Style */}
        <Link
          href="/profile"
          className="flex w-full items-center gap-3 rounded-xl p-3 transition-colors hover:bg-slate-100 dark:hover:bg-white/5"
        >
          {/* Avatar */}
          <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">
            SY
          </div>
          {/* Info */}
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-medium text-slate-800 dark:!text-white">Song Yuanchang</span>
            <span className="text-xs text-slate-500">{t.personalAccount}</span>
          </div>
          {/* More Icon */}
          <MoreHorizontal className="size-4 text-slate-400" />
        </Link>
      </div>
    </aside>
  )
}
