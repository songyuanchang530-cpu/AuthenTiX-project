"use client"

import { AppShell } from "@/components/authentix/app-shell"
import { TextAnalysisBento } from "@/components/authentix/text-analysis-bento"
import { useLanguage } from "@/components/authentix/language-context"

export default function TextDetectPage() {
  const { t } = useLanguage()
  return (
    <AppShell activeItem="text" pageTitle={t.textFakeDetect}>
      <div className="flex flex-1 flex-col">
        <TextAnalysisBento />
      </div>
    </AppShell>
  )
}
