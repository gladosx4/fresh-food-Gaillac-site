import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#114A2F]/80 via-[#114A2F]/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl">
          <div className="space-y-6 lg:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[#E7A33C] text-[#1C1C1C] px-4 py-2 rounded-full font-medium text-sm lg:text-base animate-bounce">
              <Star className="w-4 h-4 fill-current" />
              <span>Fast-food #1 à Gaillac</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              FRESH FOOD
              <span className="block text-[#E7A33C] mt-2">
                Goûtez la différence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-[#F5E1D2] max-w-2xl leading-relaxed">
              Des saveurs authentiques, des ingrédients frais et une cuisine halal qui régale 
              toute la famille. Découvrez notre univers gourmand !
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
              <button className="group bg-[#C4513C] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#E7A33C] hover:text-[#1C1C1C] transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center space-x-3">
                <span>🍔 Découvrir le menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-transparent border-2 border-[#E7A33C] text-[#E7A33C] px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#E7A33C] hover:text-[#1C1C1C] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-3">
                <span>📞 Nous appeler</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-8">
              <div className="flex items-center space-x-2 text-[#F5E1D2]">
                <div className="w-3 h-3 bg-[#E7A33C] rounded-full"></div>
                <span className="font-medium">Livraison rapide 🚚</span>
              </div>
              <div className="flex items-center space-x-2 text-[#F5E1D2]">
                <div className="w-3 h-3 bg-[#E7A33C] rounded-full"></div>
                <span className="font-medium">100% Halal 🟢</span>
              </div>
              <div className="flex items-center space-x-2 text-[#F5E1D2]">
                <div className="w-3 h-3 bg-[#E7A33C] rounded-full"></div>
                <span className="font-medium">Ouvert 7j/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-[#E7A33C] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#E7A33C] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;