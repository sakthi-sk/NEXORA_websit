import { motion } from "framer-motion";
import {
  Zap,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Lead Generation",
    desc: "SEO-friendly websites that attract customers",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    desc: "Google Ads & PPC campaign management",
  },
  {
    icon: Zap,
    title: "AI Automation",
    desc: "Smart chatbots & workflow automation",
  },
  {
    icon: Shield,
    title: "Secure & Fast",
    desc: "Modern, secure web & mobile apps",
  },
  {
    icon: Clock,
    title: "Quick Delivery",
    desc: "Rapid development without compromises",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock digital growth support",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Why Choose NEXORA?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              Digital Systems That{" "}
              <span className="gradient-text">Drive Results</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              We create comprehensive digital ecosystems that attract, engage,
              and convert your audience into loyal customers.
            </motion.p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Right Side - 3D Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Animated Background Glow */}
            <motion.div
              className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Central Cube Grid */}
            {/* <div className="relative w-64 h-64"> */}
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-secondary/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Floating cubes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 rounded-xl bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-sm border border-white/10"
                  style={{
                    left: `${45 + 50 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${45 + 50 * Math.sin((i * Math.PI * 2) / 6)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Center element */}
              <motion.div
                className="absolute w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-2xl shadow-primary/50"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>

              {/* Orbiting dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute w-3 h-3 rounded-full bg-accent"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    x: [0, 100 * Math.cos((i * Math.PI * 2) / 3), 0],
                    y: [0, 100 * Math.sin((i * Math.PI * 2) / 3), 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 1.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "100+", label: "Projects Delivered" },
            { value: "50+", label: "Happy Clients" },
            { value: "24/7", label: "Support Available" },
            { value: "5★", label: "Client Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-xl bg-card/50 border border-border/30 backdrop-blur-sm"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex items-center justify-center"
>
  {/* Animated Background Glow */}
  <motion.div
    className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-3xl"
    animate={{
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
    }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />

  {/* Central Cube Grid */}
  <div className="relative w-64 h-64">
    {/* Rotating outer ring */}
    <motion.div
      className="absolute inset-0 rounded-full border-2 border-primary/30"
      animate={{ rotate: 360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    />
    <motion.div
      className="absolute inset-4 rounded-full border border-secondary/40"
      animate={{ rotate: -360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />

    {/* Floating cubes */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-12 h-12 rounded-xl bg-gradient-to-br from-primary/40 to-secondary/40 backdrop-blur-sm border border-white/10"
        style={{
          left: `${45 + 50 * Math.cos((i * Math.PI * 2) / 6)}%`,
          top: `${45 + 50 * Math.sin((i * Math.PI * 2) / 6)}%`,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          y: [0, -10, 0],
          rotateZ: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3 + i * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.3,
        }}
      />
    ))}

    {/* Center element */}
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-2xl shadow-primary/50"
      animate={{
        rotateY: [0, 360],
        rotateX: [0, 15, 0, -15, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Zap className="w-10 h-10 text-white" />
    </motion.div>

    {/* Orbiting dots */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={`dot-${i}`}
        className="absolute w-3 h-3 rounded-full bg-accent"
        style={{
          left: "50%",
          top: "50%",
        }}
        animate={{
          x: [0, 100 * Math.cos((i * Math.PI * 2) / 3), 0],
          y: [0, 100 * Math.sin((i * Math.PI * 2) / 3), 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.3,
        }}
      />
    ))}
  </div>
</motion.div>;
