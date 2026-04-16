"use client"

import { useState } from "react"
import { 
  Fingerprint, 
  ScanFace, 
  Check, 
  Eye, 
  EyeOff, 
  ChevronDown,
} from "lucide-react"
import { cn } from "@/lib/utils"

// Official WeChat logo: Two overlapping chat bubbles with eye dots
const WeChatIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="white">
    {/* Large bubble (back-left) with two eye dots */}
    <path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66l-.7 2.1 2.75-1.1c.88.28 1.83.44 2.82.44.26 0 .52-.01.78-.03-.17-.53-.26-1.1-.26-1.68 0-2.97 2.92-5.39 6.52-5.39.23 0 .46.01.68.03C16.68 5.88 13.42 4 9.5 4zM6.75 8.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    {/* Small bubble (front-right) with two eye dots */}
    <path d="M16.67 10c-3.14 0-5.67 2.09-5.67 4.67 0 2.58 2.53 4.67 5.67 4.67.68 0 1.33-.1 1.95-.27l2.2.87-.56-1.68c1.4-.92 2.24-2.26 2.24-3.76 0-2.5-2.61-4.5-5.83-4.5zm-2.17 3.5a.83.83 0 1 1 0 1.67.83.83 0 0 1 0-1.67zm4 0a.83.83 0 1 1 0 1.67.83.83 0 0 1 0-1.67z"/>
  </svg>
)

// Official Tencent QQ Penguin - Using official brand asset image for pixel-perfect accuracy
// Features: plump black body, white belly, bright red scarf, yellow beak/feet, classic expressive eyes
const QQIcon = () => (
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Tencent_QQ.svg/1024px-Tencent_QQ.svg.png" 
    alt="QQ" 
    className="w-7 h-7 object-contain drop-shadow-sm" 
  />
)

const GoogleIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const AppleIconWhite = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="white">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const AppleIconBlack = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="black">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const MicrosoftIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24">
    <path fill="#F25022" d="M1 1h10v10H1z"/>
    <path fill="#00A4EF" d="M13 1h10v10H13z"/>
    <path fill="#7FBA00" d="M1 13h10v10H1z"/>
    <path fill="#FFB900" d="M13 13h10v10H13z"/>
  </svg>
)

// Official TikTok logo - High-fidelity music note with precise stereoscopic glitch effect
// Matches the official iOS App Store icon exactly: Cyan top-left, Red bottom-right, White center
const TikTokIcon = () => (
  <svg className="size-6 relative left-[1px] top-[1px]" viewBox="0 0 48 48">
    {/* Layer 1: Cyan (#25F4EE) - offset 2px top-left */}
    <path 
      fill="#25F4EE" 
      d="M34.145 13.696c-2.453-1.593-4.105-4.106-4.51-7.029h-5.763l-.007 27.16a5.47 5.47 0 01-5.466 5.282 5.47 5.47 0 01-2.574-.649 5.465 5.465 0 01-2.893-4.829c0-3.017 2.454-5.47 5.467-5.47.564 0 1.107.09 1.618.25v-5.854a11.239 11.239 0 00-1.618-.12c-6.19 0-11.22 5.03-11.22 11.22 0 3.867 1.963 7.28 4.945 9.293a11.16 11.16 0 006.275 1.927c6.19 0 11.22-5.03 11.22-11.22V20.39a16.13 16.13 0 009.447 3.038v-5.763a10.625 10.625 0 01-4.921-3.969z"
      style={{ transform: 'translate(-1.5px, -1.5px)' }}
    />
    {/* Layer 2: Red (#FE2C55) - offset 2px bottom-right */}
    <path 
      fill="#FE2C55" 
      d="M34.145 13.696c-2.453-1.593-4.105-4.106-4.51-7.029h-5.763l-.007 27.16a5.47 5.47 0 01-5.466 5.282 5.47 5.47 0 01-2.574-.649 5.465 5.465 0 01-2.893-4.829c0-3.017 2.454-5.47 5.467-5.47.564 0 1.107.09 1.618.25v-5.854a11.239 11.239 0 00-1.618-.12c-6.19 0-11.22 5.03-11.22 11.22 0 3.867 1.963 7.28 4.945 9.293a11.16 11.16 0 006.275 1.927c6.19 0 11.22-5.03 11.22-11.22V20.39a16.13 16.13 0 009.447 3.038v-5.763a10.625 10.625 0 01-4.921-3.969z"
      style={{ transform: 'translate(1.5px, 1.5px)' }}
    />
    {/* Layer 3: White - centered on top (primary shape) */}
    <path 
      fill="white" 
      d="M34.145 13.696c-2.453-1.593-4.105-4.106-4.51-7.029h-5.763l-.007 27.16a5.47 5.47 0 01-5.466 5.282 5.47 5.47 0 01-2.574-.649 5.465 5.465 0 01-2.893-4.829c0-3.017 2.454-5.47 5.467-5.47.564 0 1.107.09 1.618.25v-5.854a11.239 11.239 0 00-1.618-.12c-6.19 0-11.22 5.03-11.22 11.22 0 3.867 1.963 7.28 4.945 9.293a11.16 11.16 0 006.275 1.927c6.19 0 11.22-5.03 11.22-11.22V20.39a16.13 16.13 0 009.447 3.038v-5.763a10.625 10.625 0 01-4.921-3.969z"
    />
  </svg>
)

const FacebookIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const GitHubIconWhite = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="white">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const GitHubIconBlack = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="black">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

// Apple iOS Phone icon - classic receiver shape
const PhoneIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="white">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const XTwitterIconWhite = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const XTwitterIconBlack = () => (
  <svg className="size-6" viewBox="0 0 24 24" fill="black">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

// Telegram paper plane icon - optically centered with force nudge
const TelegramIcon = () => (
  <svg className="size-6 relative -left-[1px] top-[0.5px]" viewBox="0 0 24 24" fill="white">
    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
  </svg>
)

// iOS Enamel Badge Button - Perfect circle with Apple-quality shadows
const EnamelBadgeButton = ({ 
  children, 
  name,
  bgClass,
  isWhiteBg = false
}: { 
  children: React.ReactNode
  name: string
  bgClass: string
  isWhiteBg?: boolean
}) => (
  <button
    className={cn(
      "relative flex items-center justify-center w-[46px] h-[46px] sm:w-[50px] sm:h-[50px] overflow-hidden rounded-full transition-all duration-200",
      "hover:scale-105 active:scale-95",
      // Apple premium physical button shadows with inner highlight
      "shadow-[0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.5)]",
      "dark:shadow-[0_2px_8px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.1)]",
      // Border - subtle for colored backgrounds, visible for white backgrounds
      isWhiteBg 
        ? "border border-slate-200 dark:border-slate-600" 
        : "border border-black/5 dark:border-white/10",
      bgClass
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

          {/* Social Icons Grid - 2x6 iOS Enamel Badge Circles */}
          <div className="mx-auto w-full max-w-sm grid grid-cols-6 gap-y-4 gap-x-2 sm:gap-x-3 justify-items-center">
            {/* Row 1 - Per iOS reference images */}
            {/* WeChat: Green bg, white bubbles */}
            <EnamelBadgeButton name="WeChat" bgClass="bg-[#07C160]">
              <WeChatIcon />
            </EnamelBadgeButton>
            {/* QQ: WHITE bg, full-color penguin */}
            <EnamelBadgeButton name="QQ" bgClass="bg-white dark:bg-slate-100" isWhiteBg>
              <QQIcon />
            </EnamelBadgeButton>
            {/* Google: WHITE bg, multicolor G */}
            <EnamelBadgeButton name="Google" bgClass="bg-white dark:bg-slate-100" isWhiteBg>
              <GoogleIcon />
            </EnamelBadgeButton>
            {/* Apple: BLACK bg (white in dark mode), white/black logo */}
            <EnamelBadgeButton name="Apple" bgClass="bg-black dark:bg-white">
              <span className="dark:hidden"><AppleIconWhite /></span>
              <span className="hidden dark:block"><AppleIconBlack /></span>
            </EnamelBadgeButton>
            {/* Microsoft: WHITE bg, 4-color windows */}
            <EnamelBadgeButton name="Microsoft" bgClass="bg-white dark:bg-slate-100" isWhiteBg>
              <MicrosoftIcon />
            </EnamelBadgeButton>
            {/* TikTok: BLACK bg, multicolor note */}
            <EnamelBadgeButton name="TikTok" bgClass="bg-black">
              <TikTokIcon />
            </EnamelBadgeButton>
            
            {/* Row 2 - Per iOS reference images */}
            {/* Facebook: Blue bg, white f */}
            <EnamelBadgeButton name="Facebook" bgClass="bg-[#1877F2]">
              <FacebookIcon />
            </EnamelBadgeButton>
            {/* GitHub: WHITE bg (dark in dark mode), black/white cat */}
            <EnamelBadgeButton name="GitHub" bgClass="bg-white dark:bg-slate-800" isWhiteBg>
              <span className="dark:hidden"><GitHubIconBlack /></span>
              <span className="hidden dark:block"><GitHubIconWhite /></span>
            </EnamelBadgeButton>
            {/* Phone: Apple green gradient, white receiver */}
            <EnamelBadgeButton name="Phone" bgClass="bg-gradient-to-b from-[#65D36E] to-[#4CD964]">
              <PhoneIcon />
            </EnamelBadgeButton>
            {/* Instagram: Gradient, white camera */}
            <EnamelBadgeButton name="Instagram" bgClass="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]">
              <InstagramIcon />
            </EnamelBadgeButton>
            {/* X: BLACK bg (dark slate in dark mode), white X */}
            <EnamelBadgeButton name="X" bgClass="bg-black dark:bg-slate-900">
              <XTwitterIconWhite />
            </EnamelBadgeButton>
            {/* Telegram: Blue bg, white plane */}
            <EnamelBadgeButton name="Telegram" bgClass="bg-[#2AABEE]">
              <TelegramIcon />
            </EnamelBadgeButton>
          </div>
        </div>
      </div>
    </div>
  )
}
