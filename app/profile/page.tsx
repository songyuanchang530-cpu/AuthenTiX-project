"use client"

import { AppShell } from "@/components/authentix/app-shell"
import { UserProfileBento } from "@/components/authentix/user-profile-bento"
import { useLanguage } from "@/components/authentix/language-context"

export default function ProfilePage() {
  const { t } = useLanguage()
  return (
    <AppShell activeItem="profile" pageTitle={t.editProfile}>
      <div className="flex flex-1 flex-col">
        <UserProfileBento />
      </div>
    </AppShell>
  )
}
