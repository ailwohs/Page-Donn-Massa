import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5547997642704?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido!";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1da851] text-[#fff] rounded-full p-4 shadow-elevated transition-all duration-300 hover:scale-110 animate-float"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppFloat;
