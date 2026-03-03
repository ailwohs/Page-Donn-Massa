import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { categories } from "@/data/categories";

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background" id="cardapio">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Explore nossas categorias e veja tudo que preparamos com carinho para você
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/cardapio/${cat.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-card aspect-square">
                  {/* Image with hover zoom + rotate */}
                  <img
                    src={cat.coverImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-donna-brown-dark/80 via-donna-brown-dark/20 to-transparent transition-all duration-300 group-hover:from-donna-brown-dark/90" />
                  {/* Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 pb-6">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-accent-foreground drop-shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                      {cat.name}
                    </h3>
                    <p className="text-accent-foreground/0 group-hover:text-accent-foreground/80 text-sm mt-1 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      Ver todos →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
