import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-warm-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nossa História
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            A <strong className="text-foreground">Donna Massa</strong> nasceu do amor pela confeitaria artesanal.
            Cada salgado, cada doce e cada bolo é preparado com ingredientes selecionados e muito carinho,
            para transformar momentos simples em lembranças inesquecíveis.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            De Joinville para o seu coração, oferecemos sabores que encantam e aquecem a alma.
            Venha conhecer nossa loja ou faça sua encomenda personalizada!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
