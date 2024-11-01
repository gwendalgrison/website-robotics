"use client"

import { usePathname, useRouter, useParams } from 'next/navigation'
import { useState } from 'react'
import GB from 'country-flag-icons/react/3x2/GB'
import FR from 'country-flag-icons/react/3x2/FR'

const locales = {
  en: {
    name: 'English',
    Flag: GB
  },
  fr: {
    name: 'Français',
    Flag: FR
  }
}

export default function LocaleSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const [isOpen, setIsOpen] = useState(false)
  const currentLocale = params?.lang as string || 'en'

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/')
    segments[1] = locale
    const newPath = segments.join('/')
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-foreground/70 hover:text-foreground"
      >
        {(() => {
          const Flag = locales[currentLocale as keyof typeof locales].Flag;
          return <Flag className="w-5 h-5" />;
        })()}
        <span>{locales[currentLocale as keyof typeof locales].name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-card rounded-md shadow-lg ring-1 ring-foreground/5 z-50">
          {Object.entries(locales).map(([locale, { name, Flag }]) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                currentLocale === locale
                  ? 'bg-muted text-foreground'
                  : 'text-foreground/70 hover:bg-muted'
              } flex items-center space-x-2`}
            >
              <Flag className="w-5 h-5" />
              <span>{name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 