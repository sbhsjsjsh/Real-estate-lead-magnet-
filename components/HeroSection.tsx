'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageCircle, Phone, ArrowUpRight, ArrowRight } from 'lucide-react';
import heroResidenceImg from '@/src/assets/images/hero_luxury_residences_1795338659215.jpg';
import ArchitecturalImage from '@/components/ArchitecturalImage';
import { CONTACT, HERO_METRICS, buildWhatsAppUrl } from '@/lib/project-data';

export default function HeroSection() {
  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Hi Aranya Crest Direct Desk, please send the PDF Brochure, Available Units list, and latest direct price sheet.'
  );

  return (
    <section id="top" className="pt-8 pb-12 sm:pt-12 sm:pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Ultra-Clean 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center py-1"
          >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-[13px] font-medium text-[#525860] mb-4">
              <span>{CONTACT.locationShort}</span>
              <span aria-hidden="true">·</span>
              <span>RERA Approved</span>
            </div>

            <h1
              className="font-serif font-semibold text-[#14171A] tracking-[-0.02em] leading-[1.1] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
            >
              3 &amp; 4 BHK Sky Residences on Golf Course Ext. Road.
            </h1>

            <p className="mt-4 text-[15px] sm:text-base text-[#454A50] leading-[1.6] max-w-[52ch]">
              Direct builder pricing from ₹3.45 Cr with 0% brokerage. No forms — tap WhatsApp or
              Call for instant floor plans, live inventory, and site visits.
            </p>

            {/* Primary WhatsApp & Call CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-6 py-3 rounded-lg bg-[#0E6F4E] text-white text-[15px] font-semibold hover:bg-[#0A593E] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6F4E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>WhatsApp for Brochure</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 min-h-[50px] px-5 py-3 rounded-lg bg-[#FFFFFF] text-[#14171A] border border-[#D4D1C8] text-[15px] font-semibold hover:bg-[#EFECE5] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14171A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F6F2]"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Call {CONTACT.phoneDisplay}</span>
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-[13px] text-[#5B6168]">
              <span>0% Brokerage · Instant PDF</span>
              <Link
                href="/available-properties"
                className="inline-flex items-center gap-1 font-semibold text-[#14171A] hover:text-[#0E6F4E] underline underline-offset-4 transition-colors whitespace-nowrap"
              >
                <span>View Available Properties</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Dominant Architectural Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative min-h-[260px] sm:min-h-[360px] lg:min-h-[430px] lg:h-full rounded-2xl overflow-hidden bg-[#E6E3DA] border border-[#DFDDD5]"
          >
            <ArchitecturalImage
              src={heroResidenceImg}
              alt="Aranya Crest luxury residential tower at golden hour surrounded by manicured gardens"
              caption="Aranya Crest — Sector 65, Gurugram"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Clean 4-Column Key Facts Strip */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 border border-[#E4E2DC] rounded-xl bg-[#FFFFFF] divide-y lg:divide-y-0 divide-x-0 sm:divide-x divide-[#E4E2DC]">
          {HERO_METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`px-4 py-4 sm:px-6 sm:py-5 ${
                index % 2 === 1 ? 'border-l border-[#E4E2DC] sm:border-l-0' : ''
              }`}
            >
              <p className="font-serif text-xl sm:text-2xl font-semibold text-[#14171A] tracking-tight tabular-nums leading-tight">
                {metric.value}
              </p>
              <p className="mt-1 text-xs text-[#525860] leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
