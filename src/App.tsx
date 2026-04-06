import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Building2,
  Brain,
  Cpu,
  Cloud,
  GraduationCap,
  Shield,
  Zap,
  Server,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  MessageCircle,
  Send,
  Globe,
  Rocket,
  Target,
  Award,
  Star,
  Briefcase,
  Code,
  Database,
  Smartphone,
  Blocks,
  Activity,
  HeartPulse
} from 'lucide-react';

// Navigation Component
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Portfolio & Tenders', href: '#portfolio' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <img 
              src="/logo-sliva.png" 
              alt="Sliva Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <span className={`font-bold text-xl ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                SLIVA
              </span>
              <p className={`text-xs ${scrolled ? 'text-slate-600' : 'text-blue-100'}`}>
                Technology Indonesia
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#partnership"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
            >
              Request Partnership
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-700 hover:text-blue-600 font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#partnership"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-full font-medium text-center"
              >
                Request Partnership
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-indigo-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              🚀 Leading Digital Transformation in Indonesia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Innovative Digital & Web3
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100/80 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            PT. Sliva Technology Indonesia is a technology-driven company delivering scalable digital transformation, enterprise systems, Web3 solutions, and AI-powered platforms across multiple industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2"
            >
              Explore Our Solutions
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#partnership"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              Become a Partner
              <Building2 className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// About Section
