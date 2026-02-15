import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../../types';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface MenuItemProps {
  item: NavItem;
  isActive: boolean;
}

const MegaMenuContent: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-8 p-8 max-w-7xl mx-auto">
      {items.map((column, colIdx) => (
        <div key={colIdx} className="flex flex-col">
          <div className="border-b border-gray-200 pb-2 mb-6">
             <span className="text-sm font-semibold text-black uppercase tracking-widest">
               {column.label}
             </span>
          </div>

          <div className="flex flex-col">
            {column.children?.map((item, itemIdx) => {
              const hasChildren = item.children && item.children.length > 0;
              
              if (hasChildren) {
                return (
                  <div key={itemIdx} className={`${itemIdx > 0 ? 'mt-8' : ''}`}>
                     <span className="block text-xs font-bold uppercase tracking-widest text-gray-900 mb-3">
                       {item.label}
                     </span>
                     <div className="flex flex-col space-y-1.5">
                       {item.children!.map((subItem, subIdx) => {
                         const isSubGroup = subItem.children && subItem.children.length > 0;
                         if (isSubGroup) {
                           return (
                             <div key={subIdx} className="mt-3 mb-1">
                               <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                                 {subItem.label}
                               </span>
                               <div className="pl-0 flex flex-col space-y-1.5">
                                 {subItem.children!.map((leaf, leafIdx) => (
                                   <Link 
                                     key={leafIdx}
                                     to={leaf.path || '#'}
                                     className="block text-[13px] text-gray-500 hover:text-black transition-colors"
                                   >
                                     {leaf.label}
                                   </Link>
                                 ))}
                               </div>
                             </div>
                           );
                         }
                         
                         return (
                           <Link 
                             key={subIdx}
                             to={subItem.path || '#'}
                             className="block text-[13px] text-gray-500 hover:text-black transition-colors"
                           >
                             {subItem.label}
                           </Link>
                         );
                       })}
                     </div>
                  </div>
                );
              }

              return (
                <Link 
                  key={itemIdx} 
                  to={item.path || '#'} 
                  className={`block text-[13px] text-gray-500 hover:text-black transition-colors ${itemIdx > 0 ? 'mt-3' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

const StandardDropdown: React.FC<{ items: NavItem[]; depth?: number }> = ({ items, depth = 0 }) => {
  return (
    <div 
      className={`
        absolute bg-white border border-gray-100 shadow-xl min-w-[220px] py-2 z-50
        ${depth === 0 ? 'top-full left-0' : 'top-0 left-full'}
      `}
      style={{ animation: 'fadeIn 0.2s ease-out' }}
    >
      {items.map((child, index) => {
         const hasChildren = child.children && child.children.length > 0;
         return (
           <div key={index} className="relative group/sub">
              {child.path && !hasChildren ? (
                <Link 
                  to={child.path}
                  className="block text-sm text-gray-700 hover:bg-gray-50 hover:text-black px-5 py-3 whitespace-nowrap"
                >
                  {child.label}
                </Link>
              ) : (
                <div className="flex items-center justify-between text-sm text-gray-700 hover:bg-gray-50 hover:text-black px-5 py-3 cursor-default">
                  {child.label}
                  {hasChildren && <ChevronRight size={14} className="ml-2 opacity-50" />}
                </div>
              )}
              
              {hasChildren && (
                 <div className="hidden group-hover/sub:block">
                   <StandardDropdown items={child.children!} depth={depth + 1} />
                 </div>
              )}
           </div>
         );
      })}
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ item, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const hasChildren = item.children && item.children.length > 0;
  const isMega = item.menuType === 'mega';

  return (
    <div 
      className={`flex items-center h-full ${isMega ? '' : 'relative'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link 
        to={item.path || '#'}
        className={`flex items-center text-sm font-medium uppercase tracking-wider py-4 px-4 transition-colors ${isActive ? 'text-black border-b-2 border-black' : 'text-gray-900 hover:text-gray-600'}`}
        onClick={(e) => !item.path && e.preventDefault()}
        aria-current={isActive ? 'page' : undefined}
      >
        {item.label}
        {hasChildren && <ChevronDown size={14} className="ml-1 opacity-50" />}
      </Link>

      {hasChildren && isOpen && (
        isMega ? (
          <div 
            className="absolute left-0 top-full w-full bg-white border-t border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] z-50"
            style={{ animation: 'fadeIn 0.2s ease-out' }}
          >
             <MegaMenuContent items={item.children!} />
          </div>
        ) : (
          <StandardDropdown items={item.children!} />
        )
      )}
    </div>
  );
};

interface DesktopMenuProps {
  items: NavItem[];
}

export const DesktopMenu: React.FC<DesktopMenuProps> = ({ items }) => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center h-full">
      {items.map((item, index) => {
        // Check if current path starts with item path (simple active state logic)
        const isActive = item.path ? location.pathname.startsWith(item.path) : false;
        return <MenuItem key={index} item={item} isActive={isActive} />;
      })}
    </nav>
  );
};