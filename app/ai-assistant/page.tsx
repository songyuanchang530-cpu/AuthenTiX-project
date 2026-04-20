"use client"

import { AppShell } from "@/components/authentix/app-shell"
import { AIAssistant } from "@/components/authentix/ai-assistant"
import { useLanguage } from "@/components/authentix/language-context"

export default function AIAssistantPage() {
  const { t } = useLanguage()
  return (
    <AppShell activeItem="" pageTitle={t.aiAssistant}>
      <AIAssistant />
    </AppShell>
  )
}
