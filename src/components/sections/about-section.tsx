import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [showSoon, setShowSoon] = useState(false)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-8 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Киты
          </h2>
        </div>

        <div
          className={`transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <button
            onClick={() => { setShowSoon(true); setTimeout(() => setShowSoon(false), 4000) }}
            className="inline-flex items-center justify-center border border-foreground/30 bg-foreground/10 px-12 py-5 backdrop-blur-md transition-all duration-300 hover:bg-foreground/20 hover:border-foreground/60 hover:scale-105"
          >
            <span className="font-sans text-2xl font-bold tracking-widest text-foreground md:text-3xl">VIP</span>
          </button>

          {showSoon && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="font-mono text-4xl font-black tracking-widest text-foreground">SOON...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
