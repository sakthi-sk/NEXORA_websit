import { motion } from 'framer-motion';
import { Globe, Search, Target, Smartphone, Bot, Zap, Shield, Clock, Users, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import FloatingChatButton from '../components/FloatingChatButton';

const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Website Development',
    description: 'We create high-performance, SEO-optimized websites that rank on Google and convert visitors into customers.',
    features: [
      'SEO-optimized structure',
      'Mobile-first design',
      'Fast loading speed',
      'Secure hosting support',
      'Custom CMS integration',
      'E-commerce functionality',
    ],
    bestFor: 'Business websites, corporate sites, landing pages, e-commerce stores',
    color: 'from-primary to-cyan-400',
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO & Google Business Listing',
    description: 'Rank higher on Google search & Google Maps with our proven SEO strategies that drive organic traffic and leads.',
    features: [
      'Keyword research & strategy',
      'On-page & off-page SEO',
      'Google Maps ranking',
      'Local SEO optimization',
      'Content optimization',
      'Monthly reporting',
    ],
    result: 'More organic traffic & leads',
    color: 'from-secondary to-blue-400',
  },
  {
    id: 'ppc',
    icon: Target,
    title: 'Google Ads & PPC Campaigns',
    description: 'Targeted ads that bring real customers, not fake clicks. We maximize your ROI with data-driven campaigns.',
    features: [
      'Search Ads',
      'Display Ads',
      'YouTube Ads',
      'Remarketing campaigns',
      'Conversion tracking',
      'A/B testing',
    ],
    result: 'Instant leads & sales',
    color: 'from-accent to-purple-400',
  },
  {
    id: 'apps',
    icon: Smartphone,
    title: 'Mobile & Web App Development',
    description: 'Custom business applications for Android, iOS & Web built with modern technology stack.',
    features: [
      'Android & iOS apps',
      'Progressive Web Apps',
      'Admin dashboards',
      'Business automation apps',
      'API integrations',
      'Cloud deployment',
    ],
    tech: 'React, React Native, Node.js',
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 'automation',
    icon: Bot,
    title: 'Automation & Chatbots',
    description: 'AI-powered automation solutions that handle customer support and sales 24/7.',
    features: [
      'WhatsApp chatbot',
      'Instagram DM automation',
      'Website AI chatbot',
      'CRM & lead automation',
      'Email automation',
      'Workflow automation',
    ],
    result: '24/7 automated sales & support',
    color: 'from-orange-500 to-amber-400',
  },
];

const benefits = [
  { icon: Zap, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
  { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security for all solutions' },
  { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance when you need it' },
  { icon: Users, title: 'Dedicated Team', description: 'Expert professionals assigned to your project' },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden hero-gradient">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Our Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Complete Digital{' '}
                <span className="gradient-text">Solutions Suite</span>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                From stunning websites to intelligent automation, we provide end-to-end digital solutions that drive real business results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-12 bg-card/50 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{benefit.title}</h3>
                    <p className="text-muted-foreground text-xs">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="text-primary flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Additional info */}
                    {service.bestFor && (
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <span className="text-sm font-medium text-primary">Best for: </span>
                        <span className="text-sm text-muted-foreground">{service.bestFor}</span>
                      </div>
                    )}
                    {service.result && (
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <span className="text-sm font-medium text-primary">Result: </span>
                        <span className="text-sm text-muted-foreground">{service.result}</span>
                      </div>
                    )}
                    {service.tech && (
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <span className="text-sm font-medium text-primary">Tech Stack: </span>
                        <span className="text-sm text-muted-foreground">{service.tech}</span>
                      </div>
                    )}
                  </div>

                  {/* Visual */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="aspect-square max-w-md mx-auto">
                      <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${service.color} p-[1px]`}>
                        <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                          <div className="text-center p-8">
                            <service.icon size={80} className="text-primary mx-auto mb-6 opacity-50" />
                            <h3 className="font-heading text-xl font-semibold gradient-text">
                              {service.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      
      <Footer />
      <FloatingChatButton />
    </div>
  );
}
