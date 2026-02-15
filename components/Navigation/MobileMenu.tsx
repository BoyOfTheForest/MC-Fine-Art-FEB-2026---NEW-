import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from '../../types';
import { ChevronDown, ChevronUp, X, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../Button';

interface MobileMenuItemProps {
  item: NavItem;
  onClose: () => void;
  level?: number;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ item, onClose, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const indent = level * 16;

  return (
    <div className="border-b border-gray-50 last:border-0">
      <div 
        className="flex items-center justify-between py-4 pr-4" 
        style={{ paddingLeft: `${20 + indent}px` }}
      >
        {item.path && !hasChildren ? (
          <Link 
            to={item.path} 
            className="text-base font-medium text-gray-900 w-full"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ) : (
          <button 
            onClick={toggle}
            className="flex items-center justify-between w-full text-left text-base font-medium text-gray-900"
          >
            {item.label}
            {hasChildren && (
              isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />
            )}
          </button>
        )}
      </div>
      
      {hasChildren && isOpen && (
        <div className="bg-gray-50">
          {item.children?.map((child, index) => (
            <MobileMenuItem 
              key={`${child.label}-${index}`} 
              item={child} 
              onClose={onClose} 
              level={level + 1} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-[300px] bg-white shadow-2xl overflow-y-auto flex flex-col">
        <div className="p-5 flex justify-end border-b border-gray-100">
          <button onClick={onClose} className="p-2 -mr-2 text-gray-500 hover:text-black">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {items.map((item, index) => (
            <MobileMenuItem key={index} item={item} onClose={onClose} />
          ))}
        </div>
        
        <div className="p-6 border-t border-gray-100 bg-white space-y-6">
            <Button to="/quiz" onClick={onClose} className="w-full">
                Take the Art Quiz
            </Button>
            
            <div className="flex justify-center space-x-6 text-gray-400">
               <a href="#" className="hover:text-black transition-colors"><Instagram size={20} /></a>
               <a href="#" className="hover:text-black transition-colors"><Facebook size={20} /></a>
               <a href="#" className="hover:text-black transition-colors"><Twitter size={20} /></a>
               <a href="#" className="hover:text-black transition-colors"><Linkedin size={20} /></a>
            </div>
        </div>
      </div>
    </div>
  );
};