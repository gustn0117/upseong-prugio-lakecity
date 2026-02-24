"use client";

import { useState, useEffect, useRef } from "react";
import ElifLogo from "./ElifLogo";

interface MenuItem {
  id: string;
  label: string;
  subTabId?: string;
}

const menuItems: MenuItem[] = [
  { id: "business", label: "사업개요" },
  { id: "location", label: "입지환경" },
  { id: "premium", label: "프리미엄" },
];

interface HeaderProps {
  activeTab: string;
  onTabChange: (tabId: string, subTabId?: string) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(activeTab === "home");
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [activeTab]);

  const isDark = isHome && !scrolled;

  const headerBg = isDark
    ? "bg-transparent"
    : "bg-white/97 backdrop-blur-lg shadow-sm";

  const textColor = isDark ? "text-white" : "text-gray-900";

  const navItemClass = (itemId: string) => {
    const isActive = activeTab === itemId;
    if (isActive) return isDark ? "text-white font-bold" : "text-elif-green font-bold";
    return isDark
      ? "text-white/60 hover:text-white"
      : "text-gray-500 hover:text-gray-900";
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      {/* Hero readability gradient */}
      {isDark && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-transparent pointer-events-none" />
      )}

      {/* Bottom accent line */}
      {!isDark && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />
      )}

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo (Left) */}
          <button
            onClick={() => { setMobileOpen(false); onTabChange("home"); }}
            className="flex items-center cursor-pointer flex-shrink-0"
          >
            <ElifLogo white={isDark} size="md" showSub={false} />
          </button>

          {/* Nav + CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`relative px-5 xl:px-6 py-2 text-[13px] tracking-[0.5px] transition-all duration-300 ${navItemClass(item.id)}`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-elif-lake" />
                )}
              </button>
            ))}

            <div className="ml-4 flex items-center gap-4">
              <a
                href="tel:18000000"
                className={`hidden xl:flex items-center gap-1.5 text-[13px] font-bold tracking-wider transition-colors duration-300 ${isDark ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-elif-green"}`}
              >
                <svg className="w-3.5 h-3.5 text-elif-lake" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                1800-0000
              </a>
              <button
                onClick={() => onTabChange("register")}
                className={`px-5 py-2 text-[12px] font-semibold tracking-wider rounded-full transition-all duration-300
                  ${isDark
                    ? "border border-elif-lake/50 text-elif-lake hover:bg-elif-lake/10"
                    : "bg-elif-green text-white hover:bg-elif-green-light"
                  }`}
              >
                관심고객등록
              </button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <a href="tel:18000000" className={`p-1.5 ${textColor}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <button className={`p-1.5 ${textColor}`} onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ═══ Mobile Menu — Slide-in Sidebar ═══ */}
      <div className={`lg:hidden fixed inset-0 top-[80px] z-50 transition-all duration-400 ${
        mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-400 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Sidebar Panel */}
        <div className={`absolute top-0 right-0 w-[280px] max-w-[80vw] h-full bg-white shadow-2xl transition-transform duration-400 ease-out overflow-y-auto ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}>
          <div className="p-5">
            {/* CTA at top */}
            <button
              onClick={() => { onTabChange("register"); setMobileOpen(false); }}
              className="w-full py-3.5 bg-elif-green text-white text-[14px] font-bold tracking-wider rounded-xl mb-5 hover:bg-elif-green-light transition-colors"
            >
              관심고객등록
            </button>

            {/* Menu Items */}
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => { onTabChange(item.id); setMobileOpen(false); }}
                  className={`flex items-center justify-between w-full text-left py-3.5 text-[14px] font-medium transition-colors
                    ${activeTab === item.id ? "text-elif-green font-bold" : "text-gray-700"}`}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && <span className="w-1.5 h-1.5 rounded-full bg-elif-lake" />}
                </button>
              </div>
            ))}

            {/* Phone */}
            <div className="mt-5 pt-5 border-t border-gray-100">
              <a href="tel:18000000" className="flex items-center gap-2">
                <svg className="w-4 h-4 text-elif-lake" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-[15px] font-bold text-elif-green tracking-wider">1800-0000</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
