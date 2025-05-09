import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const PrivilegeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-center mb-6">
          Проходка на сервер
        </h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          Получите доступ ко всем возможностям нашего игрового мира всего за 5
          рублей!
        </p>

        <div className="max-w-md mx-auto">
          <Card className="border-4 border-minecraft-gold relative overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-xl">
            <div className="absolute top-5 right-0 bg-minecraft-gold text-white font-minecraft px-4 py-1 transform rotate-45 translate-x-8">
              Хит продаж
            </div>
            <CardHeader className="bg-minecraft-gold text-white text-center py-6">
              <CardTitle className="font-minecraft text-3xl drop-shadow-md">
                ПРОХОДКА
              </CardTitle>
              <CardDescription className="text-white/90 font-minecraft text-lg">
                5 ₽
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-4">
              <ul className="space-y-3">
                {[
                  "Доступ ко всем игровым мирам",
                  "Возможность строить и создавать",
                  "Общение в игровом чате",
                  "Участие в событиях сервера",
                  "Дружелюбное сообщество игроков",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center font-minecraft">
                    <Icon
                      name="Check"
                      className="text-minecraft-gold mr-2 h-5 w-5"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-minecraft-gold hover:bg-minecraft-gold/80 font-minecraft text-lg border-b-2 border-black/20">
                Купить сейчас
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-8 text-center">
            <p className="font-minecraft text-sm text-gray-600">
              * Проходка даёт постоянный доступ к серверу без дополнительных
              платежей
            </p>
            <p className="font-minecraft text-sm text-gray-600 mt-1">
              * Более 10,000 игроков уже на сервере
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivilegeSection;
