import React, { useState, useEffect, Suspense, lazy } from 'react';
import emailjs from '@emailjs/browser';
import { useNotification } from './hooks/useNotification';
import { useScroll } from './hooks/useScroll';
import { useCursorFollower } from './hooks/useCursorFollower';
import { useForm } from './hooks/useForm';

// Components
import ErrorBoundary from './components/ErrorBoundary';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';

// Lazy load below-the-fold components
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Academic = lazy(() => import('./components/Academic'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Notification = lazy(() => import('./components/Notification'));
const CertificateModal = lazy(() => import('./components/CertificateModal'));

// Lazy Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-indigo-500/30 rounded-full border-t-indigo-500 animate-spin" />
  </div>
);

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [certModal, setCertModal] = useState(null);

  // Custom Hooks
  const { notification, setNotification, showNotification } = useNotification();
  const { scrollProgress, isScrolled } = useScroll();
  const cursorPos = useCursorFollower();
  const { formData, setFormData, formErrors, setFormErrors, isSubmitting, setIsSubmitting, handleInputChange, validate } = useForm({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error('EmailJS public key is not configured');
    }
  }, []);

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Form handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      showNotification('Please fix the errors and try again.', 'error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      showNotification('Failed to send message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/UmangKumarResume.pdf';
      link.download = 'UmangKumarResume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      showNotification('Failed to download resume. Please try again.', 'error');
    }
  };

  return (
    <ErrorBoundary>
      <div className="portfolio-app">
        {/* Custom Cursor */}
        <CustomCursor cursorPos={cursorPos} />

        {/* Loader */}
        <Loader isLoading={isLoading} />

        {/* Scroll Progress */}
        <ScrollProgress scrollProgress={scrollProgress} />

        {/* Navigation */}
        <Navigation 
          isScrolled={isScrolled}
          onDownloadCV={handleDownloadCV}
        />

        {/* Hero Section */}
        <Suspense fallback={<LoadingFallback />}>
          <Hero isLoading={isLoading} />
        </Suspense>

        {/* About Section */}
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>

        {/* Academic Section */}
        <Suspense fallback={<LoadingFallback />}>
          <Academic />
        </Suspense>

        {/* Certifications Section */}
        <Suspense fallback={<LoadingFallback />}>
          <Certifications onViewCert={setCertModal} />
        </Suspense>

        {/* Projects Section */}
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
        </Suspense>

        {/* Contact Section */}
        <Suspense fallback={<LoadingFallback />}>
          <Contact 
            formData={formData}
            formErrors={formErrors}
            isSubmitting={isSubmitting}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </Suspense>

        {/* Footer */}
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* Notification */}
        <Suspense fallback={null}>
          <Notification 
            notification={notification}
            onClose={() => setNotification(null)}
          />
        </Suspense>

        {/* Certificate Modal */}
        <Suspense fallback={null}>
          <CertificateModal 
            certModal={certModal}
            onClose={() => setCertModal(null)}
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default Portfolio;
