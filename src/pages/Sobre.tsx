import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { motion } from "framer-motion";
import { Heart, Star, Users } from "lucide-react";
import lojaImg from "@/assets/praia.png";

const values = [
  { icon: Heart, title: "Missão", text: "Levar sabor e carinho através de salgados e doces artesanais, feitos com os melhores ingredientes para encantar cada cliente." },
  { icon: Star, title: "Visão", text: "Ser referência em confeitaria artesanal em Joinville, reconhecida pela qualidade e pelo atendimento acolhedor." },
  { icon: Users, title: "Valores", text: "Qualidade, amor pelo que fazemos, respeito ao cliente, produção artesanal e compromisso com a excelência." },
];

const Sobre = () => {
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
              Sobre Nós
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img src={lojaImg} alt="Loja Donna Massa" className="w-full object-cover" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                A Donna Massa
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A Donna Massa nasceu do sonho de criar salgados e doces que vão muito além do sabor —
                cada produto carrega o carinho, a dedicação e a paixão pela confeitaria artesanal.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Localizada no bairro Comasa, em Joinville, nossa loja atende de segunda a sábado,
                oferecendo uma variedade incrível de coxinhas, pastéis, brigadeiros, bolos decorados
                e muito mais.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Trabalhamos com ingredientes selecionados e cada receita é preparada com muito amor,
                para que cada mordida seja uma experiência inesquecível. 💛
              </p>
            </motion.div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-card rounded-2xl p-8 text-center shadow-card"
              >
                <div className="w-14 h-14 rounded-full bg-donna-yellow-light flex items-center justify-center mx-auto mb-5">
                  <item.icon size={26} className="text-donna-brown" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Sobre;
