import Link from 'next/link';
import { CONTACT, buildWhatsAppUrl } from '@/lib/project-data';

export default function Footer() {
  const footerWhatsAppUrl = buildWhatsAppUrl(
    'Hi Aranya Crest Desk, please share the brochure and available properties price sheet.'
  );

  return (
    <footer className="bg-[#F7F6F2] border-t border-[#E4E2DC] pt-8 pb-22 md:pb-8 text-[#525860]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
        <div>
          <Link
            href="/"
            className="font-serif text-base font-semibold text-[#14171A] hover:text-[#0E6F4E] transition-colors"
          >
            {CONTACT.brandName}
          </Link>
          <span className="mx-2 text-[#B8B4AA]" aria-hidden="true">
            ·
          </span>
          <span className="tabular-nums">RERA: {CONTACT.reraNumber}</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link
            href="/available-properties"
            className="font-medium text-[#14171A] hover:text-[#0E6F4E] transition-colors"
          >
            Available Properties
          </Link>
          <a
            href={footerWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0E6F4E] hover:text-[#0A593E] transition-colors"
          >
            WhatsApp Desk
          </a>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="tabular-nums font-medium text-[#14171A] hover:underline"
          >
            {CONTACT.phoneDisplay}
          </a>
          <span className="text-[#6B727A]">© {new Date().getFullYear()} {CONTACT.brandName}</span>
        </div>
      </div>
    </footer>
  );
}
