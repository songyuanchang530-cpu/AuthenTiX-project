"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { AuthPage } from "./auth-page"

interface AuthContextType {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

export const useAuth = () => useContext(AuthContext)

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const session = localStorage.getItem("authentix-session")
    if (session === "authenticated") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const login = () => {
    localStorage.setItem("authentix-session", "authenticated")
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem("authentix-session")
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
