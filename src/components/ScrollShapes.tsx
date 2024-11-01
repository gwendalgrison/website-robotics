"use client"

import { useScrollPosition } from '@/hooks/useScrollPosition'

export default function ScrollShapes() {
    const scrollY = useScrollPosition()

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Large shapes */}
            <div 
                className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl transition-transform duration-300 ease-out"
                style={{
                    top: '10%',
                    right: '-10rem',
                    transform: `translate(${scrollY * -0.1}px, ${scrollY * 0.05}px)`
                }}
            />
            <div 
                className="absolute w-80 h-80 bg-accent/15 rounded-[4rem] rotate-45 blur-2xl transition-transform duration-300 ease-out"
                style={{
                    top: '40%',
                    left: '5%',
                    transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.04}px) rotate(${45 + scrollY * 0.02}deg)`
                }}
            />
            <div 
                className="absolute w-64 h-64 bg-secondary/20 rounded-full blur-2xl transition-transform duration-300 ease-out"
                style={{
                    top: '70%',
                    right: '15%',
                    transform: `translate(${scrollY * -0.06}px, ${scrollY * -0.04}px)`
                }}
            />

            {/* Medium shapes */}
            <div 
                className="absolute w-48 h-48 bg-accent/10 rounded-3xl -rotate-12 blur-xl transition-transform duration-300 ease-out"
                style={{
                    top: '25%',
                    left: '25%',
                    transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.07}px) rotate(${-12 + scrollY * -0.03}deg)`
                }}
            />
            <div 
                className="absolute w-40 h-40 bg-primary/15 rounded-[2rem] rotate-45 blur-xl transition-transform duration-300 ease-out"
                style={{
                    top: '60%',
                    left: '40%',
                    transform: `translate(${scrollY * 0.05}px, ${scrollY * -0.03}px) rotate(${45 + scrollY * 0.01}deg)`
                }}
            />

            {/* Small shapes */}
            <div 
                className="absolute w-24 h-24 bg-secondary/25 rounded-full blur-lg transition-transform duration-300 ease-out"
                style={{
                    top: '15%',
                    left: '60%',
                    transform: `translate(${scrollY * -0.08}px, ${scrollY * 0.02}px)`
                }}
            />
            <div 
                className="absolute w-32 h-32 bg-accent/20 rounded-2xl rotate-12 blur-lg transition-transform duration-300 ease-out"
                style={{
                    top: '45%',
                    right: '30%',
                    transform: `translate(${scrollY * 0.04}px, ${scrollY * 0.06}px) rotate(${12 + scrollY * -0.02}deg)`
                }}
            />
            <div 
                className="absolute w-20 h-20 bg-primary/25 rounded-full blur-lg transition-transform duration-300 ease-out"
                style={{
                    top: '80%',
                    left: '20%',
                    transform: `translate(${scrollY * -0.07}px, ${scrollY * -0.05}px)`
                }}
            />
            <div 
                className="absolute w-28 h-28 bg-secondary/15 rounded-[1.5rem] -rotate-12 blur-lg transition-transform duration-300 ease-out"
                style={{
                    top: '85%',
                    right: '40%',
                    transform: `translate(${scrollY * 0.06}px, ${scrollY * -0.04}px) rotate(${-12 + scrollY * 0.03}deg)`
                }}
            />

            {/* Base gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20em,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary/40 to-transparent opacity-50" />
        </div>
    )
} 