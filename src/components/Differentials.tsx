import { motion } from "framer-motion";
import { HandHeart, Gift, MessageCircle, Truck } from "lucide-react";

const items = [
  { icon: HandHeart, title: "Produção Artesanal", desc: "Cada produto é feito à mão com ingredientes selecionados" },
  { icon: Gift, title: "Encomendas Personalizadas", desc: "Monte o kit perfeito para sua festa ou evento" },
  { icon: MessageCircle, title: "Atendimento via WhatsApp", desc: "Praticidade e agilidade para fazer seu pedido" },
  { icon: Truck, title: "Entrega na Região", desc: "Receba seus salgados e doces no conforto de casa" },
];

const Differentials = () => {
  return (
    <section className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Diferenciais
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-donna-yellow-light flex items-center justify-center mx-auto mb-5">
                <item.icon size={28} className="text-donna-brown" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
