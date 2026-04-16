"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { AuthPage } from "./auth-page"

interface AuthContextType {
  isAuthenticated: boolean
  login: (keepSession?: boolean) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

// Force clear any stale sessions on module load (development safety)
if (typeof window !== "undefined") {
  // Check if session is from a previous browser session (not current tab)
  const sessionMarker = sessionStorage.getItem("authentix-active-tab")
  if (!sessionMarker) {
    // New tab/window - clear any stale localStorage session
    localStorage.removeItem("authentix-session")
  }
  // Mark this tab as active
  sessionStorage.setItem("authentix-active-tab", "true")
}

export const useAuth = () => useContext(AuthContext)

const AUTH_SESSION_KEY = "authentix-session"
const AUTH_SESSION_VALUE = "authenticated"

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  // CRITICAL: Always initialize to false - login wall is mandatory
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Check for existing session on mount - only restore if explicitly set
  useEffect(() => {
    const checkSession = () => {
      try {
        // Check localStorage first (persistent "Keep Session")
        const persistentSession = localStorage.getItem(AUTH_SESSION_KEY)
        // Then check sessionStorage (temporary session for this browser tab)
        const tempSession = sessionStorage.getItem(AUTH_SESSION_KEY)
        
        if (persistentSession === AUTH_SESSION_VALUE || tempSession === AUTH_SESSION_VALUE) {
          setIsAuthenticated(true)
        } else {
          // Clear any invalid/stale session data
          localStorage.removeItem(AUTH_SESSION_KEY)
          sessionStorage.removeItem(AUTH_SESSION_KEY)
          setIsAuthenticated(false)
        }
      } catch {
        // If storage is unavailable, stay unauthenticated
        setIsAuthenticated(false)
      }
      setIsLoading(false)
    }
    
    checkSession()
  }, [])

  const login = (keepSession: boolean = false) => {
    try {
      // Only persist to localStorage if user explicitly wants to keep session
      if (keepSession) {
        localStorage.setItem(AUTH_SESSION_KEY, AUTH_SESSION_VALUE)
      } else {
        // Otherwise, only use sessionStorage (cleared on browser close)
        sessionStorage.setItem(AUTH_SESSION_KEY, AUTH_SESSION_VALUE)
        localStorage.removeItem(AUTH_SESSION_KEY)
      }
    } catch {
      // Continue even if storage fails
    }
    setIsAuthenticated(true)
  }

  const logout = () => {
    try {
      localStorage.removeItem(AUTH_SESSION_KEY)
    } catch {
      // Continue even if localStorage fails
    }
    setIsAuthenticated(false)
  }

  // Show nothing while checking session to prevent flash
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#0082FD] border-t-transparent" />
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {isAuthenticated ? (
        <div className="animate-in fade-in duration-500">
          {children}
        </div>
      ) : (
        <div className="animate-in fade-in duration-500">
          <AuthPage onAuthenticate={login} />
        </div>
      )}
    </AuthContext.Provider>
  )
}
