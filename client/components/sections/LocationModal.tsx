import { useState } from "react";
import { Check, Copy, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const address = "Rua Cícero Dias, 1191, Recreio Campo Belo, Franca - SP, 14409-438";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+C%C3%ADcero+Dias+1191%2C+Franca+-+SP";
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.2960071169883!2d-47.38596981267665!3d-20.49868090247193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a68c167e6ab5%3A0xcb30a2b713e6495!2sR.%20C%C3%ADcero%20Dias%2C%201191%20-%20Parque%20Res.%20Nova%20Franca%2C%20Franca%20-%20SP%2C%2014409-438!5e0!3m2!1spt-BR!2sbr!4v1791244807214!5m2!1spt-BR!2sbr";

type LocationModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function LocationModal({ open, onOpenChange }: LocationModalProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto p-5 sm:p-6">
        <DialogHeader className="pr-8 text-left">
          <DialogTitle className="flex items-center gap-2 font-display text-2xl sm:text-3xl">
            <MapPin className="h-6 w-6 text-primary" />
            Local da cerimônia
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Confira o endereço e trace sua rota até o local da celebração.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-sm leading-6 text-muted-foreground sm:text-base">{address}</p>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Button variant="outline" onClick={copyAddress} className="w-full sm:w-auto">
              {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
              {copied ? "Endereço copiado!" : "Copiar endereço"}
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <a href={mapsUrl} target="_blank" rel="noreferrer">
                Abrir no Maps
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-lg border sm:aspect-video">
            <iframe
              title="Mapa do local"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapEmbedUrl}
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
