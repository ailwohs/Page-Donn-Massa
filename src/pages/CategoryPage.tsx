import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { categories } from "@/data/categories";

const WHATSAPP_LINK = "https://wa.me/5547997642704?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido!";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Categoria não encontrada</h1>
          <Button asChild variant="warm">
            <Link to="/cardapio">Voltar ao Cardápio</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const openNext = () => setLightbox((prev) => prev !== null ? (prev + 1) % category.gallery.length : null);
  const openPrev = () => setLightbox((prev) => prev !== null ? (prev - 1 + category.gallery.length) % category.gallery.length : null);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back link */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
            <Link to="/cardapio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-semibold">
              <ArrowLeft size={18} /> Voltar ao Cardápio
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {category.name}
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{category.description}</p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {category.gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group cursor-pointer"
                onClick={() => setLightbox(i)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-card aspect-square">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-donna-brown-dark/0 group-hover:bg-donna-brown-dark/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-accent-foreground font-display font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg drop-shadow-lg">
                      {item.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4 text-lg">Gostou? Faça sua encomenda!</p>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="!size-5" />
                Pedir pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-donna-brown-dark/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 text-accent-foreground/80 hover:text-accent-foreground transition-colors"
            >
              <X size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); openPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-foreground/60 hover:text-accent-foreground transition-colors"
            >
              <ChevronLeft size={40} />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={category.gallery[lightbox].src}
              alt={category.gallery[lightbox].title}
              className="max-w-full max-h-[80vh] rounded-2xl shadow-elevated object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); openNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-foreground/60 hover:text-accent-foreground transition-colors"
            >
              <ChevronRight size={40} />
            </button>

            <div className="absolute bottom-6 text-center text-accent-foreground">
              <p className="font-display text-lg font-semibold">{category.gallery[lightbox].title}</p>
              <p className="text-sm text-accent-foreground/60">{lightbox + 1} / {category.gallery.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default CategoryPage;
