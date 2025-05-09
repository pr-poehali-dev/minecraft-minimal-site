import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1607634341601-331868c9f2b4?q=80&w=1920')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-minecraft-obsidian/60"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-minecraft text-white mb-4 drop-shadow-lg">
            Проходка на Minecraft сервер
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 font-minecraft">
            Всего за 5 рублей получи доступ ко всем возможностям нашего сервера
          </p>

          <div className="max-w-md mx-auto">
            <Button className="w-full bg-minecraft-gold hover:bg-minecraft-gold/80 text-minecraft-obsidian font-minecraft text-lg py-6 border-b-4 border-yellow-600">
              Купить проходку за 5 ₽
            </Button>

            <p className="text-white/80 mt-4 font-minecraft text-sm">
              Более 10,000 игроков уже на сервере!
            </p>
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
