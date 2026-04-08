import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FloatingWA = () => {
  const { t } = useTranslation();

  const phoneNumber = "6281290003278";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t('floatingWa.message'))}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute right-16 bg-surface border border-border text-foreground px-4 py-2 rounded-btn text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-card">
        {t('floatingWa.tooltip')}
      </div>
      <MessageCircle size={32} />
    </a>
  );
};

export default FloatingWA;