"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  options: Option[];
  className?: string;
  disabled?: boolean;
}

export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  placeholder = "Pilih opsi...",
  options,
  className = "",
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "Escape" && isOpen) {
      e.preventDefault();
      e.stopPropagation(); // Don't trigger quick exit when closing dropdown
      setIsOpen(false);
      triggerRef.current?.focus();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(0);
      } else {
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        setFocusedIndex(options.length - 1);
      } else {
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
      }
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (isOpen && focusedIndex >= 0 && focusedIndex < options.length) {
        onChange(options[focusedIndex].value);
        setIsOpen(false);
        triggerRef.current?.focus();
      } else {
        setIsOpen((prev) => !prev);
      }
    } else if (e.key === "Tab" && isOpen) {
      setIsOpen(false);
    }
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      onKeyDown={handleKeyDown}
    >
      {/* Hidden input for form state */}
      {name && <input type="hidden" name={name} value={value} />}

      {/* Trigger Button */}
      <button
        ref={triggerRef}
        id={id}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={`w-full h-[48px] px-3.5 bg-cream border rounded-[8px] flex items-center justify-between text-[14px] text-left transition-colors duration-150 focus:outline-none ${
          isOpen
            ? "border-plum ring-1 ring-plum/20"
            : "border-line hover:border-[#D1B8CE]"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`truncate pr-2 select-none ${
            selectedOption ? "text-ink font-medium" : "text-[#948891]"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        {/* Clean, well-spaced Chevron Arrow */}
        <ChevronDown
          className={`w-4 h-4 text-[#7A6B77] shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-plum" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            role="listbox"
            tabIndex={-1}
            className="absolute top-[calc(100%+6px)] left-0 right-0 w-full bg-paper border border-line rounded-[10px] shadow-xl py-1.5 z-50 overflow-hidden max-h-[260px] overflow-y-auto"
          >
            {options.map((opt, index) => {
              const isSelected = opt.value === value;
              const isFocused = index === focusedIndex;

              return (
                <button
                  key={opt.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(opt.value)}
                  onMouseEnter={() => setFocusedIndex(index)}
                  className={`w-full px-3.5 py-2.5 text-[14px] text-left transition-colors flex items-center justify-between select-none cursor-pointer ${
                    isSelected
                      ? "bg-cream text-plum font-semibold"
                      : isFocused
                      ? "bg-cream/60 text-ink"
                      : "text-ink hover:bg-cream/60"
                  }`}
                >
                  <span className="truncate pr-2">{opt.label}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-plum shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
