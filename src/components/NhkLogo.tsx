import React, { useState } from 'react';

interface NhkLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const NhkLogo: React.FC<NhkLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipText = 'Nguyễn Hữu Kính- Giáo viên trường Tiểu học Hoài Nhơn Nam';

  // Sizing for the standalone "NHK" logo
  const sizeClasses = {
    sm: 'w-10 h-8 text-[12px]',
    md: 'w-13 h-9.5 text-[14px]',
    lg: 'w-16 h-11 text-[16px]',
  };

  return (
    <div
      className={`relative inline-flex items-center group cursor-pointer select-none ${className}`}
      onMouseEnter={() => setIsTooltipOpen(true)}
      onMouseLeave={() => setIsTooltipOpen(false)}
      onClick={() => setIsTooltipOpen((prev) => !prev)}
      title={tooltipText}
      aria-label={tooltipText}
    >
      {/* Standalone NHK Logo Button / Badge */}
      <div
        className={`flex items-center justify-center font-black tracking-wider rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-sm border border-indigo-200/60 transition-all duration-200 group-hover:scale-105 group-hover:shadow-md group-hover:shadow-indigo-300/40 group-hover:from-blue-700 group-hover:to-violet-700 ${sizeClasses[size]}`}
      >
        <span className="drop-shadow-xs">NHK</span>
      </div>

      {/* Floating Hover Tooltip */}
      <div
        role="tooltip"
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 pointer-events-none transition-all duration-200 origin-top whitespace-nowrap ${
          isTooltipOpen
            ? 'opacity-100 scale-100 translate-y-0 visible'
            : 'opacity-0 scale-95 -translate-y-1 invisible'
        }`}
      >
        {/* Tooltip arrow */}
        <div className="w-2.5 h-2.5 bg-slate-900 border-l border-t border-slate-700 transform rotate-45 mx-auto -mb-1.5" />

        {/* Tooltip content box */}
        <div className="px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold shadow-xl border border-slate-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
          <span>{tooltipText}</span>
        </div>
      </div>
    </div>
  );
};
