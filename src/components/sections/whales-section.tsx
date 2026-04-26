import { useReveal } from "@/hooks/use-reveal"

export function WhalesSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl text-center relative">
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

        <div className="absolute bottom-0 right-0 text-right">
          <p className="font-mono text-xs text-foreground/40 mb-1">Контакты</p>
          <a
            href="mailto:poddomrust@gmail.com"
            className="font-mono text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
          >
            poddomrust@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}