import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Eye } from 'lucide-react';
import { useRef } from 'react';

export function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    // {
    //   title: 'E-Commerce Platform',
    //   category: 'Web Development',
    //   description: 'A modern online shopping platform with real-time inventory and secure checkout.',
    //   image: 'https://images.unsplash.com/photo-1691073121676-1ab3a6d3d743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbGFwdG9wfGVufDF8fHx8MTc3MjgzMDkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    //   tags: ['React', 'Node.js', 'MongoDB'],
    //   gradient: 'from-blue-600 to-cyan-600',
    // },
    // {
    //   title: 'Mobile Banking App',
    //   category: 'Mobile Development',
    //   description: 'Secure and intuitive mobile banking application with biometric authentication.',
    //   image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyNzYyMDA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    //   tags: ['React Native', 'TypeScript', 'AWS'],
    //   gradient: 'from-purple-600 to-pink-600',
    // },
    // {
    //   title: 'Enterprise Dashboard',
    //   category: 'Web Application',
    //   description: 'Comprehensive analytics dashboard for enterprise data visualization and reporting.',
    //   image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzI3NzE4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    //   tags: ['Next.js', 'D3.js', 'PostgreSQL'],
    //   gradient: 'from-orange-600 to-red-600',
    // },
    // {
    //   title: 'Corporate Website',
    //   category: 'Web Design',
    //   description: 'Premium corporate website with modern design and seamless user experience.',
    //   image: 'https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyODY0OTMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    //   tags: ['WordPress', 'UI/UX', 'SEO'],
    //   gradient: 'from-green-600 to-emerald-600',
    // },
    // {
    //   title: 'Tech Startup Platform',
    //   category: 'SaaS Development',
    //   description: 'Cloud-based SaaS platform for project management and team collaboration.',
    //   image: 'https://images.unsplash.com/photo-1573757056004-065ad36e2cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyODI1MTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    //   tags: ['Vue.js', 'Laravel', 'Redis'],
    //   gradient: 'from-indigo-600 to-purple-600',
    // },
    // {
    //   title: 'Healthcare Portal',
    //   category: 'Web Application',
    //   description: 'HIPAA-compliant patient portal with appointment scheduling and telemedicine.',
    //   image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI4MDUxODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    //   tags: ['Angular', 'Python', 'Azure'],
    //   gradient: 'from-pink-600 to-rose-600',
    // },
  ];

  return (
    <section ref={containerRef} id="portfolio" className="relative py-32 bg-white overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl" />
      </motion.div>

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
            Our Work
          </motion.span>
          <motion.h2 
            className="text-5xl lg:text-6xl text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of successful projects across various industries
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-multiply`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              
              {/* Content Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent flex flex-col justify-end p-8"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3 inline-block`}
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.category}
                </motion.span>
                
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-gray-300 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                >
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={i} 
                      className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.button 
                  className={`flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r ${project.gradient} px-6 py-3 rounded-lg w-fit`}
                  whileHover={{ scale: 1.05, gap: '12px' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Eye size={16} />
                  View Project
                  <ExternalLink size={16} />
                </motion.button>
              </motion.div>

              {/* Corner Accent */}
              <motion.div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}