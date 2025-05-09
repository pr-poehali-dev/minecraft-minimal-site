
import React, { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Purchase {
  id: number;
  username: string;
  avatarUrl: string;
  privilege: string;
  timestamp: string;
  color: string;
}

// Имитация данных о последних покупках
const initialPurchases: Purchase[] = [
  {
    id: 1,
    username: "MinerSteve",
    avatarUrl: "https://mc-heads.net/avatar/MinerSteve",
    privilege: "PREMIUM",
    timestamp: "5 минут назад",
    color: "minecraft-diamond"
  },
  {
    id: 2,
    username: "CreeperFan99",
    avatarUrl: "https://mc-heads.net/avatar/CreeperFan99",
    privilege: "VIP",
    timestamp: "12 минут назад",
    color: "minecraft-gold"
  },
  {
    id: 3,
    username: "DiamondDigger",
    avatarUrl: "https://mc-heads.net/avatar/DiamondDigger",
    privilege: "ULTRA",
    timestamp: "24 минуты назад",
    color: "minecraft-redstone"
  },
  {
    id: 4,
    username: "EndermanPro",
    avatarUrl: "https://mc-heads.net/avatar/EndermanPro",
    privilege: "VIP",
    timestamp: "42 минуты назад",
    color: "minecraft-gold"
  },
  {
    id: 5,
    username: "RedstoneWizard",
    avatarUrl: "https://mc-heads.net/avatar/RedstoneWizard",
    privilege: "PREMIUM",
    timestamp: "1 час назад",
    color: "minecraft-diamond"
  }
];

const RecentPurchases: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>(initialPurchases);

  // Имитируем новые покупки каждые 15 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      const newNames = ["PixelMaster", "LavaBucket", "BlockBreaker", "WoolCollector", "SheepShaver"];
      const privileges = ["VIP", "PREMIUM", "ULTRA"];
      const colors = ["minecraft-gold", "minecraft-diamond", "minecraft-redstone"];
      
      const randomName = newNames[Math.floor(Math.random() * newNames.length)];
      const randomPrivilege = privileges[Math.floor(Math.random() * privileges.length)];
      const randomColor = colors[privileges.indexOf(randomPrivilege)];
      
      const newPurchase: Purchase = {
        id: Date.now(),
        username: randomName + Math.floor(Math.random() * 100),
        avatarUrl: `https://mc-heads.net/avatar/${randomName}`,
        privilege: randomPrivilege,
        timestamp: "только что",
        color: randomColor
      };
      
      setPurchases(prev => [newPurchase, ...prev.slice(0, 4)]);
    }, 15000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-center mb-12">Последние покупки</h2>
        
        <div className="max-w-3xl mx-auto bg-gray-100 border-4 border-minecraft-stone rounded-lg p-6">
          <div className="space-y-4">
            {purchases.map((purchase) => (
              <div 
                key={purchase.id} 
                className="flex items-center bg-white p-4 rounded-md border-2 border-gray-200 animate-fade-in"
              >
                <Avatar className="h-12 w-12 border-2 border-gray-200">
                  <AvatarImage src={purchase.avatarUrl} />
                  <AvatarFallback className="font-minecraft bg-minecraft-dirt text-white">
                    {purchase.username.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="ml-4 flex-1">
                  <p className="font-minecraft">
                    <span className="font-bold">{purchase.username}</span> купил 
                    <span className={`font-bold text-${purchase.color} ml-1`}>{purchase.privilege}</span>
                  </p>
                  <p className="text-gray-500 text-sm">{purchase.timestamp}</p>
                </div>
                
                <div className={`w-3 h-12 bg-${purchase.color}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPurchases;
