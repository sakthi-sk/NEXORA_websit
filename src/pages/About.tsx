import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, TrendingUp, Users, Award, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import FloatingChatButton from '../components/FloatingChatButton';
import Scene3D from '../components/Scene3D';
import FloatingElements from '../components/FloatingElements';
import MouseFollower from '../components/MouseFollower';
import ParallaxSection from '../components/ParallaxSection';
import nexoraLogo from '@/assets/nexora-logo.png';

const values = [
  {
    icon: Target,
    title: 'Strategy First',
    description: 'We start with understanding your business goals before recommending any solution.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Driven',
    description: 'We leverage cutting-edge technologies to give you a competitive advantage.',
  },
  {
    icon: TrendingUp,
    title: 'Results Focused',
    description: 'Every decision we make is aimed at delivering measurable business outcomes.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, committed to your success.',
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in every project we deliver.',
  },
  {
    icon: Heart,
    title: 'Passion & Dedication',
    description: 'We genuinely care about helping businesses grow and succeed digitally.',
  },
];

const stats = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '15+', label: 'Team Members' },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background noise overflow-hidden">
      <MouseFollower />
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section with 3D */}
        <motion.section 
          style={{ scale: heroScale }}
          className="py-20 relative overflow-hidden hero-gradient min-h-[60vh] flex items-center"
        >
          <Scene3D />
          <FloatingElements />
          <div className="absolute inset-0 grid-bg opacity-20" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 backdrop-blur-sm"
              >
                About NEXORA DIGITAL
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Your Trusted{' '}
                <span className="gradient-text">Digital Growth Partner</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-muted-foreground text-lg md:text-xl leading-relaxed"
              >
                NEXORA DIGITAL PVT LTD is a full-service digital solutions company focused on business growth through technology. We help companies build a strong digital presence that generates leads and sales.
              </motion.p>
            </motion.div>
          </div>

          {/* Scroll indicator with parallax */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-1"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-3 rounded-full bg-primary"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Who We Are - with parallax */}
        <section className="py-24 relative overflow-hidden">
          <FloatingElements />
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ParallaxSection offset={30}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                    Who We Are
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    NEXORA DIGITAL PVT LTD is a full-service digital solutions company focused on business growth through technology. We help companies build a strong digital presence using high-performance websites, data-driven SEO & marketing, and smart automation systems.
                  </p>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Our mission is simple: <span className="text-primary font-semibold">Turn your business into a digital brand.</span>
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={index} 
                        className="p-4 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                        whileHover={{ scale: 1.05, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <div className="font-heading text-3xl font-bold gradient-text mb-1 group-hover:scale-110 transition-transform">
                          {stat.value}
                        </div>
                        <div className="text-muted-foreground text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </ParallaxSection>

              <ParallaxSection offset={-30}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-8 flex items-center justify-center relative overflow-hidden"
                    animate={{
                      boxShadow: [
                        '0 0 20px hsl(187 100% 50% / 0.2)',
                        '0 0 40px hsl(300 85% 55% / 0.2)',
                        '0 0 20px hsl(187 100% 50% / 0.2)',
                      ],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {/* Animated border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'linear-gradient(90deg, hsl(187 100% 50%), hsl(220 90% 56%), hsl(300 85% 55%), hsl(187 100% 50%))',
                        backgroundSize: '300% 100%',
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                    />
                    <div className="absolute inset-[2px] rounded-2xl bg-card" />
                    
                    <div className="relative w-full h-full rounded-xl glass-card border border-primary/20 flex flex-col items-center justify-center text-center p-8">
                      <motion.img 
                        src={nexoraLogo} 
                        alt="NEXORA DIGITAL PVT LTD" 
                        className="w-48 h-auto object-contain"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </ParallaxSection>
            </div>
          </div>
        </section>

        {/* Why We Started - Enhanced with 3D cards */}
        <section className="py-24 bg-card/50 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{ y: backgroundY }}
          >
            <div className="grid-bg h-full" />
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <ParallaxSection offset={20}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Why We Started <span className="gradient-text">NEXORA</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Many businesses spend money on websites & ads but get zero results. We started NEXORA DIGITAL to fix that. We believe in a strategic approach where results come first.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { emoji: '👉', title: 'Strategy First', desc: 'Understanding your goals before action' },
                    { emoji: '⚡', title: 'Technology Second', desc: 'Right tools for the right job' },
                    { emoji: '🎯', title: 'Results Always', desc: 'Measurable outcomes guaranteed' },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="p-6 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                      initial={{ opacity: 0, y: 30, rotateX: -15 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -10,
                        boxShadow: '0 20px 40px hsl(187 100% 50% / 0.2)',
                      }}
                      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                    >
                      <motion.div 
                        className="text-4xl mb-4"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        {item.emoji}
                      </motion.div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ParallaxSection>
          </div>
        </section>

        {/* Our Values - with staggered 3D animations */}
        <section className="py-24 relative overflow-hidden">
          <FloatingElements />
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span 
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                whileHover={{ scale: 1.1 }}
              >
                Our Values
              </motion.span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                What Drives Us <span className="gradient-text">Every Day</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, rotateY: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: '0 25px 50px hsl(187 100% 50% / 0.15)',
                  }}
                  className="group p-6 rounded-xl glass-card border border-border/50 hover:border-primary/50 transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <value.icon className="text-primary" size={24} />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision - with dramatic parallax */}
        <section className="py-24 bg-card/50 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(187 100% 50% / 0.1) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <ParallaxSection offset={40}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <motion.span 
                  className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 hsl(187 100% 50% / 0.4)',
                      '0 0 0 10px hsl(187 100% 50% / 0)',
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Our Vision
                </motion.span>
                <motion.h2 
                  className="font-heading text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  India's Most Trusted{' '}
                  <span className="gradient-text">Digital Growth Partner</span>
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  We aspire to become the go-to digital partner for businesses across India, known for delivering exceptional results through innovative strategies and cutting-edge technology.
                </motion.p>
              </motion.div>
            </ParallaxSection>
          </div>
        </section>

        <CTASection />
      </main>
      
      <Footer />
      <FloatingChatButton />
    </div>
  );
}
