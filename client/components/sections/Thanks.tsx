export default function Thanks() {
  return (
    <section id="agradecimentos" className="section">
      <div className="container grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4 order-2 lg:order-1">
          <h2 className="section-title">Agradecimentos</h2>
          <div className="prose prose-neutral max-w-none prose-headings:font-display prose-p:text-muted-foreground">
            <p>Com o grande dia se aproximando, nossos corações transbordam de emoção ao imaginar-nos cercados por quem mais amamos. Cada confirmação aquece ainda mais essa alegria, nos lembrando que estamos rodeados de apoio e amor em cada passo. Deixamos aqui o nosso sincero e especial "muito obrigado" por fazer parte desse sonho, reservado a vocês que são tão preciosos em nossas vidas. Que essa celebração seja um reflexo do carinho que sentimos por cada um de vocês. Contamos com sua confirmação!</p>
            <p>O amor é ainda mais bonito quando compartilhado, e o nosso grande dia não seria o mesmo sem as pessoas que fazem parte da nossa história. Nossa cerimônia não é apenas um momento de celebração, mas a concretização de um sonho, um novo capítulo que queremos iniciar ao lado daqueles que amamos.</p>
            <p>Cada sorriso, abraço e olhar tornam essa data ainda mais especial, e é por isso que a sua presença significa tanto para nós. Contamos com você para testemunhar esse momento único, celebrar a vida e o amor ao nosso lado.</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <img className="h-64 w-full object-cover rounded-xl border" src="/pic1.jpeg" alt="Beatriz e Kenidy ao pôr do sol" />
          <img className="h-64 w-full object-cover rounded-xl border mt-8" src="/pic2.jpeg" alt="Momentos de carinho" />
          <img className="col-span-2 h-72 w-full object-cover rounded-xl border" src="/pic3.jpeg" alt="Amor em destaque" />
        </div>
      </div>
    </section>
  );
}
