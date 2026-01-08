import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Search, Target, Smartphone, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Fast, secure & SEO-optimized websites that rank on Google and convert visitors.',
    color: 'from-primary to-cyan-400',
  },
  {
    icon: Search,
    title: 'SEO & Google Listing',
    description: 'Rank higher on Google search & Google Maps with proven SEO strategies.',
    color: 'from-secondary to-blue-400',
  },
  {
    icon: Target,
    title: 'PPC & Google Ads',
    description: 'Targeted ads that bring real customers, not fake clicks. Maximize your ROI.',
    color: 'from-accent to-purple-400',
  },
  {
    icon: Smartphone,
    title: 'Mobile & Web Apps',
    description: 'Custom business applications for Android, iOS & Web with modern tech stack.',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Bot,
    title: 'Automation & Chatbots',
    description: 'WhatsApp, Instagram & Web chatbots to automate customer support & sales.',
    color: 'from-orange-500 to-amber-400',
  },
];

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-card/50">
      {/* Animated background decoration */}
      <motion.div 
        className="absolute inset-0 grid-bg opacity-20" 
        style={{ y: backgroundY }}
      />
      
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px hsl(187 100% 50% / 0.3)' }}
          >
            Our Core Services
          </motion.span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Solutions That Drive{' '}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From stunning websites to intelligent automation, we provide end-to-end digital solutions for your business growth.
          </p>
        </motion.div>

        {/* Services Grid with 3D cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                boxShadow: '0 30px 60px hsl(0 0% 0% / 0.3)',
              }}
              className="group relative"
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <div className="border-gradient h-full">
                <div className="relative h-full p-6 rounded-lg bg-card overflow-hidden">
                  {/* Hover gradient with animation */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, hsl(0 0% 100% / 0.1) 45%, hsl(0 0% 100% / 0.2) 50%, hsl(0 0% 100% / 0.1) 55%, transparent 60%)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                  />

                  {/* Icon with bounce */}
                  <motion.div 
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon size={24} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Learn more link with arrow animation */}
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    Learn more
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA with enhanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Button shine effect */}
              <motion.span
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, hsl(0 0% 100% / 0.2) 50%, transparent 60%)',
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              <span className="relative">View All Services</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
