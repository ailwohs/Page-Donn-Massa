import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import heroSalgados from "@/assets/hero-salgados.webp";
import heroDoces from "@/assets/hero-doces.webp";
import heroBolos from "@/assets/hero-bolos.webp";
import heroKits from "@/assets/hero-kits.webp";

const slides = [
  { image: heroDoces, title: "Sabores que encantam", subtitle: "Doces artesanais feitos com amor e carinho" },
  { image: heroSalgados, title: "Salgados irresistíveis", subtitle: "Coxinhas, pastéis e muito mais fresquinhos" },
  { image: heroBolos, title: "Bolos para celebrar", subtitle: "Cada momento merece um bolo especial" },
  { image: heroKits, title: "Kits personalizados", subtitle: "Monte o kit perfeito para sua festa" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 max-w-2xl">
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display text-4xl md:text-6xl font-bold text-accent-foreground mb-4 drop-shadow-lg"
          >
            {slides[current].title}
          </motion.h1>
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-accent-foreground/90 text-lg md:text-xl mb-8 font-body drop-shadow"
          >
            {slides[current].subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/cardapio">Ver Cardápio</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm hover:bg-background/50 rounded-full p-2 text-accent-foreground transition-all" aria-label="Anterior">
        <ChevronLeft size={24} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/30 backdrop-blur-sm hover:bg-background/50 rounded-full p-2 text-accent-foreground transition-all" aria-label="Próximo">
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-primary w-8" : "bg-accent-foreground/40"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
