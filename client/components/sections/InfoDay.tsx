import { CalendarClock, MapPin, ParkingCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LocationModal from "./LocationModal";

function CalendarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const firstDay = new Date(2026, 11, 1).getDay(); // 0 = Quinta-feira
  const daysInMonth = 31;

  const calendarDays = [];

  // Dias vazios antes do primeiro dia
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Dias do mês
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border border-border rounded-lg shadow-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-center mb-6">Dezembro 2026</h3>

        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center font-semibold text-sm text-muted-foreground pb-2">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center rounded-lg text-sm
                ${day === null ? "" : "hover:bg-secondary"}
                ${day === 19 ? "bg-primary text-primary-foreground font-bold hover:bg-primary/90 ring-2 ring-primary ring-offset-2" : ""}
              `}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <p className="text-center text-sm">
            <span className="font-semibold">19 de dezembro de 2026</span> • 11:30
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Nosso grande dia! ❤️
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InfoDay() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash === "#local") setIsLocationOpen(true);
  }, [hash]);

  const handleLocationChange = (open: boolean) => {
    setIsLocationOpen(open);
    if (!open && hash === "#local") navigate("/", { replace: true });
  };

  return (
    <>
      <section id="info" className="section bg-secondary/50">
        <div className="container">
          <h2 className="section-title">Informações do Dia</h2>
          <p className="section-subtitle">Tudo que você precisa para o grande dia</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Card
              className="cursor-pointer transition hover:shadow-lg"
              onClick={() => setIsCalendarOpen(true)}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <CalendarClock className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Data & Horário</h3>
                    <p className="text-muted-foreground">19 de dezembro de 2026 • 11:30</p>
                    <p className="text-muted-foreground text-sm">• Clique para mais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <button
              type="button"
              className="text-left"
              onClick={() => setIsLocationOpen(true)}
              aria-haspopup="dialog"
              aria-label="Ver mapa e endereço do local"
            >
              <Card className="w-full transition hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-11 h-11 text-primary" />
                    <div>
                      <h3 className="font-semibold">Local</h3>
                      <p className="text-muted-foreground">
                        Rua Cícero Dias 1191, Recreio Campo Belo, Franca - SP, 14409-438
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </button>

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

      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />
      <LocationModal open={isLocationOpen} onOpenChange={handleLocationChange} />
    </>
  );
}
