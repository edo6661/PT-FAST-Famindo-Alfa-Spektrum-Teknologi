import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SpotlightCard from "./SpotlightCard";

const ClientBase = () => {
  const { t } = useTranslation();

  const clients = [
    {
      logoImg: "/clients/government/Istana_Kepresidenan_RI_Logo.png",
      name: t("clientBase.clients.presidential.name"),
      desc: t("clientBase.clients.presidential.desc"),
      gradient: "from-blue-600/20"
    },
    {
      logoImg: "/clients/government/Kepolisian_Negara_Republik_Indonesia_Logo.png",
      name: t("clientBase.clients.pope.name"),
      desc: t("clientBase.clients.pope.desc"),
      gradient: "from-amber-500/20"
    },
    {
      logoImg: "/clients/transportation/Bluebird_Logogram.png",
      name: t("clientBase.clients.bluebird.name"),
      desc: t("clientBase.clients.bluebird.desc"),
      gradient: "from-cyan-500/20"
    },
  ];

  return (
    <section id="klien" className="py-24 bg-background relative border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-wide">
            {t('clientBase.title')} <span className="text-accent">{t('clientBase.titleHighlight')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto"></div>
          <p className="text-foreground-muted mt-6 max-w-3xl mx-auto font-light leading-relaxed">
            {t('clientBase.desc')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="group relative h-full bg-background/40 border-white/5 hover:border-white/10">
                <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${client.gradient} to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="mb-6 w-14 h-14 rounded-2xl bg-surface border border-white/10 flex items-center justify-center transform-gpu group-hover:-translate-y-1 transition-transform duration-300">
                    <img src={client.logoImg} alt={client.name} className="w-full h-full object-contain" />
                  </div>

                  <h3 className="text-lg font-bold text-white/90 mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                    {client.name}
                  </h3>

                  <p className="text-sm text-foreground-muted font-light leading-relaxed flex-grow">
                    {client.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-surface hover:border-accent/40 transition-all duration-300 group"
          >
            {t('clientBase.viewAll')}
            <ArrowRight size={18} className="transform-gpu transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ClientBase;