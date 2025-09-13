import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <footer className="bg-[#114A2F] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#E7A33C] rounded-full flex items-center justify-center">
                <span className="text-[#1C1C1C] text-xl font-bold">F</span>
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#E7A33C]">
                  FRESH FOOD
                </h3>
                <p className="text-sm text-[#F5E1D2]/80">
                  Fast-food halal à Gaillac
                </p>
              </div>
            </div>

            <p className="text-[#F5E1D2]/90 leading-relaxed mb-6 max-w-md">
              Votre fast-food de confiance à Gaillac. Cuisine halal, fraîche et 
              savoureuse pour toute la famille. Livraison rapide et service de qualité 
              depuis notre ouverture.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-[#1C1C1C]/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#E7A33C]/20 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-[#E7A33C] mb-6">
              📞 Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#E7A33C] mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:0563404372"
                    className="font-semibold hover:text-[#E7A33C] transition-colors"
                  >
                    05 63 40 43 72
                  </a>
                  <p className="text-sm text-[#F5E1D2]/70">Commandes & réservations</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E7A33C] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Avenue de la République</p>
                  <p className="font-semibold">81600 Gaillac</p>
                  <p className="text-sm text-[#F5E1D2]/70">🚚 Livraison 10km</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-bold text-[#E7A33C] mb-6">
              🕐 Horaires
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#F5E1D2]/90">Lundi - Dimanche</span>
                <span className="font-bold text-[#E7A33C]">11h30 - 23h00</span>
              </div>
              <p className="text-sm text-[#F5E1D2]/70">
                Service continu • Ouvert 7j/7
              </p>
              <div className="bg-[#1C1C1C]/20 rounded-lg p-3 mt-4">
                <p className="text-sm text-[#E7A33C] font-semibold">
                  🚀 Commande en ligne 24h/24
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services & Features */}
        <div className="border-t border-[#F5E1D2]/20 mt-12 pt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🥘', title: '100% Halal', desc: 'Certification halal' },
              { icon: '🚚', title: 'Livraison rapide', desc: 'Moins de 30 min' },
              { icon: '💳', title: 'Paiement facile', desc: 'CB, espèces, chèques' },
              { icon: '👨‍🍳', title: 'Fait maison', desc: 'Recettes traditionnelles' }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl mb-2 group-hover:animate-bounce">
                  {feature.icon}
                </div>
                <h5 className="font-semibold text-[#E7A33C] mb-1">
                  {feature.title}
                </h5>
                <p className="text-sm text-[#F5E1D2]/70">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F5E1D2]/20 bg-[#0A2419]">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-[#F5E1D2]/70">
              <span>© 2025 Fresh Food Gaillac.</span>
              <span className="hidden sm:inline">Tous droits réservés.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-[#F5E1D2]/70">
              <span>Fait avec</span>
              <Heart className="w-4 h-4 text-[#C4513C] fill-current" />
              <span>à Gaillac</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#F5E1D2]/70 hover:text-[#E7A33C] transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-[#F5E1D2]/70 hover:text-[#E7A33C] transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;