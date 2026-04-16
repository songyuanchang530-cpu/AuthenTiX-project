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
  Facebook,
  Instagram,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Brand SVG Icons with native colors
const WeChatIcon = () => (
  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.3.3 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098c1.014.247 2.075.378 3.137.378.383 0 .759-.019 1.131-.051a5.16 5.16 0 01-.162-1.26c0-3.403 3.291-6.19 7.34-6.19.324 0 .641.019.957.049-.62-3.4-4.236-6.005-8.566-6.005zm-2.91 5.25a.936.936 0 110-1.872.936.936 0 010 1.872zm4.48 0a.936.936 0 110-1.872.936.936 0 010 1.872z"/>
    <path d="M23.965 14.552c0-3.155-3.082-5.715-6.885-5.715-3.803 0-6.885 2.56-6.885 5.715s3.082 5.715 6.885 5.715c.765 0 1.5-.097 2.19-.27a.67.67 0 01.558.075l1.46.858a.23.23 0 00.128.041.227.227 0 00.224-.226.445.445 0 00-.037-.166l-.3-1.14a.454.454 0 01.164-.514c1.424-1.058 2.498-2.65 2.498-4.373zm-8.888-1.248a.728.728 0 110-1.456.728.728 0 010 1.456zm4.007 0a.728.728 0 110-1.456.728.728 0 010 1.456z"/>
  </svg>
)

const QQIcon = () => (
  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.003 2c-2.265 0-6.29 1.364-6.29 7.325v1.195S3.55 14.96 3.55 17.474c0 .665.17 1.025.281 1.025.114 0 .902-.484 1.748-2.072 0 0-.18 2.197 1.904 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29.43 2.239 0 6.29.256 6.29-.43 0-.687-1.77-1.182-1.77-1.182 2.085-1.77 1.904-3.967 1.904-3.967.846 1.588 1.634 2.072 1.746 2.072.111 0 .283-.36.283-1.025 0-2.514-2.166-6.954-2.166-6.954V9.325C18.29 3.364 14.268 2 12.003 2z"/>
  </svg>
)

