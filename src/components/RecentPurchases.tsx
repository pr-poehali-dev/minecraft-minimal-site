import React, { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Purchase {
  id: number;
  username: string;
  avatarUrl: string;
  timestamp: string;
}

// Имитация данных о последних покупках
const initialPurchases: Purchase[] = [
  {
    id: 1,
    username: "MinerSteve",
    avatarUrl: "https://mc-heads.net/avatar/MinerSteve",
    timestamp: "5 минут назад",
  },
  {
    id: 2,
    username: "CreeperFan99",
    avatarUrl: "https://mc-heads.net/avatar/CreeperFan99",
    timestamp: "12 минут назад",
  },
  {
    id: 3,
    username: "DiamondDigger",
    avatarUrl: "https://mc-heads.net/avatar/DiamondDigger",
    timestamp: "24 минуты назад",
  },
  {
    id: 4,
    username: "EndermanPro",
    avatarUrl: "https://mc-heads.net/avatar/EndermanPro",
    timestamp: "42 минуты назад",
  },
  {
    id: 5,
    username: "RedstoneWizard",
    avatarUrl: "https://mc-heads.net/avatar/RedstoneWizard",
    timestamp: "1 час назад",
  },
];

const RecentPurchases: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>(initialPurchases);

  // Имитируем новые покупки каждые 15 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      const newNames = [
        "PixelMaster",
        "LavaBucket",
        "BlockBreaker",
        "WoolCollector",
        "SheepShaver",
      ];

      const randomName = newNames[Math.floor(Math.random() * newNames.length)];

      const newPurchase: Purchase = {
        id: Date.now(),
        username: randomName + Math.floor(Math.random() * 100),
        avatarUrl: `https://mc-heads.net/avatar/${randomName}`,
        timestamp: "только что",
      };

      setPurchases((prev) => [newPurchase, ...prev.slice(0, 4)]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-center mb-6">
          Последние покупки
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Присоединяйтесь к игрокам, которые уже получили доступ на наш сервер
        </p>

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
                    <span className="font-bold text-minecraft-gold ml-1">
                      проходку
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">{purchase.timestamp}</p>
                </div>

                <div className="w-3 h-12 bg-minecraft-gold"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xl font-minecraft">
            Присоединяйтесь к{" "}
            <span className="text-minecraft-gold">игрокам</span>, которые уже с
            нами!
          </p>
          <Button className="mt-4 bg-minecraft-gold hover:bg-minecraft-gold/80 font-minecraft text-lg border-b-2 border-black/20 py-6 px-8">
            Купить проходку за 5 ₽
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentPurchases;
