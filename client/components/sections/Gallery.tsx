import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const photos = [
  "/2024-11-13.jpg",
  "/2024-11-131.jpg",
  "/2024-11-132.jpg",
  "/2024-11-133.jpg"
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => prev === 0 ? photos.length - 1 : prev - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="galeria" className="section">
      <h2 className="section-title">Galeria de Fotos</h2>
      <p className="section-subtitle">Momentos especiais capturados</p>

      <div className="mt-8 relative max-w-2xl mx-auto">
        {/* Container da imagem */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <img
            src={photos[currentIndex]}
            alt={`Foto do casal ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Overlay gradiente para melhor contraste dos controles */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

          {/* Botões de navegação */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm"
            onClick={goToPrevious}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm"
            onClick={goToNext}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-4">
          {photos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        {/* Contador */}
        <div className="text-center mt-2 text-sm text-muted-foreground">
          {currentIndex + 1} de {photos.length}
        </div>
      </div>
    </section>
  );
}