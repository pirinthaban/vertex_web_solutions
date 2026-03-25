import { motion } from 'motion/react';
import { Facebook, Twitter, Linkedin, Instagram, Github, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/#about' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
    ],
    services: [
      { label: 'Web Development', href: '/#services' },
      { label: 'Mobile Apps', href: '/#services' },
      { label: 'UI/UX Design', href: '/#services' },
      { label: 'Cloud Solutions', href: '/#services' },
    ],
    support: [
      { label: 'Help Center', href: '/help-center' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' },
      { label: 'Contact', href: '/#contact' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', gradient: 'from-blue-600 to-blue-700' },
    { icon: Twitter, href: '#', label: 'Twitter', gradient: 'from-sky-500 to-blue-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', gradient: 'from-blue-700 to-blue-800' },
    { icon: Instagram, href: '#', label: 'Instagram', gradient: 'from-purple-600 to-pink-600' },
    { icon: Github, href: '#', label: 'GitHub', gradient: 'from-gray-700 to-gray-900' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white text-2xl font-bold">V</span>
              </motion.div>
              <span className="text-2xl font-bold text-white">Vertex Web Solutions</span>
            </motion.div>
            <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
              Building exceptional digital experiences for businesses worldwide. 
              Let's create something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 bg-gradient-to-br ${social.gradient} rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-6 font-bold text-lg">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#60a5fa' }}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-6 font-bold text-lg">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#60a5fa' }}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-6 font-bold text-lg">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#60a5fa' }}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700/50 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              className="text-gray-400 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              © {currentYear} Vertex Web Solutions. All rights reserved. Crafted with ❤️
            </motion.p>
            <div className="flex gap-6 text-sm">
              {[
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms of Service', path: '/terms-of-service' },
                { name: 'Cookie Policy', path: '/cookie-policy' }
              ].map((item, index) => (
                <motion.a 
                  key={index}
                  href={item.path} 
                  className="text-gray-400 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
      >
        <ArrowUp className="text-white" size={24} />
      </motion.button>
    </footer>
  );
}