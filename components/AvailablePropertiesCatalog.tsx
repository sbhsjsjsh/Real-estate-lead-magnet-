'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { MessageCircle, Phone, ArrowLeft } from 'lucide-react';
import livingImg from '@/src/assets/images/interior_living_suite_1795338657816.jpg';
import masterImg from '@/src/assets/images/interior_master_suite_1795338677534.jpg';
import heroImg from '@/src/assets/images/hero_luxury_residences_1795338659215.jpg';
import courtyardImg from '@/src/assets/images/amenity_landscaped_courtyard_1795338658465.jpg';
import poolImg from '@/src/assets/images/amenity_infinity_pool_1795338663340.jpg';
import ArchitecturalImage from '@/components/ArchitecturalImage';
import {
  AVAILABLE_PROPERTIES,
  CONTACT,
  buildWhatsAppUrl,
  type PropertyCategory,
  type PropertyImageKey,
} from '@/lib/project-data';

const IMAGE_MAP: Record<PropertyImageKey, typeof livingImg> = {
  living: livingImg,
  master: masterImg,
  hero: heroImg,
  courtyard: courtyardImg,
  pool: poolImg,
};

type FilterValue = 'All' | PropertyCategory;
const FILTERS: FilterValue[] = ['All', '3 BHK', '4 BHK', 'Penthouse'];

export default function AvailablePropertiesCatalog() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('All');

  const filteredProperties =
    activeFilter === 'All'
      ? AVAILABLE_PROPERTIES
      : AVAILABLE_PROPERTIES.filter((property) => property.category === activeFilter);

  return (
    <section className="py-10 sm:py-14">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Clean Header & Category Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#E4E2DC]">
          <div className="max-w-2xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#525860] hover:text-[#14171A] transition-colors mb-3"
            >
              <ArrowLeft className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <h1
              className="font-serif font-semibold text-[#14171A] tracking-[-0.02em] leading-[1.12] text-balance"
              style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)' }}
            >
              Available Properties
            </h1>
            <p className="mt-2.5 text-sm sm:text-[15px] text-[#454A50] leading-relaxed">
              Direct developer inventory with zero brokerage. Tap WhatsApp or Call on any residence
              for instant floor plans and the exact cost sheet.
            </p>
          </div>

          {/* Functional Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter available properties"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#EFECE5] border border-[#E4E2DC] self-start lg:self-end"
          >
            {FILTERS.map((filter) => {
              const isSelected = filter === activeFilter;
              const count =
                filter === 'All'
                  ? AVAILABLE_PROPERTIES.length
                  : AVAILABLE_PROPERTIES.filter((p) => p.category === filter).length;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter)}
                  className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6F4E] ${
                    isSelected
                      ? 'bg-[#14171A] text-white'
                      : 'text-[#454A50] hover:text-[#14171A] hover:bg-white/70'
                  }`}
                >
                  {filter} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Available Property Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProperties.map((property) => {
            const waUrl = buildWhatsAppUrl(property.whatsappMessage);
            return (
              <motion.article
                key={property.id}
                layout="position"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#E4E2DC]"
              >
                {/* Media Frame */}
                <div className="relative aspect-[16/10] bg-[#EAE7DF] overflow-hidden">
                  <ArchitecturalImage
                    src={IMAGE_MAP[property.imageKey]}
                    alt={`${property.title} architectural view`}
                    caption={property.title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 text-white flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs text-white/85 tabular-nums">{property.code}</p>
                      <p className="text-sm font-semibold mt-0.5 tabular-nums">
                        {property.unitsLeft}
                      </p>
                    </div>
                    <p className="font-serif text-2xl font-semibold tabular-nums whitespace-nowrap shrink-0">
                      {property.price}
                    </p>
                  </div>
                </div>

                {/* Details & Direct CTAs */}
                <div className="flex-1 flex flex-col justify-between p-5 sm:p-6">
                  <div>
                    {/* Quiet unboxed metadata line */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#5B6168] mb-2">
                      <span>{property.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{property.facing}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">Possession {property.possession}</span>
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#14171A] leading-snug">
                      {property.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#454A50] leading-relaxed">
                      {property.summary}
                    </p>

                    {/* Compact Tabular Spec Row */}
                    <dl className="mt-5 grid grid-cols-3 gap-3 py-4 border-y border-[#ECEAE4]">
                      <div>
                        <dt className="text-[11px] text-[#646B73]">Super Area</dt>
                        <dd className="mt-0.5 text-xs sm:text-sm font-semibold text-[#14171A] tabular-nums">
                          {property.superArea}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] text-[#646B73]">Carpet Area</dt>
                        <dd className="mt-0.5 text-xs sm:text-sm font-semibold text-[#14171A] tabular-nums">
                          {property.carpetArea}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[11px] text-[#646B73]">Payment Plan</dt>
                        <dd className="mt-0.5 text-xs sm:text-sm font-semibold text-[#14171A] tabular-nums">
                          {property.paymentPlan}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Direct WhatsApp & Call Actions (Zero Forms) */}
                  <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 min-h-[46px] px-4 py-2.5 rounded-lg bg-[#0E6F4E] text-white text-sm font-semibold hover:bg-[#0A593E] active:scale-[0.98] transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0E6F4E]"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>WhatsApp for Price &amp; Plan</span>
                    </a>

                    <a
                      href={`tel:${CONTACT.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-2 min-h-[46px] px-4 py-2.5 rounded-lg bg-[#F7F6F2] text-[#14171A] border border-[#D4D1C8] text-sm font-semibold hover:bg-[#EAE7DF] active:scale-[0.98] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14171A]"
                    >
                      <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
