import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import CategoriesSection from "@/components/CategoriesSection";
import { motion } from "framer-motion";

const Cardapio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nosso Cardápio
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Escolha uma categoria para ver todos os nossos produtos. Encomende pelo WhatsApp!
            </p>
          </motion.div>
        </div>
        <CategoriesSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Cardapio;
