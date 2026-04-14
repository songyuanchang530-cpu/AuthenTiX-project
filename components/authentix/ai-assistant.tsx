"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  PanelLeft,
  Edit,
  Sparkles,
  Video,
  Paperclip,
  ArrowUp,
  Zap,
  Search,
  Lightbulb,
} from "lucide-react"

export function AIAssistant() {
  return (
    <div className="relative flex h-full flex-col">
      {/* Top Header Area */}
      <div className="flex items-center justify-between px-4 py-3">
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          aria-label="Toggle history panel"
        >
          <PanelLeft className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-9 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          aria-label="New chat"
        >
          <Edit className="size-5" />
        </Button>
      </div>

      {/* Centered Empty State (Welcome Screen) */}
      <div className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center space-y-6 text-center">
          {/* File Context Pill */}
          <Badge
            variant="secondary"
            className="gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 dark:bg-slate-800/60 dark:text-slate-400"
          >
            <Video className="size-3.5" />
            正在分析: interview_ceo_2024.mp4
          </Badge>

          {/* Main Icon */}
          <div className="flex size-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0082FD]/10 to-[#A459B5]/20 shadow-lg shadow-purple-500/10 dark:from-[#0082FD]/20 dark:to-[#A459B5]/30">
            <Sparkles className="size-10 text-[#A459B5]" />
          </div>

          {/* Greeting */}
          <h1 className="text-2xl font-semibold text-slate-800 dark:text-white sm:text-3xl">
            我能帮您什么？
          </h1>

          {/* Subtitle */}
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            我正在分析 &apos;interview_ceo_2024.mp4&apos;，您可以问我关于此媒体的任何问题。
          </p>

          {/* Quick Actions Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <Button
              variant="ghost"
              className="h-9 gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-[#0082FD]/30 hover:bg-[#0082FD]/5 hover:text-[#0082FD] dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-[#0082FD]/40 dark:hover:bg-[#0082FD]/10 dark:hover:text-[#0082FD]"
            >
              <Zap className="size-4" />
              快捷扫描
            </Button>
            <Button
              variant="ghost"
              className="h-9 gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-[#A459B5]/30 hover:bg-[#A459B5]/5 hover:text-[#A459B5] dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-[#A459B5]/40 dark:hover:bg-[#A459B5]/10 dark:hover:text-[#A459B5]"
            >
              <Search className="size-4" />
              查找风险
            </Button>
            <Button
              variant="ghost"
              className="h-9 gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-indigo-400/30 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-indigo-400/40 dark:hover:bg-indigo-500/10 dark:hover:text-indigo-400"
            >
              <Lightbulb className="size-4" />
              解释结果
            </Button>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Input Area */}
      <div className="sticky bottom-0 px-4 pb-6 pt-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-2 shadow-lg shadow-slate-200/50 transition-all focus-within:border-[#0082FD]/40 focus-within:ring-2 focus-within:ring-[#0082FD]/20 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:focus-within:border-[#0082FD]/60 dark:focus-within:ring-[#0082FD]/30">
            {/* Attachment Button */}
            <Button
              variant="ghost"
              size="icon"
              className="size-9 shrink-0 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
              aria-label="Attach file"
            >
              <Paperclip className="size-5" />
            </Button>

            {/* Input Field */}
            <input
              type="text"
              placeholder="输入您的问题... (Enter 发送，Shift+Enter 换行)"
              className="min-w-0 flex-1 bg-transparent px-2 py-1 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-slate-500"
            />

            {/* Send Button */}
            <Button
              size="icon"
              className="size-9 shrink-0 rounded-full bg-gradient-to-r from-[#0082FD] to-[#A459B5] text-white shadow-md shadow-purple-500/20 transition-all hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/30"
              aria-label="Send message"
            >
              <ArrowUp className="size-5" />
            </Button>
          </div>
          {/* Hint text */}
          <p className="mt-2 text-center text-xs text-muted-foreground">
            AI 助手可能会出错，请核实重要信息。
          </p>
        </div>
      </div>
    </div>
  )
}
