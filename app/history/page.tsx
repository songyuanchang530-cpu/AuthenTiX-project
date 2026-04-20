"use client"

import { AppShell } from "@/components/authentix/app-shell"
import { HistoryStats } from "@/components/authentix/history-stats"
import { HistoryList } from "@/components/authentix/history-list"
import { useLanguage } from "@/components/authentix/language-context"

export default function HistoryPage() {
  const { t } = useLanguage()
  return (
    <AppShell activeItem="history" pageTitle={t.detectionHistory}>
      <div className="flex flex-1 flex-col">
        {/* Stats Row */}
        <HistoryStats />
        
        {/* History List */}
        <div className="mt-6 flex-1">
          <HistoryList />
        </div>
      </div>
    </AppShell>
  )
}
