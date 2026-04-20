"use client"

import { AppShell } from "@/components/authentix/app-shell"
import { AudioUpload } from "@/components/authentix/audio-upload"
import { AudioDetectionViewer } from "@/components/authentix/audio-detection-viewer"
import { useLanguage } from "@/components/authentix/language-context"

export default function AudioDetectPage() {
  const { t } = useLanguage()
  return (
    <AppShell activeItem="audio" pageTitle={t.audioFakeDetect}>
      <div className="grid min-h-[calc(100vh-140px)] grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Column - Upload & Actions */}
        <div className="flex h-full flex-col">
          <AudioUpload />
        </div>

        {/* Right Column - Detection Viewer */}
        <div className="flex h-full flex-col">
          <AudioDetectionViewer />
        </div>
      </div>
    </AppShell>
  )
}
