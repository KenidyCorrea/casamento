import { useState } from "react";
import { Button } from "../ui/button";
import { Gift, CreditCard, MapPin, Info } from "lucide-react";

const PIX_KEY = "kenidycorrea37@gmail.com";
const PIX_TITULAR = "Kenidy Jacintho Corrêa";
const PIX_INST = "MERCADO PAGO IP LTDA";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(PIX_KEY)}`;

export default function Gifts() {
  const [copied, setCopied] = useState(false);

  async function copyPix() {
    await navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <section id="presentes" className="section">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title">Presentes</h2>
          <p className="section-subtitle">Seu carinho é o que mais importa. Se desejar, veja as opções abaixo.</p>
        </div>

        {/* Layout em 2 colunas principais */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Lista de presentes - cartão destaque */}
          <div className="rounded-3xl border bg-accent/10 p-8">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center h-10 w-10 rounded-full bg-accent text-accent-foreground"><Gift className="w-5 h-5"/></div>
              <div className="flex-1">
                <h3 className="font-display text-2xl">Lista de presentes</h3>
                <p className="text-muted-foreground mt-1">Escolha um item com carinho em nossa lista.</p>
                <Button asChild size="lg" className="mt-5">
                  <a href="https://www.querodecasamento.com.br/lista-de-casamento/beatriz-kenidy" target="_blank" rel="noreferrer">Abrir lista</a>
                </Button>
              </div>
            </div>
          </div>

          {/* PIX - cartão com QR e detalhes */}
          <div className="rounded-3xl border p-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/2 w-full">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-full bg-accent text-accent-foreground"><CreditCard className="w-5 h-5"/></div>
                  <h3 className="font-display text-2xl">PIX</h3>
                </div>
                <img src={QR_URL} alt="QR Code PIX" className="mt-4 rounded-xl border w-full max-w-xs" />
              </div>
              <div className="md:w-1/2 w-full">
                <ul className="space-y-2 text-sm">
                  <li><span className="font-semibold">Chave:</span> <code className="break-all">{PIX_KEY}</code></li>
                  <li><span className="font-semibold">Para:</span> {PIX_TITULAR}</li>
                  <li><span className="font-semibold">Instituição:</span> {PIX_INST}</li>
                </ul>
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  <Button onClick={copyPix} variant="secondary">{copied ? "Copiado" : "Copiar chave"}</Button>
                </div>
                <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4 mt-0.5"/>
                  <p>Confirme os dados antes de concluir. Caso prefira, peça o QR atualizado pelo WhatsApp dos noivos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Presentes físicos */}
        <div className="mt-8 rounded-3xl border p-6">
          <div className="flex items-start gap-3">
            <div className="grid place-items-center h-10 w-10 rounded-full bg-accent text-accent-foreground"><MapPin className="w-5 h-5"/></div>
            <div>
              <h3 className="font-display text-xl">Presentes físicos</h3>
              <p className="text-muted-foreground text-sm">Se preferir enviar algo físico, utilize o endereço abaixo.</p>
              <address className="not-italic mt-2">Rua Bruno Cilurzo, 1550 — São Paulo, SP</address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
