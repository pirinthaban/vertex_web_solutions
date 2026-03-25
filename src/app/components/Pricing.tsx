import { motion } from 'motion/react';
import { Check, Sparkles, Star, Zap, Crown } from 'lucide-react';
import { useState } from 'react';

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const plans = [
    {
      icon: Zap,
      name: 'Starter',
      description: 'Perfect for small businesses and personal projects.',
    //   monthlyPrice: 499,
    //   annualPrice: 399,
      gradient: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        'Single Page Website',
        'Responsive Design',
        'Contact Form',
        'Basic SEO Setup',
        '1 Month Support',
        '2 Revisions',
      ],
    },
    {
      icon: Star,
      name: 'Professional',
      description: 'Ideal for growing businesses that need more features.',
    //   monthlyPrice: 999,
    //   annualPrice: 799,
      gradient: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'Up to 10 Pages',
        'Custom UI/UX Design',
        'CMS Integration',
        'Advanced SEO',
        '2 Months Support',
        'Unlimited Revisions',
        'Performance Optimization',
        'Analytics Dashboard',
      ],
    },
    {
      icon: Crown,
      name: 'Enterprise',
      description: 'Full-scale solutions for large organizations.',
    //   monthlyPrice: 2499,
    //   annualPrice: 1999,
      gradient: 'from-orange-500 to-red-500',
      popular: false,
      features: [
        'Unlimited Pages',
        'Custom Web Application',
        'E-Commerce Integration',
        'Priority Support 24/7',
        '3 Months Support',
        'Unlimited Revisions',
        'Cloud Infrastructure',
        'Dedicated Project Manager',
        'Custom API Development',
        'Security Audit',
      ],
    },
  ];

  return (
    <section id="pricing" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-blue-600 font-semibold uppercase tracking-wide mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4" />
            Pricing
          </motion.span>
          <motion.h2
            className="text-5xl lg:text-6xl text-gray-900 mb-6 font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </motion.p>

          {/* Billing Toggle */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-1.5"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isAnnual
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly-------------
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isAnnual
                  ? 'bg-white text-gray-900 shadow-md'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Annual -------------
              <span className="ml-2 text-xs text-green-600 font-bold">Save 20%</span>
            </button>
          </motion.div> */}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative group rounded-2xl p-8 transition-all border overflow-hidden ${
                  plan.popular
                    ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white border-blue-500/30 shadow-2xl shadow-blue-500/10 lg:scale-105'
                    : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute top-0 right-0"
                  >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">
                      Most Popular
                    </div>
                  </motion.div>
                )}

                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                  animate={
                    hoveredIndex === index
                      ? { scale: 1.5, rotate: 180 }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.8 }}
                />

                {/* Icon */}
                <motion.div
                  className={`relative w-14 h-14 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={28} />
                  </motion.div>
                </motion.div>

                {/* Plan Name & Description */}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? 'text-blue-200' : 'text-gray-500'
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <motion.span
                      key={price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-5xl font-bold ${
                        plan.popular ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {/* ${price} */}
                    </motion.span>
                    <span
                      className={`text-sm mb-2 ${
                        plan.popular ? 'text-blue-300' : 'text-gray-400'
                      }`}
                    >
                      {/* / month */}
                    </span>
                  </div>
                  {isAnnual && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`text-xs mt-1 ${
                        plan.popular ? 'text-green-300' : 'text-green-600'
                      }`}
                    >
                      Billed annually (${price * 12}/year)
                    </motion.p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular
                            ? 'bg-blue-500/20'
                            : 'bg-green-100'
                        }`}
                      >
                        <Check
                          size={12}
                          className={
                            plan.popular ? 'text-blue-300' : 'text-green-600'
                          }
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-blue-500/25'
                      : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          All plans include free consultation. Need a custom solution?{' '}
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-blue-600 font-semibold hover:underline"
          >
            Contact us
          </button>
        </motion.p>
      </div>
    </section>
  );
}
