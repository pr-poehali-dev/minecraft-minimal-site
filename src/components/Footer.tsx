
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-minecraft-obsidian text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-minecraft text-2xl mb-4">Mine<span className="text-minecraft-gold">Store</span></h3>
            <p className="text-gray-400">
              Лучший магазин привилегий для вашего игрового опыта в Minecraft.
            </p>
          </div>
          
          <div>
            <h4 className="font-minecraft text-xl mb-4">Навигация</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Главная</FooterLink>
              <FooterLink href="#">Привилегии</FooterLink>
              <FooterLink href="#">Правила</FooterLink>
              <FooterLink href="#">Поддержка</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-minecraft text-xl mb-4">Контакты</h4>
            <ul className="space-y-2">
              <FooterContactItem icon="Mail" text="support@minestore.ru" />
              <FooterContactItem icon="MessageSquare" text="Discord: MineStore" />
              <FooterContactItem icon="Headphones" text="Техподдержка 24/7" />
            </ul>
          </div>
          
          <div>
            <h4 className="font-minecraft text-xl mb-4">Присоединяйтесь</h4>
            <div className="flex space-x-4">
              <SocialButton icon="Github" />
              <SocialButton icon="Instagram" />
              <SocialButton icon="Youtube" />
              <SocialButton icon="Twitch" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500">
          <p className="font-minecraft">
            &copy; 2025 MineStore. Все права защищены.
          </p>
          <div className="flex justify-center mt-2 space-x-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-minecraft-gold transition-colors">
      {children}
    </a>
  </li>
);

interface FooterContactItemProps {
  icon: string;
  text: string;
}

const FooterContactItem: React.FC<FooterContactItemProps> = ({ icon, text }) => (
  <li className="flex items-center text-gray-400">
    <Icon name={icon} className="mr-2 h-5 w-5 text-minecraft-gold" />
    <span>{text}</span>
  </li>
);

interface SocialButtonProps {
  icon: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon }) => (
  <a 
    href="#" 
    className="w-10 h-10 bg-gray-800 rounded-md flex items-center justify-center hover:bg-minecraft-gold transition-colors"
  >
    <Icon name={icon} className="h-5 w-5" />
  </a>
);

export default Footer;
