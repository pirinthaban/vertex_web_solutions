import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { HelpCenter } from './pages/HelpCenter';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { CookiePolicy } from './pages/CookiePolicy';

const SEO_META = {
  '/': {
    title: 'Vertex Web Solutions | Web Development, UI/UX, Cloud',
    description:
      'Vertex Web Solutions builds high-performance websites, web apps, and scalable cloud solutions for modern businesses.',
  },
  '/help-center': {
    title: 'Help Center | Vertex Web Solutions',
    description: 'Find answers to common questions about Vertex Web Solutions services, process, and support.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Vertex Web Solutions',
    description: 'Read how Vertex Web Solutions collects, uses, and protects your personal data.',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Vertex Web Solutions',
    description: 'Review the terms and conditions for using Vertex Web Solutions website and services.',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Vertex Web Solutions',
    description: 'Learn how Vertex Web Solutions uses cookies and how you can control cookie preferences.',
  },
} as const;

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const current = SEO_META[location.pathname as keyof typeof SEO_META] ?? SEO_META['/'];
    const canonicalUrl = `https://vws.systems${location.pathname}`;

    document.title = current.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', current.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', current.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', current.description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}
