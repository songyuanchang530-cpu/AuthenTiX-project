"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error for debugging
    console.error("[v0] Error boundary caught:", error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl dark:bg-slate-900">
        <div className="mb-6 flex items-center justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
            <svg
              className="size-8 text-red-600 dark:text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
        
        <h2 className="mb-2 text-center text-xl font-semibold text-slate-800 dark:text-white">
          Something went wrong
        </h2>
        <p className="mb-6 text-center text-sm text-slate-500 dark:text-slate-400">
          An unexpected error occurred. Please try again.
        </p>
        
        <button
          onClick={() => reset()}
          className="w-full rounded-xl bg-gradient-to-r from-[#0082FD] to-[#A459B5] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#0082FD]/25 transition-transform hover:scale-[0.98] active:scale-[0.96]"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
