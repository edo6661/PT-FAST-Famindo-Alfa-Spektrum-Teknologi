import { MessageCircle } from 'lucide-react';

const FloatingWA = () => {
  const phoneNumber = "6281290003278";
  const message = "Hello FAST | PT. Famindo Alfa Spektrum Teknologi team, I am interested in consulting about Fire Safety solutions and Lithium-ion battery risk mitigation for my facility/company.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute right-16 bg-surface border border-border text-foreground px-4 py-2 rounded-btn text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-card">
        Consult via WhatsApp
      </div>
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWA;