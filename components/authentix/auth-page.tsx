"use client"

import { useState } from "react"
import { 
  Fingerprint, 
  ScanFace, 
  Check, 
  Eye, 
  EyeOff, 
  ChevronDown,
  MessageCircle,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Brand icons as simple colored circles with initials
const SocialIcon = ({ 
  name, 
  color, 
  initial 
}: { 
  name: string
  color: string
  initial: string 
}) => (
  <button
    className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:scale-110 hover:shadow-md dark:bg-slate-800 dark:text-slate-500"
    style={{ 
      ['--hover-bg' as string]: color 
    }}
    title={name}
    aria-label={`Sign in with ${name}`}
  >
    <span className="text-xs font-semibold">{initial}</span>
  </button>
)

// Lucide-based social icons
const LucideSocialIcon = ({ 
  Icon, 
  name 
}: { 
  Icon: React.ComponentType<{ className?: string }>
  name: string 
}) => (
  <button
    className="flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-all hover:scale-110 hover:bg-slate-200 hover:text-slate-600 hover:shadow-md dark:bg-slate-800 dark:text-slate-500 dark:hover:bg-slate-700 dark:hover:text-slate-300"
    title={name}
    aria-label={`Sign in with ${name}`}
  >
    <Icon className="size-5" />
  </button>
)

interface AuthPageProps {
  onAuthenticate?: () => void
}

export function AuthPage({ onAuthenticate }: AuthPageProps) {
  const [mode, setMode] = useState<"login" | "signup">("login")
  const [biometricsVerified, setBiometricsVerified] = useState(false)
  const [passwordMode, setPasswordMode] = useState<"password" | "sms">("password")
  const [showPassword, setShowPassword] = useState(false)
  const [keepSession, setKeepSession] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleBiometricTap = () => {
    // Simulate biometric verification
    setBiometricsVerified(!biometricsVerified)
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="bg-gradient-to-r from-[#0082FD] to-[#A459B5] bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            AuthentiX
          </h1>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            Next-Gen Media & Copyright Protection
          </p>
        </div>

        {/* Main Auth Card */}
        <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200/50 dark:bg-slate-900 dark:shadow-none md:p-8">
          {/* Login/Signup Toggle */}
          <div className="mb-6 flex items-center rounded-full bg-slate-100 p-1 dark:bg-slate-800">
            <button
              onClick={() => setMode("login")}
              className={cn(
                "flex-1 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200",
                mode === "login"
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              )}
            >
              Login
            </button>
            <button
              onClick={() => setMode("signup")}
              className={cn(
                "flex-1 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200",
                mode === "signup"
                  ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              )}
            >
              Sign Up
            </button>
          </div>

          {/* Biometric Zone */}
          <div className="mb-6 flex flex-col items-center">
            <div className="flex items-center gap-4">
              {/* Fingerprint Button */}
              <button
                onClick={handleBiometricTap}
                className={cn(
                  "flex size-16 items-center justify-center rounded-full border-2 transition-all duration-300",
                  biometricsVerified
                    ? "border-transparent bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                    : "border-slate-200 bg-white text-slate-400 hover:border-slate-300 hover:text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500 dark:hover:border-slate-600"
                )}
                aria-label="Fingerprint authentication"
              >
                {biometricsVerified ? (
                  <Check className="size-6 animate-in zoom-in-50 duration-300 ease-out" strokeWidth={3} />
                ) : (
                  <Fingerprint className="size-7" />
                )}
              </button>

              {/* Face Recognition Button */}
              <button
                onClick={handleBiometricTap}
                className={cn(
                  "flex size-16 items-center justify-center rounded-full border-2 transition-all duration-300",
                  biometricsVerified
                    ? "border-transparent bg-emerald-500 text-white shadow-md shadow-emerald-500/30"
                    : "border-slate-200 bg-white text-slate-400 hover:border-slate-300 hover:text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500 dark:hover:border-slate-600"
                )}
                aria-label="Face recognition authentication"
              >
                {biometricsVerified ? (
                  <Check className="size-6 animate-in zoom-in-50 duration-300 ease-out" strokeWidth={3} />
                ) : (
                  <ScanFace className="size-7" />
                )}
              </button>
            </div>

            {/* Biometric Status Text */}
            <p
              className={cn(
                "mt-3 flex items-center gap-1.5 text-sm font-medium transition-colors duration-300",
                biometricsVerified
                  ? "text-[#10B981]"
                  : "text-slate-400 dark:text-slate-500"
              )}
            >
              <span
                className={cn(
                  "size-2 rounded-full",
                  biometricsVerified ? "bg-[#10B981]" : "bg-slate-300 dark:bg-slate-600"
                )}
              />
              {biometricsVerified ? "Biometrics Verified" : "Tap to authenticate"}
            </p>
          </div>

          {/* Divider */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Or Traditional
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Email/Phone Input */}
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Email / Phone
            </label>
            <div className="relative">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="identity@authentix.io"
                className="h-12 w-full rounded-xl border border-transparent bg-[#F5F5F7] px-4 pr-10 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-[#0082FD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0082FD]/40 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#0082FD] dark:focus:bg-slate-800"
              />
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* Password/SMS Input */}
          <div className="mb-4">
            <div className="mb-1.5 flex items-center justify-between">
              <label className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Password
              </label>
              {/* Password/SMS Toggle */}
              <div className="flex items-center rounded-full bg-slate-100 p-0.5 dark:bg-slate-800">
                <button
                  onClick={() => setPasswordMode("password")}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-all",
                    passwordMode === "password"
                      ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                      : "text-slate-500 hover:text-slate-700 dark:text-slate-400"
                  )}
                >
                  Password
                </button>
                <button
                  onClick={() => setPasswordMode("sms")}
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-medium transition-all",
                    passwordMode === "sms"
                      ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                      : "text-slate-500 hover:text-slate-700 dark:text-slate-400"
                  )}
                >
                  SMS Code
                </button>
              </div>
            </div>
            <div className="relative">
              <input
                type={passwordMode === "password" && !showPassword ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={passwordMode === "password" ? "Enter your password" : "Enter SMS code"}
                className="h-12 w-full rounded-xl border border-transparent bg-[#F5F5F7] px-4 pr-10 text-sm text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-[#0082FD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0082FD]/40 dark:bg-slate-800/50 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#0082FD] dark:focus:bg-slate-800"
              />
              {passwordMode === "password" && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                </button>
              )}
            </div>
          </div>

          {/* Options Row */}
          <div className="mb-6 flex items-center justify-between">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                checked={keepSession}
                onChange={(e) => setKeepSession(e.target.checked)}
                className="size-4 rounded border-slate-300 text-[#0082FD] focus:ring-[#0082FD] dark:border-slate-600"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Keep Session</span>
            </label>
            <a
              href="#"
              className="text-sm font-medium text-[#0082FD] hover:underline"
            >
              Forgot Access?
            </a>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => onAuthenticate?.()}
            className="h-12 w-full rounded-full bg-gradient-to-r from-[#0082FD] to-[#A459B5] text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-purple-500/20 transition-all hover:scale-[0.98] hover:opacity-90 hover:shadow-xl active:scale-95"
          >
            Authorize & Enter
          </button>
        </div>

        {/* Quick Access SSO Footer */}
        <div className="mt-6">
          {/* Divider */}
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400 dark:text-slate-600">
              Quick Access
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>

          {/* Social Icons Grid - Row 1 */}
          <div className="mb-3 flex flex-wrap items-center justify-center gap-3">
            <SocialIcon name="WeChat" color="#07C160" initial="W" />
            <SocialIcon name="QQ" color="#12B7F5" initial="Q" />
            <SocialIcon name="Google" color="#4285F4" initial="G" />
            <SocialIcon name="Apple" color="#000000" initial="A" />
            <SocialIcon name="Microsoft" color="#00A4EF" initial="M" />
            <SocialIcon name="TikTok" color="#000000" initial="T" />
          </div>

          {/* Social Icons Grid - Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <LucideSocialIcon Icon={Facebook} name="Facebook" />
            <LucideSocialIcon Icon={Github} name="GitHub" />
            <LucideSocialIcon Icon={MessageCircle} name="WhatsApp" />
            <LucideSocialIcon Icon={Instagram} name="Instagram" />
            <LucideSocialIcon Icon={Twitter} name="Twitter" />
            <LucideSocialIcon Icon={Send} name="Telegram" />
          </div>
        </div>
      </div>
    </div>
  )
}
