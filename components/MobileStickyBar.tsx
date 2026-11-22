import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT, buildWhatsAppUrl } from '@/lib/project-data';

export default function MobileStickyBar() {
  const mobileWhatsAppUrl = buildWhatsAppUrl(
    'Hi Aranya Crest Desk, please share the brochure, floor plans, and direct developer price sheet on WhatsApp.'
  );

  return (
    <div
      role="region"
      aria-label="Direct contact actions"
      className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#DFDDD5] px-3 py-2"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3 py-2 rounded-lg bg-[#14171A] text-white text-sm font-semibold active:scale-[0.98] transition-transform duration-150 whitespace-nowrap"
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Call Now</span>
        </a>

        <a
          href={mobileWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3 py-2 rounded-lg bg-[#0E6F4E] text-white text-sm font-semibold active:scale-[0.98] transition-transform duration-150 whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
