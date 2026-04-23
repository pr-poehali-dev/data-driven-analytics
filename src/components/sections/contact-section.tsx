import { useReveal } from "@/hooks/use-reveal"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div
        className={`text-center transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <p className="font-mono text-sm tracking-widest text-foreground/50 uppercase mb-4">Контакты</p>
        <p className="font-sans text-3xl font-light text-foreground/70">Скоро здесь будет что-то интересное</p>
      </div>
    </section>
  )
}
