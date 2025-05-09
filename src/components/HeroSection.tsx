
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1607634341601-331868c9f2b4?q=80&w=1920')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-minecraft-obsidian/60"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-minecraft text-white mb-4 drop-shadow-lg">
            Покупай привилегии на нашем сервере
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-minecraft">
            Получи доступ к уникальным возможностям и стань особенным игроком на нашем сервере Minecraft
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button 
              className="bg-minecraft-gold hover:bg-minecraft-gold/80 text-minecraft-obsidian font-minecraft text-lg py-6 border-b-4 border-yellow-600"
            >
              Купить привилегии
            </Button>
            <Button 
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-minecraft text-lg py-6"
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="animate-minecraft-float mt-12">
            <div className="w-16 h-16 mx-auto bg-minecraft-dirt border-2 border-black grid grid-cols-2">
              <div className="bg-minecraft-dirt border border-black/30"></div>
              <div className="bg-minecraft-dirt border border-black/20"></div>
              <div className="bg-minecraft-dirt border border-black/20"></div>
              <div className="bg-minecraft-dirt border border-black/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
