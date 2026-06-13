'use client';

import { useState, useEffect, useRef } from 'react';

interface Option {
  value: string;
  label: string;
}

interface AnimatedSelectProps {
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (val: string) => void;
}

export function AnimatedSelect({ placeholder, options, value, onChange }: AnimatedSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = options.find(o => o.value === value);
  const panelMaxHeight = open ? `${options.length * 46 + 8}px` : '0px';

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={`w-full h-12 px-4 rounded-xl border text-[14px] flex items-center justify-between bg-white transition-all duration-200 ${
          open
            ? 'border-[#006874] ring-2 ring-[#006874]/15 shadow-sm'
            : 'border-[#E2E3E1] hover:border-[#B0BEC5]'
        }`}
      >
        <span className={selected ? 'text-[#1A1C1B] font-medium' : 'text-[#9EADB4]'}>
          {selected ? selected.label : placeholder}
        </span>
        <span
          className="material-symbols-outlined text-[20px] text-[#006874]"
          style={{
            display: 'inline-block',
            transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          expand_more
        </span>
      </button>

      {/* Dropdown panel */}
      <div
        style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          left: 0,
          right: 0,
          zIndex: 100,
          maxHeight: panelMaxHeight,
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <div className="bg-white rounded-xl border border-[#E2E3E1] shadow-[0_8px_32px_rgba(0,0,0,0.1)] py-1 overflow-hidden">
          {options.map((opt, i) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false); }}
              className={`w-full px-4 py-[11px] text-left text-[14px] flex items-center justify-between transition-colors ${
                value === opt.value
                  ? 'bg-[#E0F2F1] text-[#006874] font-semibold'
                  : 'text-[#37474F] hover:bg-[#F4F4F2] hover:text-[#1A1C1B]'
              }`}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateX(0)' : 'translateX(-6px)',
                transition: `opacity 0.2s ease ${i * 0.035}s, transform 0.2s ease ${i * 0.035}s`,
              }}
            >
              {opt.label}
              {value === opt.value && (
                <span className="material-symbols-outlined text-[16px] text-[#006874]">check</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
