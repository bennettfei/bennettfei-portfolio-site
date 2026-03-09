import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { usePageTitle } from '@/hooks/usePageTitle';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  const location = useLocation();
  usePageTitle('Page Not Found | Bennett Feigenbaum');

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-full min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          <h1 className="text-8xl md:text-9xl font-extrabold mb-6 gradient-text">404</h1>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-4">Page Not Found</p>
          <p className="text-foreground/70 text-lg mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-200"
          >
            Return to Home
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
