
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-minecraft-dirt border-b-4 border-minecraft-stone px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-minecraft text-white text-2xl">Mine<span className="text-minecraft-gold">Store</span></span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <NavLink href="#" active>Главная</NavLink>
          <NavLink href="#">Привилегии</NavLink>
          <NavLink href="#">Правила</NavLink>
          <NavLink href="#">Поддержка</NavLink>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            className="bg-minecraft-stone border-2 border-minecraft-gold text-white font-minecraft hover:bg-minecraft-obsidian"
          >
            <Icon name="User" className="mr-2" />
            Войти
          </Button>
          
          <Button 
            className="mobile-menu md:hidden"
            variant="ghost"
            size="icon"
          >
            <Icon name="Menu" className="text-white" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => (
  <a 
    href={href} 
    className={`font-minecraft text-lg transition-colors hover:text-minecraft-gold ${active ? 'text-minecraft-gold' : 'text-white'}`}
  >
    {children}
  </a>
);

export default Navigation;
