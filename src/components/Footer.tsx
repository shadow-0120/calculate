import React from 'react';
import { 
  Mail, 
  ExternalLink, 
  Calculator, 
  Heart, 
  Github, 
  Linkedin, 
  ArrowUp,
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-center text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex-1 max-w-md text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <Calculator className="w-6 h-6" />
              </div>
              <a
                href="https://koussaiicode.vercel.app/services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:underline"
              >
                koussai.dev
              </a>
            </div>
            <p className="text-lg text-white/90 mb-4 leading-relaxed">
              Simple economic calculators — clear, fast, and beautifully explained.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/shadow-0120"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/koussai-mahdi-25b200283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/koussai.dev?igsh=MW9teXR6a2hldWN2Nw=="
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <a
              href="mailto:koussaiimahdi@gmail.com"
              className="group inline-flex items-center gap-3 rounded-xl bg-white/10 px-6 py-3 text-base font-medium hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/30"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              koussaiimahdi@gmail.com
            </a>

            <a
              href="https://koussaiicode.vercel.app/services"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wide hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore services
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <p>© {new Date().getFullYear()} koussai.dev — Built with</p>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <p>curiosity and a calculator.</p>
          </div>
          
          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/support" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;