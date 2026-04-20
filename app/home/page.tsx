"use client"

import { AppShell } from "@/components/authentix/app-shell"
import { HomeDashboard } from "@/components/authentix/home-dashboard"
import { useLanguage } from "@/components/authentix/language-context"

export default function HomePage() {
  const { t } = useLanguage()
  return (
    <AppShell activeItem="home" pageTitle={t.home}>
      <div className="flex flex-1 flex-col">
        <HomeDashboard />
      </div>
    </AppShell>
  )
}
