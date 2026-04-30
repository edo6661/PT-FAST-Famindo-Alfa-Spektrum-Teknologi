import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import SpotlightCard from '../components/SpotlightCard';


import heroImg from '../assets/about-us/about-us-hero.avif';
import willyImg from '../assets/about-us/willy-hadiwijaya.avif';
import seanImg from '../assets/about-us/sean-justin.avif';
import frankyImg from '../assets/about-us/franky-affandi.avif';
import rolandoImg from '../assets/about-us/rolando-fam.avif';
import fioImg from '../assets/about-us/fio.png';

const teamMembers = [
  {
    name: "Willy Hadiwijaya",
    role: "CEO",
    bio: "A visionary and adept entrepreneur, proprietor of Famindo Group, with a wealth of experience spanning over 18 years across diverse industries. Currently serving as Director & Commissioner in Famindo Group, he possesses a robust background in the automotive industry and brings a passion for brand building to the challenging landscape of fire safety. He is committed to contributing to the growth and success of the fire safety industry.",
    image: willyImg
  },
  {
    name: "Sean Justin",
    role: "President Commissioner",
    bio: "A dedicated entrepreneur and proprietor of Famindo Group, bringing over nine years of expertise in human resources and marketing within diverse industries, with a recent focus on the fire safety business. Renowned for developing strategic initiatives, he has played a pivotal role in steering the company's rapid growth, aligning it with the unique challenges and opportunities prevalent in the fire safety industry.",
    image: seanImg
  },
  {
    name: "Franky Affandi",
    role: "Chief Technical Officer",
    bio: "Embarked on a career in the fire engineering sector with PT HARTINDO Chemicatama Industri in 2009. Currently holds directorial positions in various companies, he continuously extends his expertise in fire safety, integrating his extensive experience from the agricultural, plastics, and fire engineering domains.",
    image: frankyImg
  },
  {
    name: "Rolando Fam",
    role: "Chief Operating Officer",
    bio: "With a rich background in various industries and armed with insights from diverse operational expertise, his focus is now dedicated to the fire safety industry. Currently serving as an Operational Director, he foresees significant transformations in fire safety and is committed to revolutionizing the standards of fire safety systems across various sectors.",
    image: rolandoImg
  },
  {
    name: "Fio",
    role: "Creative Director",
    bio: "Driving the visual and creative strategy to ensure FAST's life-saving technology is communicated with clarity and impact across all platforms.",
    image: fioImg
  }
];

const AboutUsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-24 pt-32 bg-background min-h-screen relative overflow-hidden">
      <SEO
        title="About Us - PT. FAST"
        description="Founded by the FAST FOUR. A team of dedicated people with passion for safety."
        url="/about"
      />

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-surface via-background to-background z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">

        {/* Header Section */}
        <div className="mb-16 text-center flex flex-col items-center">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors mb-8 text-sm font-medium bg-surface/50 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md hover:border-white/30 hover:bg-surface">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 mb-4">
            <Users className="text-accent" size={24} />
            <span className="text-accent font-bold tracking-widest uppercase text-sm">About PT. FAST</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">FAST FOUR</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted max-w-3xl font-light leading-relaxed">
            Founded by the FAST FOUR. A team of dedicated people with passion for safety.
          </p>
        </div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative h-[200px] md:h-[350px]"
        >
          <img
            src={heroImg}
            alt="About PT FAST"
            fetchPriority='high'

            className="w-full h-full object-cover object-[center_25%] opacity-80 hover:opacity-100 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="group h-full p-8 md:p-10 rounded-3xl bg-surface/40 border border-white/10 hover:bg-surface/80 transition-all duration-500 shadow-xl backdrop-blur-md">
                <div className="flex flex-col xl:flex-row gap-8 items-start">

                  {/* Photo Profile */}
                  <div className="w-32 h-32 xl:w-40 xl:h-40 flex-shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-accent/50 transition-colors duration-500 bg-background">
                    <img
                      src={member.image}
                      alt={member.name}

                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase">
                      {member.role}
                    </div>
                    <p className="text-foreground-muted font-light leading-relaxed text-sm md:text-base text-justify">
                      {member.bio}
                    </p>
                  </div>

                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AboutUsPage;