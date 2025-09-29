import { CalendarClock, MapPin, ParkingCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function InfoDay() {
  return (
    <section id="info" className="section bg-secondary/50">
      <div className="container">
        <h2 className="section-title">Informações do Dia</h2>
        <p className="section-subtitle">Tudo que você precisa para o grande dia</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <CalendarClock className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Data & Horário</h3>
                  <p className="text-muted-foreground">24 de janeiro de 2026 • 10:30</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Local</h3>
                  <p className="text-muted-foreground">Espaço Safira — Alameda Dr.° Cleverson Campos, 210 - Cristais Paulista - SP</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <ParkingCircle className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-semibold">Estacionamento</h3>
                  <p className="text-muted-foreground">Gratuito no local para convidados.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
