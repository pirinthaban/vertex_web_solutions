import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // ⚠️ REPLACE these with your actual EmailJS credentials:
      // 1. Go to https://www.emailjs.com/ and sign up (free)
      // 2. Create an Email Service (e.g. Gmail) → copy the Service ID
      // 3. Create an Email Template → copy the Template ID
      // 4. Copy your Public Key from Account > General
      const SERVICE_ID = 'service_skzpxrj';
      const TEMPLATE_ID = 'template_u8qo0aj';
      const PUBLIC_KEY = 'pbs3QUtYcPbWrNzUx';

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || 'N/A',
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'www.pirinthaban@gmail.com',
      link: 'mailto:www.pirinthaban@gmail.com',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 0779746170',
      link: 'tel:+940779746170',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'A35 Road , Thevipuram, Mullaitivu, Sri Lanka',
      link: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full blur-3xl"
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
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-5xl lg:text-6xl text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Start Your Project
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to transform your digital presence? Let's discuss your project
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                    Your Name *
                  </label>
                  <motion.div
                    animate={focusedField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white"
                      placeholder="John Doe"
                    />
                  </motion.div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                    Email Address *
                  </label>
                  <motion.div
                    animate={focusedField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-gray-700 mb-2 font-medium">
                    Company Name
                  </label>
                  <motion.div
                    animate={focusedField === 'company' ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-gray-50 focus:bg-white"
                      placeholder="Your Company"
                    />
                  </motion.div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                    Project Details *
                  </label>
                  <motion.div
                    animate={focusedField === 'message' ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none bg-gray-50 focus:bg-white"
                      placeholder="Tell us about your project..."
                    />
                  </motion.div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full py-5 rounded-xl font-semibold shadow-xl transition-all flex items-center justify-center gap-3 group ${
                    submitStatus === 'success'
                      ? 'bg-green-500 text-white shadow-green-500/30'
                      : submitStatus === 'error'
                      ? 'bg-red-500 text-white shadow-red-500/30'
                      : 'bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40'
                  } ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <span>Failed to send. Try again.</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send size={20} />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div 
              className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl p-10 text-white overflow-hidden shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Background */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
              />
              
              <div className="relative">
                <h3 className="text-3xl mb-4 font-bold">Let's Create Something Amazing</h3>
                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Whether you need a new website, mobile app, or a complete digital transformation, 
                  we're here to help bring your vision to life.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-4 group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon size={24} />
                        </motion.div>
                        <div>
                          <div className="text-sm text-blue-200 mb-1 font-medium">{info.title}</div>
                          <a
                            href={info.link}
                            className="text-white text-lg hover:text-blue-300 transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div 
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <h4 className="text-2xl text-gray-900 mb-6 font-bold flex items-center gap-2">
                <CheckCircle2 className="text-green-500" />
                Business Hours
              </h4>
              <div className="space-y-4 text-gray-600">
                <motion.div 
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                </motion.div>
                <motion.div 
                  className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-medium">Sunday</span>
                  <span className="font-semibold text-red-500">Closed</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}