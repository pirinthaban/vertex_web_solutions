import { motion } from 'motion/react';
import { Code2, Smartphone, ShoppingCart, Palette, Database, Zap } from 'lucide-react';
import { useState } from 'react';

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom websites built with the latest technologies, optimized for performance and scalability.',
      features: ['React & Next.js', 'Node.js Backend', 'API Integration'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'App Store Deploy'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Complete e-commerce solutions with secure payment processing and inventory management.',
      features: ['Payment Gateway', 'Admin Dashboard', 'Order Management'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user engagement and drive conversions.',
      features: ['Wireframing', 'Prototyping', 'User Testing'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Database,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and database solutions for modern applications.',
      features: ['AWS & Azure', 'Database Design', 'Auto Scaling'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Speed optimization and performance tuning for lightning-fast user experiences.',
      features: ['Core Web Vitals', 'SEO Optimization', 'Analytics'],
      gradient: 'from-yellow-500 to-orange-500',
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block text-blue-600 font-semibold uppercase tracking-wide mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.span>
          <motion.h2 
            className="text-5xl lg:text-6xl text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What We Offer
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive digital solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                  animate={hoveredIndex === index ? { scale: 1.5, rotate: 180 } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                />

                {/* Icon Container */}
                <motion.div 
                  className={`relative w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`}
                  />
                </motion.div>
                
                <h3 className="text-2xl mb-4 text-gray-900 font-semibold">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-center text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                        whileHover={{ scale: 1.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Border Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                  style={{ 
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '2px',
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}