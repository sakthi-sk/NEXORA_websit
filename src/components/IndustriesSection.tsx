import { motion } from 'framer-motion';
import { Rocket, Building2, Store, ShoppingBag, Briefcase } from 'lucide-react';

const industries = [
  { icon: Rocket, name: 'Startups', description: 'Launch your digital presence' },
  { icon: Building2, name: 'SMBs', description: 'Scale your operations' },
  { icon: Briefcase, name: 'Corporate', description: 'Enterprise solutions' },
  { icon: Store, name: 'Local Business', description: 'Dominate local search' },
  { icon: ShoppingBag, name: 'E-commerce', description: 'Sell online 24/7' },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Empowering Businesses{' '}
            <span className="gradient-text">Across Sectors</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From startups to enterprises, we help businesses of all sizes achieve their digital goals.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="w-48 h-48 p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg hover:shadow-primary/10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-1">{industry.name}</h3>
                <p className="text-muted-foreground text-sm">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
