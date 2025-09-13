import React from 'react';
import { Gift, Clock, Users } from 'lucide-react';

const OffersSection = () => {
  const offers = [
    {
      id: 1,
      title: "2 Pizzas achetées",
      subtitle: "= la 3ème OFFERTE",
      description: "Valable sur toutes nos pizzas, tous les jours !",
      icon: "🍕",
      color: "from-[#C4513C] to-[#E7A33C]",
      badge: "POPULAIRE"
    },
    {
      id: 2,
      title: "Menu Étudiant",
      subtitle: "À seulement 7€",
      description: "Sandwich + Frites + Boisson pour tous les étudiants",
      icon: "🎓",
      color: "from-[#114A2F] to-[#E7A33C]",
      badge: "NOUVEAU"
    },
    {
      id: 3,
      title: "Happy Hour",
      subtitle: "17h - 19h",
      description: "-20% sur tous les menus burgers et tacos",
      icon: "⏰",
      color: "from-[#E7A33C] to-[#C4513C]",
      badge: "LIMITÉ"
    }
  ];

  return (
    <section id="offres" className="py-16 lg:py-24 bg-gradient-to-br from-[#F5E1D2] to-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#E7A33C] text-[#1C1C1C] px-4 py-2 rounded-full font-medium text-sm mb-4">
            <Gift className="w-4 h-4" />
            <span>Offres spéciales</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#114A2F] mb-4">
            NOS PROMOS
            <span className="block text-[#C4513C]">DU MOMENT</span>
          </h2>
          <p className="text-lg text-[#1C1C1C]/70 max-w-2xl mx-auto">
            Profitez de nos offres exceptionnelles pour vous régaler à prix mini !
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {offers.map((offer, index) => (
            <div
              key={offer.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-90`}></div>
              
              {/* Card Content */}
              <div className="relative p-6 lg:p-8 text-white">
                {/* Badge */}
                <div className="absolute -top-2 -right-2 bg-white text-[#1C1C1C] px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
                  {offer.badge}
                </div>

                {/* Icon */}
                <div className="text-4xl lg:text-5xl mb-4 animate-bounce">
                  {offer.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  {offer.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-2xl lg:text-3xl font-extrabold mb-3 animate-pulse">
                  {offer.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm lg:text-base opacity-90 leading-relaxed">
                  {offer.description}
                </p>

                {/* CTA Button */}
                <button className="mt-6 w-full bg-white text-[#1C1C1C] py-3 rounded-xl font-semibold hover:bg-[#F5E1D2] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
                  Profiter de l'offre
                </button>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-2xl group-hover:border-white/40 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#1C1C1C]/70 mb-4">
            Plus d'offres et de promotions en magasin !
          </p>
          <button className="inline-flex items-center space-x-2 bg-[#114A2F] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#C4513C] transition-all duration-300 hover:scale-105 shadow-lg">
            <span>Découvrir toutes nos offres</span>
            <Gift className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;