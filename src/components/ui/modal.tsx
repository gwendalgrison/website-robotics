"use client"

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
    className?: string
    clickPosition: { x: number, y: number }
}

export function Modal({ isOpen, onClose, children, className, clickPosition }: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null)
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    // Get window size
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0

    const modalStyle = {
        '--origin-x': `${clickPosition.x - windowWidth/2}px`,
        '--origin-y': `${clickPosition.y - windowHeight/2}px`,
    } as React.CSSProperties

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={(e) => {
                if (e.target === overlayRef.current) onClose()
            }}
        >
            <div
                ref={modalRef}
                style={modalStyle}
                className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg animate-modal-in"
            >
                <div className={cn("relative", className)}>
                    <button
                        onClick={onClose}
                        className="absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        <span className="sr-only">Close</span>
                    </button>
                    {children}
                </div>
            </div>
        </div>
    )
} 