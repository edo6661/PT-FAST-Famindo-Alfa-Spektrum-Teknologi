import { Landmark, Shield, Car, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClientBase = () => {
  const clients = [
    {
      icon: <Landmark size={40} className="text-accent" />,
      name: "2024 Presidential Inauguration",
      desc: "Called by the Ministry of State Secretariat to safeguard a momentous national event. LFK Hartindo AF31 is distributed for the EV units that escort the international VVIPs guests."
    },
    {
      icon: <Shield size={40} className="text-accent" />,
      name: "Securing Pope Francis's Safety",
      desc: "Lithium Fire Killer Hartindo AF31 is trusted to secure the vehicle that escorted the Pope during his visit in Indonesia."
    },
    {
      icon: <Zap size={40} className="text-accent" />,
      name: "IKT Terminal & KTT IAF Bali",
      desc: "Trusted to secure hundreds of EV units at IKT Terminal that will be escorting international VVIP guests at KTT IAF (Indonesia Africa Forum) event at Bali."
    },
    {
      icon: <Car size={40} className="text-accent" />,
      name: "Bluebird Group",
      desc: "FAST was appointed as the official fire safety supplier for Bluebird Group and has successfully conducted fire safety training at the company's Mampang headquarters in 2025."
    },
  ];

  return (
    <section id="klien" className="py-24 bg-surface relative border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-wide">Engineered for Excellence, Proven in Practice</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto"></div>
          <p className="text-foreground-muted mt-6 max-w-3xl mx-auto font-light leading-relaxed">
            Our expertise extends beyond conventional fire safety. We specialize in designing, implementing, and maintaining cutting-edge solutions tailored to the most demanding environments. Our proven track record speaks for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-background/40 border border-white/5 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 shadow-lg flex flex-col h-full"
            >
              <div className="mb-6 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(56,152,212,0.4)] transition-all duration-500">
                {client.icon}
              </div>
              <h3 className="text-lg font-bold text-white/90 mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                {client.name}
              </h3>
              <p className="text-sm text-foreground-muted font-light leading-relaxed flex-grow">
                {client.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/clients" className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-accent/10 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(56,152,212,0.3)] transition-all duration-300 group">
            View Complete Portfolios
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ClientBase;