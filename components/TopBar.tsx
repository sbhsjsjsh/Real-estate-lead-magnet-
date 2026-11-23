'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageCircle, Menu, X, Phone } from 'lucide-react';
import { CONTACT, buildWhatsAppUrl } from '@/lib/project-data';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Available Properties', href: '/available-properties' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Contact', href: '/#connect' },
] as const;

export default function TopBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const headerWhatsAppHref = buildWhatsAppUrl(
    'Hi Aranya Crest Desk, please share the available properties list and latest price sheet on WhatsApp.'
  );

  return (
    <header className="relative md:sticky md:top-0 z-40 bg-[#F8F8F6]/95 md:backdrop-blur-md border-b border-[#E5E4DF]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#18181B] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6F4E] rounded-sm"
        >
          {CONTACT.brandName}
        </Link>

        {/* Zone 2: Desktop single-line navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#52525B]"
        >
          {NAV_LINKS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : !item.href.includes('#') && pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-150 underline-offset-4 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'text-[#18181B] font-semibold underline'
                    : 'hover:text-[#18181B] hover:underline'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Desktop primary WhatsApp CTA + Mobile Menu Toggle */}
        <div className="flex items-center shrink-0">
          <a
            href={headerWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-2 min-h-[40px] px-4 py-2 rounded-lg bg-[#0E6F4E] text-white text-sm font-semibold hover:bg-[#0A593E] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6F4E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F8F6]"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu-panel"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center gap-1.5 min-h-[42px] px-3.5 py-2 rounded-lg border border-[#DAD9D2] bg-white text-sm font-semibold text-[#18181B] hover:bg-[#F1F0EC] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6F4E]"
          >
            {menuOpen ? (
              <>
                <X className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Close</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {menuOpen && (
        <div
          id="mobile-menu-panel"
          className="md:hidden border-t border-[#E5E4DF] bg-[#FFFFFF] px-4 py-4"
        >
          <nav aria-label="Mobile menu" className="flex flex-col divide-y divide-[#EFEFE9]">
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : !item.href.includes('#') && pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-3.5 text-[15px] flex items-center justify-between ${
                    isActive ? 'font-semibold text-[#0E6F4E]' : 'font-medium text-[#18181B]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.href === '/available-properties' && (
                    <span className="text-xs font-medium text-[#71717A] tabular-nums">5 Options</span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-[#E5E4DF] grid grid-cols-2 gap-2.5">
            <a
              href={headerWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3 py-2 rounded-lg bg-[#0E6F4E] text-white text-sm font-semibold whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3 py-2 rounded-lg border border-[#DAD9D2] bg-[#F8F8F6] text-[#18181B] text-sm font-semibold whitespace-nowrap"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call Desk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
