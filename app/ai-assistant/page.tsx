import { AppShell } from "@/components/authentix/app-shell"
import { AIAssistant } from "@/components/authentix/ai-assistant"

export default function AIAssistantPage() {
  return (
    <AppShell activeItem="" pageTitle="AI 助手">
      <div className="h-[calc(100vh-180px)] min-h-[500px]">
        <AIAssistant />
      </div>
    </AppShell>
  )
}
