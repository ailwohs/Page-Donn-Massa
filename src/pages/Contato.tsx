import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5547997642704?text=Olá!%20Gostaria%20de%20mais%20informações!";

const contactInfo = [
  { icon: Phone, label: "Telefone", value: "(47) 99764-2704", href: "tel:+5547997642704" },
  { icon: MessageCircle, label: "WhatsApp", value: "(47) 99764-2704", href: WHATSAPP_LINK },
  { icon: MapPin, label: "Endereço", value: "Rua Prefeito Baltazar Buschle, 233\nComasa, Joinville - SC, 89228-000" },
  { icon: Clock, label: "Horário", value: "Segunda a Sábado" },
];

const Contato = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contato
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Entre em contato conosco! Estamos prontos para atender você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-card">
                  <div className="w-12 h-12 rounded-full bg-donna-yellow-light flex items-center justify-center flex-shrink-0">
                    <item.icon size={22} className="text-donna-brown" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <Button variant="whatsapp" size="xl" asChild className="w-full">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="!size-5" />
                    Falar pelo WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-elevated h-[400px] lg:h-full min-h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.5!2d-48.8497!3d-26.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE3JzExLjAiUyA0OMKwNTAnNTkuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Donna Massa"
              />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contato;
