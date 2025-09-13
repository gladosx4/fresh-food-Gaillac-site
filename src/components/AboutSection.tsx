import React from 'react';
import { Truck, Award, Clock, Heart } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "100% Halal",
      description: "Tous nos produits sont certifiés halal pour respecter vos convictions.",
      color: "text-[#114A2F]"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Livraison rapide",
      description: "Commandez et recevez vos plats chauds en moins de 30 minutes.",
      color: "text-[#C4513C]"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Fait maison",
      description: "Nos recettes sont préparées avec amour dans notre cuisine.",
      color: "text-[#E7A33C]"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Ouvert 7j/7",
      description: "De 11h30 à 23h00, nous sommes là pour vous régaler.",
      color: "text-[#114A2F]"
    }
  ];

  return (
    <section id="apropos" className="py-16 lg:py-24 bg-gradient-to-br from-[#114A2F] to-[#1C1C1C] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🍕</div>
        <div className="absolute top-32 right-20 text-4xl">🍔</div>
        <div className="absolute bottom-20 left-20 text-5xl">🌯</div>
        <div className="absolute bottom-32 right-10 text-3xl">🍟</div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-[#E7A33C] text-[#1C1C1C] px-4 py-2 rounded-full font-medium text-sm mb-6">
              <span>🏠</span>
              <span>À propos</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-extrabold mb-6">
              FRESH FOOD
              <span className="block text-[#E7A33C]">Votre fast-food de confiance à Gaillac</span>
            </h2>

            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-[#F5E1D2]">
                Depuis notre ouverture, nous nous sommes donnés pour mission de vous proposer 
                une cuisine savoureuse, fraîche et accessible à tous. Notre équipe passionnée 
                prépare chaque jour des plats généreux avec des ingrédients de qualité.
              </p>

              <p className="text-[#F5E1D2]/80">
                De nos pizzas croustillantes à nos burgers juteux, en passant par nos tacos 
                généreux et nos grillades parfumées, chaque bouchée est une invitation au voyage 
                culinaire. Et parce que nous respectons vos valeurs, tous nos produits sont 
                certifiés halal.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-[#C4513C] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#E7A33C] hover:text-[#1C1C1C] transition-all duration-300 hover:scale-105 shadow-lg">
                Nous contacter 📞
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#F5E1D2]/80 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: "1000+", label: "Clients satisfaits", icon: "😊" },
              { number: "50+", label: "Plats au menu", icon: "🍽️" },
              { number: "7j/7", label: "Ouvert pour vous", icon: "🕐" },
              { number: "< 30min", label: "Temps de livraison", icon: "⚡" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-2xl lg:text-3xl mb-2 group-hover:animate-bounce">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-extrabold text-[#E7A33C] mb-1">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-[#F5E1D2]/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;