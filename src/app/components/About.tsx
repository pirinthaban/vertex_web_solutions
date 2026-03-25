import { motion, useScroll, useTransform } from 'motion/react';
import { Award, Users, TrendingUp, Target, Sparkles } from 'lucide-react';
import { useRef } from 'react';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver nothing but the highest quality in every project we undertake.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to understand and exceed their expectations.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technologies and modern development practices.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable outcomes that drive business growth.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section ref={containerRef} id="about" className="relative py-32 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="inline-flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wide mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-4 h-4" />
              About Us
            </motion.span>
            <motion.h2 
              className="text-5xl lg:text-6xl text-gray-900 mb-6 font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Building the Future of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Web
              </span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              With over 1+ years of experience in web development, we've helped hundreds of businesses 
              establish their digital presence and achieve their online goals. Our team of expert developers, 
              designers, and strategists work together to create solutions that are not just functional, 
              but exceptional.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-600 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We believe in the power of technology to transform businesses. From startups to enterprises, 
              we partner with our clients to deliver digital experiences that drive engagement, 
              increase conversions, and foster growth.
            </motion.p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="flex gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 mb-2 font-bold">{value.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI4MDUxODN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Our Team"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </motion.div>
              
              {/* Floating Stats Cards */}
              {/* <motion.div 
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Comming soon
                </motion.div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-8 -right-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-2xl text-white"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5, rotate: 5 }}
              >
                <motion.div 
                  className="text-5xl font-bold mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  1+
                </motion.div>
                <div className="text-sm font-medium">Years Experience</div>
              </motion.div> */}

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '5+', label: 'Team Members', gradient: 'from-blue-600 to-cyan-600' },
            // { number: '30+', label: 'Countries Served', gradient: 'from-purple-600 to-pink-600' },
            { number: '99%', label: 'On-Time Delivery', gradient: 'from-orange-600 to-red-600' },
            { number: '24/7', label: 'Support Available', gradient: 'from-green-600 to-emerald-600' },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="relative text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background Gradient on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
              />
              
              <div className="relative">
                <motion.div 
                  className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}