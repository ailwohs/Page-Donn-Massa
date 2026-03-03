import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Heart } from "lucide-react";
import logoImg from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/5547997642704";

const Footer = () => {
  return (
    <footer className="bg-donna-brown-dark text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Desc */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logoImg} alt="Donna Massa" className="h-20 w-20 rounded-full object-cover" />
            <p className="font-display text-xl font-bold">Donna Massa</p>
            <p className="text-accent-foreground/80 text-sm text-center md:text-left">
              Salgados irresistíveis e doces que conquistam corações 💛
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-display text-lg font-semibold mb-2">Navegação</h3>
            <Link to="/" className="text-accent-foreground/80 hover:text-primary transition-colors text-sm">Início</Link>
            <Link to="/cardapio" className="text-accent-foreground/80 hover:text-primary transition-colors text-sm">Cardápio</Link>
            <Link to="/sobre" className="text-accent-foreground/80 hover:text-primary transition-colors text-sm">Sobre Nós</Link>
            <Link to="/contato" className="text-accent-foreground/80 hover:text-primary transition-colors text-sm">Contato</Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h3 className="font-display text-lg font-semibold mb-2">Contato</h3>
            <a href="tel:+5547997642704" className="flex items-center gap-2 text-accent-foreground/80 hover:text-primary transition-colors text-sm">
              <Phone size={16} /> (47) 99764-2704
            </a>
            <div className="flex items-center gap-2 text-accent-foreground/80 text-sm">
              <MapPin size={16} />
              <span>Rua Prefeito Baltazar Buschle, 233<br />Comasa, Joinville - SC</span>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/donnamassasalgados" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/80 hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.facebook.com/donnamassasalgados" target="_blank" rel="noopener noreferrer" className="text-accent-foreground/80 hover:text-primary transition-colors">
                <Facebook size={22} />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-accent-foreground/80 hover:text-primary transition-colors">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-12 pt-8 text-center">
          <p className="text-accent-foreground/60 text-sm flex items-center justify-center gap-1">
            Feito com <Heart size={14} className="text-donna-rose" /> Donna Massa © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
