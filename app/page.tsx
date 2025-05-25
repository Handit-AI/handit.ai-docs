'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Immediate redirect without delay
    router.replace('/overview')
  }, [router])

  // Also add a meta redirect as fallback
  useEffect(() => {
    // Fallback redirect using window.location if router fails
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.location.href = '/overview'
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div></div>
  )
} 