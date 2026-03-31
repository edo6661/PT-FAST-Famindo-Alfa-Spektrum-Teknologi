import { Hexagon, Triangle, Circle, Square, Octagon } from 'lucide-react';

const ClientBase = () => {
  const clients = [
    { icon: <Hexagon size={48} strokeWidth={1} />, name: "Klien Alpha" },
    { icon: <Triangle size={48} strokeWidth={1} />, name: "Grup Beta" },
    { icon: <Circle size={48} strokeWidth={1} />, name: "Omega Corp" },
    { icon: <Square size={48} strokeWidth={1} />, name: "Delta Industri" },
    { icon: <Octagon size={48} strokeWidth={1} />, name: "Sigma Manufaktur" },
  ];

  return (
    <section id="klien" className="py-24 bg-surface relative border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-medium mb-4 text-white/80 tracking-wide">Dipercaya Oleh Pemimpin Industri</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-4 text-foreground-muted/50 hover:text-accent transition-all duration-500 cursor-pointer"
            >
              <div className="transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(56,152,212,0.4)]">
                {client.icon}
              </div>
              <span className="text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">{client.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientBase;