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
      className="py-12 sm:py-16 border-t border-[#E4E2DC] bg-[#14171A] text-[#F7F6F2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium text-[#A9B0B7] mb-2">
              Zero Forms · Direct Developer Desk
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight text-balance">
              Get Brochure &amp; Price Sheet in Under 2 Minutes.
            </h2>
            <p className="mt-3 text-sm sm:text-[15px] text-[#C7CCD1] leading-relaxed">
              {CONTACT.salesHours} · No broker spam.
            </p>
          </div>

          <div className="lg:col-span-7 p-5 sm:p-7 rounded-2xl bg-[#1D2126] border border-white/12">
            <p className="text-xs sm:text-sm font-medium text-[#D0D5DA] mb-3">
              Tap what you need on WhatsApp:
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
                    className={`inline-flex items-center gap-1.5 min-h-[42px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27A678] ${
                      active
                        ? 'bg-[#0E6F4E] text-white border border-[#1B9169]'
                        : 'bg-[#14171A] text-[#D0D5DA] border border-white/15 hover:border-white/35 hover:text-white'
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
                className="flex-1 inline-flex items-center justify-center gap-2 min-h-[50px] px-5 py-3 rounded-lg bg-[#0E6F4E] text-white text-[15px] font-semibold hover:bg-[#12855E] active:scale-[0.98] transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#27A678]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Start WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-5 py-3 rounded-lg bg-white text-[#14171A] text-[15px] font-semibold hover:bg-[#EAE8E1] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Call {CONTACT.phoneDisplay}</span>
              </a>
            </div>

            <div className="mt-3.5 flex items-center justify-between gap-3 text-xs text-[#9AA2AA]">
              <span>Direct Developer Pricing</span>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 text-[#D8DDE2] hover:text-white transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#34D399]" aria-hidden="true" />
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
