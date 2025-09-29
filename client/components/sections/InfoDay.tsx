import { CalendarClock, MapPin, ParkingCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

function CalendarModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const firstDay = new Date(2026, 0, 1).getDay(); // 0 = Quinta-feira
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
        className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-center mb-6">Janeiro 2026</h3>

        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center font-semibold text-sm text-gray-600 pb-2">
              {day}
            </div>
          ))}

          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`
                aspect-square flex items-center justify-center rounded-lg text-sm
                ${day === null ? "" : "hover:bg-gray-100"}
                ${day === 24 ? "bg-primary text-white font-bold hover:bg-primary/90 ring-2 ring-primary ring-offset-2" : ""}
              `}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/10 rounded-lg">
          <p className="text-center text-sm">
            <span className="font-semibold">24 de Janeiro de 2026</span> • 10:30
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
                    <p className="text-muted-foreground">24 de janeiro de 2026 • 10:30</p>
                    <p className="text-muted-foreground text-sm">• Clique para mais</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Link to="/local">
              <Card className="transition hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-11 h-11 text-primary" />
                    <div>
                      <h3 className="font-semibold">Local</h3>
                      <p className="text-muted-foreground">
                        Espaço Safira — Alameda Dr.° Cleverson Campos, 210 - Cristais Paulista - SP
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>

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
    </>
  );
}