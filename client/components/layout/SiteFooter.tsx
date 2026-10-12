import { Mail, Phone, Instagram } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-secondary/60">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-display text-lg mb-2">Com carinho</h3>
          <p className="text-muted-foreground">Obrigado por fazer parte deste momento especial.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href="https://wa.me/5516991730717" target="_blank" rel="noreferrer">WhatsApp</a></li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href="mailto:juliasoaresrosaa1@gmail.com"> juliasoaresrosaa1@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Redes sociais</h4>
          <div className="flex flex-col">

            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary" href="https://www.instagram.com/wesleyfnovais/" target="_blank" rel="noreferrer"><Instagram className="w-4 h-4" /> @wesleyfnovais</a>
            <a className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary" href="https://www.instagram.com/juliarosasoares1/" target="_blank" rel="noreferrer"><Instagram className="w-4 h-4" /> @juliarosasoares1</a>

          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Júlia & Wesley</div>
    </footer>
  );
}
