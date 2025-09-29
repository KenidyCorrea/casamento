import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Gallery from "@/components/sections/Gallery";

export default function Local() {
  const [copied, setCopied] = useState(false);
  const address = "Alameda Dr.° Cleverson Campos, 210 - Recanto dos Cristais, Cristais Paulista - SP, 14460-000";

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="pt-16">
      <section className="relative h-[40vh] min-h-[320px]">
        <img
          src="/hero.jpeg"
          alt="Beatriz e Kenidy no local da cerimônia"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
        <div className="relative container h-full flex items-end pb-10">
          <div>
            <h1 className="font-display text-4xl md:text-5xl">Espaço Safira</h1>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">

              <p className="text-muted-foreground flex-1">
                {address}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={copyAddress}
                className="self-start md:self-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar endereço</>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="local" className="section">
        <div className="container grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="section-title">Mapa</h2>
            <p className="section-subtitle">Use o mapa interativo para traçar sua rota</p>
            <div className="mt-4 aspect-video overflow-hidden rounded-lg border">
              <iframe
                title="Mapa do local"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4434.515163067488!2d-47.417375899999996!3d-20.4476188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a14ef2c4c36b%3A0xa51962557f62607f!2s%C3%81rea%20de%20Lazer%20-%20Espa%C3%A7o%20Safira!5e1!3m2!1spt-BR!2sbr!4v1758937636953!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
          <Gallery />
        </div>
      </section>
    </div>
  );
}
