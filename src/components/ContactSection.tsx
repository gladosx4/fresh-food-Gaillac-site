import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, Mail } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#F5E1D2]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#114A2F] text-white px-4 py-2 rounded-full font-medium text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>Contact & Localisation</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#114A2F] mb-4">
            NOUS TROUVER
            <span className="block text-[#C4513C]">& NOUS CONTACTER</span>
          </h2>
          <p className="text-lg text-[#1C1C1C]/70 max-w-2xl mx-auto">
            Venez nous rendre visite ou contactez-nous pour vos commandes et réservations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#C4513C] p-3 rounded-xl text-white group-hover:bg-[#E7A33C] group-hover:text-[#1C1C1C] transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#114A2F] mb-2">
                      📞 Téléphone
                    </h3>
                    <a 
                      href="tel:0563404372"
                      className="text-2xl font-extrabold text-[#C4513C] mb-1 hover:text-[#E7A33C] transition-colors"
                    >
                      05 63 40 43 72
                    </a>
                    <p className="text-[#1C1C1C]/70">
                      Pour vos commandes et réservations
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#114A2F] p-3 rounded-xl text-white group-hover:bg-[#E7A33C] group-hover:text-[#1C1C1C] transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#114A2F] mb-2">
                      📍 Adresse
                    </h3>
                    <p className="text-lg font-semibold text-[#1C1C1C] mb-1">
                      Avenue de la République
                    </p>
                    <p className="text-lg font-semibold text-[#1C1C1C] mb-2">
                      81600 Gaillac
                    </p>
                    <p className="text-[#1C1C1C]/70">
                      🚚 Livraison dans un rayon de 10km
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E7A33C] p-3 rounded-xl text-[#1C1C1C] group-hover:bg-[#C4513C] group-hover:text-white transition-all duration-300">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#114A2F] mb-3">
                      🕐 Horaires
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-[#1C1C1C]">Lundi - Dimanche</span>
                        <span className="font-bold text-[#C4513C]">11h30 - 23h00</span>
                      </div>
                      <p className="text-sm text-[#1C1C1C]/70">
                        Service continu toute la journée
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#114A2F] mb-6 text-center">
                💬 Nous écrire
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#114A2F] mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E1D2] focus:border-[#E7A33C] focus:outline-none transition-colors bg-[#F5E1D2]/30"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#114A2F] mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E1D2] focus:border-[#E7A33C] focus:outline-none transition-colors bg-[#F5E1D2]/30"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#114A2F] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#F5E1D2] focus:border-[#E7A33C] focus:outline-none transition-colors bg-[#F5E1D2]/30 resize-none"
                    placeholder="Votre message, demande de réservation..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C4513C] text-white py-4 rounded-xl font-semibold hover:bg-[#E7A33C] hover:text-[#1C1C1C] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            {/* Google Maps */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#114A2F] mb-4 text-center">
                🗺️ Nous localiser
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.924483835293!2d1.8958349765408171!3d43.898830736509105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12add32527cc1207%3A0xe4e6e3fe531096ec!2sFRESH%20FOOD!5e0!3m2!1sfr!2sfr!4v1757757751563!5m2!1sfr!2sfr" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 lg:h-80"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-[#114A2F] to-[#C4513C] rounded-2xl p-8 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            🚀 Prêt à commander ?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Appelez-nous maintenant ou passez directement en magasin !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0563404372"
              className="bg-white text-[#114A2F] px-8 py-4 rounded-xl font-bold hover:bg-[#F5E1D2] transition-all duration-300 hover:scale-105 shadow-lg text-center"
            >
              📞 05 63 40 43 72
            </a>
            <a 
              href="https://www.google.com/maps/place/FRESH+FOOD/@43.8988307,1.8958350,17z/data=!3m1!4b1!4m6!3m5!1s0x12add32527cc1207:0xe4e6e3fe531096ec!8m2!3d43.8988307!4d1.8984099!16s%2Fg%2F11y3k5k5k5"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E7A33C] text-[#1C1C1C] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg text-center"
            >
              🗺️ Voir sur Google Maps
            </a>
            >
              📞 05 63 40 43 72
            </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;