const AboutSection: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered', icon: Briefcase },
    { number: '10+', label: 'Enterprise Clients', icon: Building2 },
    { number: '3', label: 'Core Digital Products', icon: Cpu },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
  ];

  const missions = [
    { icon: Shield, title: 'Deliver secure & scalable digital systems', description: 'Building robust infrastructure that grows with your business' },
    { icon: Brain, title: 'Empower enterprises with AI & automation', description: 'Leveraging intelligent systems for operational excellence' },
    { icon: Blocks, title: 'Integrate Web3 for future-ready ecosystems', description: 'Preparing businesses for the decentralized future' },
    { icon: Rocket, title: 'Support Indonesia\'s digital acceleration', description: 'Driving national digital transformation initiatives' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Building the Future of
            <span className="text-blue-600"> Digital Innovation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            PT. Sliva Technology Indonesia is an innovative technology company focused on building scalable, secure, and high-performance digital ecosystems.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We specialize in enterprise software development, AI-driven platforms, blockchain/Web3 integration, and digital infrastructure modernization. Founded with a vision to accelerate Indonesia's digital economy, Sliva delivers intelligent solutions for financial institutions, healthcare, education, logistics, and government sectors.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Vision</h4>
                  <p className="text-slate-600">To become a leading digital transformation and Web3 technology partner in Southeast Asia.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <div className="space-y-4">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  <mission.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{mission.title}</h4>
                    <p className="text-sm text-slate-600">{mission.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl"
            >
              <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Core Services Section
const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Enterprise Software Development',
      description: 'Custom enterprise systems for banking, insurance, logistics, and healthcare.',
      features: ['Banking Systems', 'Insurance Platforms', 'Logistics Solutions', 'Healthcare IT'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Blocks,
      title: 'Web3 & Blockchain Development',
      description: 'Smart contract development, decentralized applications (dApps), token ecosystems, and Web3 infrastructure.',
      features: ['Smart Contracts', 'dApps', 'Token Ecosystems', 'Web3 Infrastructure'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Brain,
      title: 'AI & Intelligent Systems',
      description: 'AI-powered healthcare platforms, automation systems, predictive analytics.',
      features: ['AI Healthcare', 'Automation', 'Predictive Analytics', 'Machine Learning'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Infrastructure',
      description: 'CI/CD pipelines, containerization, monitoring, secure cloud deployment.',
      features: ['CI/CD Pipelines', 'Containerization', 'Monitoring', 'Cloud Security'],
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Core Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Core <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive digital excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Products Section
const ProductsSection: React.FC = () => {
  const products = [
    // {
    //   icon: GraduationCap,
    //   title: 'Sliva Academy',
    //   tagline: 'Professional Technology Education Platform',
    //   description: 'Empowering the next generation of technology professionals with cutting-edge skills and real-world experience.',
    //   offerings: [
    //     { icon: Server, name: 'Linux & DevOps Training', description: 'Master infrastructure automation and cloud operations' },
    //     { icon: Code, name: 'Web Development Bootcamp', description: 'Full-stack development with modern frameworks' },
    //     { icon: Blocks, name: 'Web3 Developer Program', description: 'Blockchain development and smart contracts' },
    //     { icon: Building2, name: 'Corporate IT Training', description: 'Customized training for enterprise teams' },
    //   ],
    //   color: 'from-green-500 to-emerald-600',
    //   bg: 'from-green-50 to-emerald-50',
    // },
    {
      icon: HeartPulse,
      title: 'Slivadoc',
      tagline: 'AI-Powered Animal Health Platform',
      description: 'An intelligent all-in-one animal health ecosystem that revolutionizes veterinary care and pet management.',
      offerings: [
        { icon: Database, name: 'Digital Medical Records', description: 'Comprehensive electronic health records for animals' },
        { icon: Brain, name: 'AI Diagnosis Assistance', description: 'Intelligent diagnostic support for veterinarians' },
        { icon: Activity, name: 'Veterinary Management System', description: 'Streamlined practice management tools' },
        { icon: Smartphone, name: 'Smart Pet Monitoring', description: 'IoT-enabled pet health tracking' },
      ],
      color: 'bg-sky-500',
      bg: 'from-pink-50 to-rose-50',
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Products & <span className="text-blue-600">Ecosystems</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Innovative solutions designed to transform industries and create lasting impact.
          </p>
        </motion.div>

        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`mb-16 rounded-3xl overflow-hidden bg-gradient-to-br ${product.bg}`}
          >
            <div className="grid lg:grid-cols-2 gap-12 p-12">
              <div>
                <div className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <product.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{product.tagline}</p>
                <p className="text-lg text-slate-600 mb-8">{product.description}</p>
                <motion.a
                  href="https://slivadoc.com/"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {product.offerings.map((offering, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <offering.icon className={`w-8 h-8 bg-gradient-to-br ${product.color} rounded-lg p-1.5 text-white mb-4`} />
                    <h4 className="font-semibold text-slate-900 mb-2">{offering.name}</h4>
                    <p className="text-sm text-slate-600">{offering.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Portfolio Section
const PortfolioSection: React.FC = () => {
  const projects = [
    {
      year: '2024',
      title: 'Enterprise Insurance System Integration',
      description: 'Digital transformation & API integration for financial services.',
      category: 'Enterprise Solutions',
      icon: Building2,
      color: 'from-blue-500 to-blue-600',
    },
    {
      year: '2024',
      title: 'AI Healthcare System Development',
      description: 'AI-based data analysis and automation for medical institutions.',
      category: 'Healthcare AI',
      icon: HeartPulse,
      color: 'from-pink-500 to-rose-600',
    },
    {
      year: '2023',
      title: 'Infrastructure & DevOps Modernization',
      description: 'Cloud migration & monitoring system for enterprise clients.',
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      year: '2023',
      title: 'Blockchain Payment Gateway',
      description: 'Web3 integration for seamless cryptocurrency transactions.',
      category: 'Web3 & Blockchain',
      icon: Blocks,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const clients = [
    'Government of Indonesia',
    'Major Banks',
    'Healthcare Institutions',
    'Educational Platforms',
    'Logistics Companies',
    'Insurance Providers',
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-4">
            Portfolio & Tenders
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Project & <span className="text-blue-400">Tender History</span>
          </h2>
          <p className="text-xl text-blue-100/70 max-w-3xl mx-auto">
            Proven track record of delivering transformative solutions for enterprise and government clients.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-bold text-white/20">{project.year}</span>
                <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-blue-100/70">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex items-center justify-center hover:bg-white/15 transition-all"
              >
                <div className="text-center">
                  <Building2 className="w-10 h-10 text-white/50 mx-auto mb-2" />
                  <p className="text-white/60 text-sm">{client}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection: React.FC = () => {
  const reasons = [
    { icon: Building2, title: 'Experienced in Enterprise Systems', description: 'Proven expertise in building large-scale enterprise solutions' },
    { icon: Shield, title: 'Secure & Scalable Architecture', description: 'Built with security-first principles and scalability in mind' },
    { icon: Brain, title: 'AI & Web3 Ready', description: 'Cutting-edge solutions leveraging AI and blockchain technology' },
    { icon: Zap, title: 'Agile Development Approach', description: 'Fast, flexible, and iterative development methodology' },
    { icon: Server, title: 'Strong DevOps & Infrastructure', description: 'Robust infrastructure and deployment expertise' },
    { icon: Award, title: 'Industry Recognition', description: 'Award-winning solutions and client satisfaction' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why <span className="text-blue-600">PT. Sliva Technology Indonesia</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We combine technical excellence with industry expertise to deliver exceptional results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Technology Stack Section
const TechnologyStackSection: React.FC = () => {
  const technologies = [
    'React', 'Node.js', 'TypeScript', 'Python',
    'Kubernetes', 'Docker', 'AWS', 'Google Cloud',
    'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch',
    'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain',
    'Ethereum', 'Solidity', 'Hyperledger', 'IPFS',
    'GraphQL', 'REST API', 'gRPC', 'WebSocket',
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Technology Stack</h3>
          <p className="text-slate-600">Powered by cutting-edge technologies and frameworks</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              whileHover={{ scale: 1.1 }}
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <span className="font-medium text-slate-700">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Partnership Section
const PartnershipSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    collaborationType: '',
    message: '',
  });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `Partnership Request - ${formData.collaborationType}`;
        const body = `
            Full Name: ${formData.fullName}
            Company Name: ${formData.companyName}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Collaboration Type: ${formData.collaborationType}
            
            Message:
            ${formData.message}
  `;

        const mailtoLink = `mailto:support@sliva.id?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

  const collaborationTypes = [
    'Technology Partnership',
    'Investment',
    'Enterprise Solution',
    'Training & Academy',
    'Government Collaboration',
    'Other',
  ];

  return (
    <section id="partnership" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Partnership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let's Build the
              <span className="text-blue-600"> Future Together</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We welcome strategic partnerships with enterprises, investors, government institutions, and global technology companies. Join us in shaping the future of digital innovation in Indonesia.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Enterprise Partnerships</h4>
                  <p className="text-slate-600">Collaborate on large-scale digital transformation projects</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Investment Opportunities</h4>
                  <p className="text-slate-600">Join us in building the next generation of tech solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Government Collaboration</h4>
                  <p className="text-slate-600">Supporting national digital transformation initiatives</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="Your Company"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  placeholder="+62 812 3456 7890"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Type of Collaboration</label>
                <select
                  value={formData.collaborationType}
                  onChange={(e) => setFormData({ ...formData, collaborationType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                >
                  <option value="">Select collaboration type</option>
                  {collaborationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
                  placeholder="Tell us about your partnership opportunity..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2"
              >
                Submit Request
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection: React.FC = () => {
  const contactInfo = [
    { icon: MapPin, title: 'Office Address', value: 'Jakarta, Indonesia', href: '#' },
    { icon: Mail, title: 'Email', value: 'support@sliva.id', href: 'mailto:info@sliva.id' },
    { icon: Phone, title: 'Phone', value: '+62 819 7738 8341', href: 'tel:+6281977388341' },
    { icon: Linkedin, title: 'LinkedIn', value: 'Sliva Technology', href: 'https://www.linkedin.com/company/sliva' },
    { icon: Instagram, title: 'Instagram', value: '@slivatechnologyindonesia', href: 'https://www.instagram.com/slivatech.id/' },
    { icon: MessageCircle, title: 'WhatsApp', value: '+62 819 7738 8341', href: 'https://wa.me/6281977388341' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-xl text-blue-100/70 max-w-3xl mx-auto">
            Ready to transform your business? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-blue-100/70">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo-sliva.png" 
                alt="Sliva Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="font-bold text-xl">SLIVA</span>
                <p className="text-xs text-blue-300">Technology Indonesia</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              PT. Sliva Technology Indonesia is a leading technology company delivering scalable digital transformation, enterprise systems, Web3 solutions, and AI-powered platforms across multiple industries.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/sliva" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/slivatech.id/" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/6281977388341" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                Jakarta, Indonesia
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                info@sliva.id
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                +62 819 7738 8341
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© 2026 PT. Sliva Technology Indonesia. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      {/*<TechnologyStackSection />*/}
      <PartnershipSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
