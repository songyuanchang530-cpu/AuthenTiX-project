"use client"

import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-200 dark:bg-slate-700",
        className
      )}
    />
  )
}

export function CardSkeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-white p-6 shadow-xl shadow-indigo-100/50 dark:bg-[#161B26]/80 dark:backdrop-blur-2xl dark:border dark:border-white/10 dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      <div className="space-y-4">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-32 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>
    </div>
  )
}

export function PageLoadingSkeleton() {
  return (
    <div className="grid flex-1 grid-cols-2 items-stretch gap-4 animate-in fade-in duration-300">
      <CardSkeleton className="min-h-[360px]" />
      <CardSkeleton className="min-h-[360px]" />
      <CardSkeleton className="min-h-[340px]" />
      <CardSkeleton className="min-h-[340px]" />
    </div>
  )
}

export function FullPageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#0082FD] border-t-transparent" />
        <p className="text-sm text-slate-500 dark:text-slate-400">Loading...</p>
      </div>
    </div>
  )
}
