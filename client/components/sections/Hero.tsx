export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[560px] w-full">
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('/hero.jpeg')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-background/20 to-transparent" />

      <div className="relative container h-full flex flex-col items-center justify-end pb-24 text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-accent/90 text-accent-foreground px-4 py-1 text-xs tracking-wide uppercase">Save the date • 24.01.2026</p>
        <h1 className="mt-4 font-display text-5xl md:text-6xl tracking-tight">
          Beatriz & Kenidy
        </h1>
        <p className="mt-3 text-muted-foreground max-w-xl">Comemore conosco um dia de amor, alegria e novas memórias.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        </div>
      </div>
    </section>
  );
}
