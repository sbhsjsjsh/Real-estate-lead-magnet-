'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Check, Copy, ArrowUpRight } from 'lucide-react';
import { CONTACT, INQUIRY_TOPICS, buildWhatsAppUrl } from '@/lib/project-data';

export default function DirectConnectSection() {
  const quickTopics = INQUIRY_TOPICS.slice(0, 4);
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['brochure', 'pricing']);
  const [copied, setCopied] = useState(false);

  const toggleTopic = (id: string) => {
    setSelectedTopics((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev;
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const activeSnippets = quickTopics
    .filter((topic) => selectedTopics.includes(topic.id))
    .map((topic) => topic.snippet);

  const formattedTopics =
    activeSnippets.length === 1
      ? activeSnippets[0]
      : `${activeSnippets.slice(0, -1).join(', ')} and ${activeSnippets[activeSnippets.length - 1]}`;

  const dynamicWhatsAppUrl = buildWhatsAppUrl(
    `Hi Aranya Crest Direct Desk, please share ${formattedTopics}.`
  );

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.phoneDisplay);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="connect"
      className="py-12 sm:py-16 border-t border-[#E5E4DF] bg-[#F8F8F6]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-[#FFFFFF] border border-[#E5E4DF] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#52525B] mb-2">
              Zero Forms · Direct Developer Desk
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight leading-tight text-balance">
              Get Brochure &amp; Price Sheet in Under 2 Minutes.
            </h2>
            <p className="mt-3 text-sm text-[#52525B] leading-relaxed">
              {CONTACT.salesHours} · Zero brokerage, no call-center spam.
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-medium text-[#3F3F46] mb-3">
              Select what you want sent on WhatsApp:
            </p>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Select inquiry topics">
              {quickTopics.map((topic) => {
                const active = selectedTopics.includes(topic.id);
                return (
                  <button
                    key={topic.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleTopic(topic.id)}
                    className={`inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6F4E] ${
                      active
                        ? 'bg-[#18181B] text-white border border-[#18181B]'
                        : 'bg-[#F8F8F6] text-[#3F3F46] border border-[#DFDED8] hover:border-[#BDBBB2] hover:text-[#18181B]'
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                    <span>{topic.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={dynamicWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 min-h-[50px] px-5 py-3 rounded-lg bg-[#0E6F4E] text-white text-[15px] font-semibold hover:bg-[#0A593E] active:scale-[0.98] transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6F4E] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Start WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-5 py-3 rounded-lg bg-[#F8F8F6] text-[#18181B] border border-[#DAD9D2] text-[15px] font-semibold hover:bg-[#EFECE5] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B]"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Call {CONTACT.phoneDisplay}</span>
              </a>
            </div>

            <div className="mt-3.5 flex items-center justify-between gap-3 text-xs text-[#71717A]">
              <span>Direct Developer Pricing · Haryana RERA Approved</span>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 text-[#3F3F46] hover:text-[#18181B] font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#18181B] rounded-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#0E6F4E]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
