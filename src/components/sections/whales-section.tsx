import { useReveal } from "@/hooks/use-reveal"

export function WhalesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl text-center">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Киты
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Особый статус</p>
        </div>
      </div>
    </section>
  )
}
