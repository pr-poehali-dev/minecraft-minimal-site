
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PrivilegeProps {
  title: string;
  price: number;
  features: string[];
  color: string;
  popular?: boolean;
}

const privileges: PrivilegeProps[] = [
  {
    title: "VIP",
    price: 199,
    features: [
      "Префикс [VIP]",
      "Команда /fly в лобби",
      "3 дома вместо 1",
      "Цветной чат"
    ],
    color: "minecraft-gold"
  },
  {
    title: "PREMIUM",
    price: 499,
    features: [
      "Префикс [PREMIUM]",
      "Все возможности VIP",
      "Команда /hat",
      "5 домов",
      "Кит-набор PREMIUM"
    ],
    color: "minecraft-diamond",
    popular: true
  },
  {
    title: "ULTRA",
    price: 999,
    features: [
      "Префикс [ULTRA]",
      "Все возможности PREMIUM",
      "Команда /god",
      "Бесконечные дома",
      "Кит-набор ULTRA",
      "/workbench, /enderchest"
    ],
    color: "minecraft-redstone"
  }
];

const PrivilegeCard: React.FC<PrivilegeProps> = ({ title, price, features, color, popular }) => {
  return (
    <Card className={`border-4 border-minecraft-${color} relative overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl`}>
      {popular && (
        <div className="absolute top-5 right-0 bg-minecraft-diamond text-white font-minecraft px-4 py-1 transform rotate-45 translate-x-8">
          Популярно
        </div>
      )}
      <CardHeader className={`bg-minecraft-${color} text-white text-center py-6`}>
        <CardTitle className="font-minecraft text-3xl drop-shadow-md">{title}</CardTitle>
        <CardDescription className="text-white/90 font-minecraft text-lg">
          {price} ₽
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center font-minecraft">
              <Icon name="Check" className={`text-minecraft-${color} mr-2 h-5 w-5`} />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className={`w-full bg-minecraft-${color} hover:bg-minecraft-${color}/80 font-minecraft text-lg border-b-2 border-black/20`}>
          Купить сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

const PrivilegeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-minecraft text-center mb-12">Популярные привилегии</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {privileges.map((privilege, index) => (
            <PrivilegeCard key={index} {...privilege} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivilegeSection;