const GoogleIcon = () => (
  <svg className="size-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const AppleIcon = () => (
  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const MicrosoftIcon = () => (
  <svg className="size-5" viewBox="0 0 24 24">
    <path fill="#F25022" d="M1 1h10v10H1z"/>
    <path fill="#00A4EF" d="M13 1h10v10H13z"/>
    <path fill="#7FBA00" d="M1 13h10v10H1z"/>
    <path fill="#FFB900" d="M13 13h10v10H13z"/>
  </svg>
)

const TikTokIcon = () => (
  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
)

const XTwitterIcon = () => (
  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const TelegramIcon = () => (
  <svg className="size-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

// Social button wrapper with brand colors
const BrandSocialButton = ({ 
  children, 
  name,
  colorClass
}: { 
  children: React.ReactNode
  name: string
  colorClass: string
}) => (
  <button
    className={cn(
      "flex size-10 items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:opacity-80 active:scale-95",
      colorClass
    )}
    title={name}
    aria-label={`Sign in with ${name}`}
  >
    {children}
  </button>
)

interface AuthPageProps {
  onAuthenticate?: (keepSession?: boolean) => void
}

export function AuthPage({ onAuthenticate }: AuthPageProps) {
  const [mode, setMode] = useState<"login" | "signup">("login")
  // Biometric states: "idle" | "scanning-fingerprint" | "scanning-face" | "verified"
  const [biometricState, setBiometricState] = useState<"idle" | "scanning-fingerprint" | "scanning-face" | "verified">("idle")
  const [passwordMode, setPasswordMode] = useState<"password" | "sms">("password")
  const [showPassword, setShowPassword] = useState(false)
  const [keepSession, setKeepSession] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleBiometricTap = () => {
    if (biometricState !== "idle") {
      // Reset if already in progress or verified
      setBiometricState("idle")
      return
    }
    
    // Start automated sequential scan
    setBiometricState("scanning-fingerprint")
    
    // Step 2: After 800ms, start Face ID scan
    setTimeout(() => {
      setBiometricState("scanning-face")
      
      // Step 3: After another 800ms, both succeed
      setTimeout(() => {
        setBiometricState("verified")
      }, 800)
    }, 800)
  }

  const biometricsFullyVerified = biometricState === "verified"
  const isScanning = biometricState === "scanning-fingerprint" || biometricState === "scanning-face"

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto w-full max-w-[430px]">
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
                disabled={isScanning}
                className={cn(
                  "flex size-16 items-center justify-center rounded-full transition-all duration-200 ease-out",
                  biometricState === "scanning-fingerprint"
                    ? "border-2 border-emerald-200/50 bg-emerald-50/30 text-emerald-400/60 dark:border-emerald-400/20 dark:bg-emerald-950/20 dark:text-emerald-300/50"
                    : biometricState === "scanning-face" || biometricState === "verified"
                      ? "bg-emerald-400/15 backdrop-blur-md border border-white/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_12px_rgba(52,211,153,0.2)] dark:bg-emerald-500/10 dark:border-white/10 dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_12px_rgba(16,185,129,0.15)]"
                      : "border-2 border-slate-200 bg-white text-slate-400 hover:border-slate-300 hover:text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500 dark:hover:border-slate-600"
                )}
                aria-label="Start biometric authentication"
              >
                {biometricState === "scanning-face" || biometricState === "verified" ? (
                  <Check className="size-6 text-emerald-600 dark:text-emerald-400 animate-in zoom-in-75 fade-in duration-200 ease-out" strokeWidth={3} />
                ) : (
                  <Fingerprint className={cn("size-7 transition-transform duration-200", biometricState === "scanning-fingerprint" && "scale-95")} />
                )}
              </button>

              {/* Face Recognition Button */}
              <button
                onClick={handleBiometricTap}
                disabled={isScanning}
                className={cn(
                  "flex size-16 items-center justify-center rounded-full transition-all duration-200 ease-out",
                  biometricState === "scanning-face"
                    ? "border-2 border-emerald-200/50 bg-emerald-50/30 text-emerald-400/60 dark:border-emerald-400/20 dark:bg-emerald-950/20 dark:text-emerald-300/50"
                    : biometricState === "verified"
                      ? "bg-emerald-400/15 backdrop-blur-md border border-white/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),0_4px_12px_rgba(52,211,153,0.2)] dark:bg-emerald-500/10 dark:border-white/10 dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_4px_12px_rgba(16,185,129,0.15)]"
                      : "border-2 border-slate-200 bg-white text-slate-400 hover:border-slate-300 hover:text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500 dark:hover:border-slate-600"
                )}
                aria-label="Face recognition authentication"
              >
                {biometricState === "verified" ? (
                  <Check className="size-6 text-emerald-600 dark:text-emerald-400 animate-in zoom-in-75 fade-in duration-200 ease-out" strokeWidth={3} />
                ) : (
                  <ScanFace className={cn("size-7 transition-transform duration-200", biometricState === "scanning-face" && "scale-95")} />
                )}
              </button>
            </div>

            {/* Biometric Status Text */}
            <p
              className={cn(
                "mt-3 flex items-center gap-1.5 text-sm font-medium transition-colors duration-300",
                biometricsFullyVerified
                  ? "text-emerald-600 dark:text-emerald-400"
                  : isScanning
                    ? "text-emerald-500/50 dark:text-emerald-400/40"
                    : "text-slate-400 dark:text-slate-500"
              )}
            >
              <span
                className={cn(
                  "size-2 rounded-full transition-colors duration-300",
                  biometricsFullyVerified ? "bg-emerald-500" : isScanning ? "bg-emerald-300/50 animate-pulse dark:bg-emerald-400/40" : "bg-slate-300 dark:bg-slate-600"
                )}
              />
              {biometricsFullyVerified 
                ? "Biometrics Verified" 
                : biometricState === "scanning-fingerprint" 
                  ? "Scanning fingerprint..." 
                  : biometricState === "scanning-face"
                    ? "Scanning Face ID..."
                    : "Tap to authenticate"}
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

          {/* Input Fields with Perfect Symmetry */}
          <div className="mt-4 flex flex-col gap-4">
            {/* 1. Email/Phone Input */}
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

            {/* 2. Password/SMS Toggle Pill (Right-aligned to match input edges) */}
            <div className="flex w-full justify-end">
              <div className="inline-flex items-center rounded-full bg-slate-100 p-0.5 dark:bg-slate-800">
                <button
                  onClick={() => setPasswordMode("password")}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
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
                    "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
                    passwordMode === "sms"
                      ? "bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white"
                      : "text-slate-500 hover:text-slate-700 dark:text-slate-400"
                  )}
                >
                  SMS Code
                </button>
              </div>
            </div>

            {/* 3. Password/SMS Input */}
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
          <div className="mb-6 mt-6 flex items-center justify-between">
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
            onClick={() => onAuthenticate?.(keepSession)}
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

          {/* Social Icons Grid - 2 rows x 6 columns */}
          <div className="grid grid-cols-6 justify-items-center gap-3 sm:gap-4">
            {/* Row 1 */}
            <BrandSocialButton name="WeChat" colorClass="text-[#07C160]">
              <WeChatIcon />
            </BrandSocialButton>
            <BrandSocialButton name="QQ" colorClass="text-[#12B7F5]">
              <QQIcon />
            </BrandSocialButton>
            <BrandSocialButton name="Google" colorClass="text-[#4285F4]">
              <GoogleIcon />
            </BrandSocialButton>
            <BrandSocialButton name="Apple" colorClass="text-black dark:text-white">
              <AppleIcon />
            </BrandSocialButton>
            <BrandSocialButton name="Microsoft" colorClass="text-[#00A4EF]">
              <MicrosoftIcon />
            </BrandSocialButton>
            <BrandSocialButton name="TikTok" colorClass="text-[#FE2C55]">
              <TikTokIcon />
            </BrandSocialButton>
            
            {/* Row 2 */}
            <BrandSocialButton name="Facebook" colorClass="text-[#1877F2]">
              <Facebook className="size-5" />
            </BrandSocialButton>
            <BrandSocialButton name="GitHub" colorClass="text-[#333333] dark:text-white">
              <Github className="size-5" />
            </BrandSocialButton>
            <BrandSocialButton name="WhatsApp" colorClass="text-[#25D366]">
              <MessageCircle className="size-5" />
            </BrandSocialButton>
            <BrandSocialButton name="Instagram" colorClass="text-[#E4405F]">
              <Instagram className="size-5" />
            </BrandSocialButton>
            <BrandSocialButton name="X" colorClass="text-black dark:text-white">
              <XTwitterIcon />
            </BrandSocialButton>
            <BrandSocialButton name="Telegram" colorClass="text-[#2AABEE]">
              <TelegramIcon />
            </BrandSocialButton>
          </div>
        </div>
      </div>
    </div>
  )
}
