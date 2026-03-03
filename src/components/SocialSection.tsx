import { motion } from "framer-motion";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const socials = [
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/donnamassasalgados", color: "hover:text-[#E4405F]" },
  { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/donnamassasalgados", color: "hover:text-[#1877F2]" },
  { icon: MessageCircle, label: "WhatsApp", url: "https://wa.me/5547997642704", color: "hover:text-[#25D366]" },
];

const SocialSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Siga a Donna Massa
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Acompanhe nossas novidades, promoções e bastidores nas redes sociais!
          </p>

          <div className="flex justify-center gap-8">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center gap-2 text-muted-foreground transition-colors ${s.color}`}
              >
                <div className="w-16 h-16 rounded-full bg-card shadow-card flex items-center justify-center">
                  <s.icon size={28} />
                </div>
                <span className="text-sm font-semibold">{s.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialSection;
