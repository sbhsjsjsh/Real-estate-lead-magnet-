import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import infinityPoolImg from '@/src/assets/images/amenity_infinity_pool_1795338663340.jpg';
import courtyardImg from '@/src/assets/images/amenity_landscaped_courtyard_1795338658465.jpg';
import ArchitecturalImage from '@/components/ArchitecturalImage';

export default function AmenitiesBento() {
  return (
    <section
      id="amenities"
      className="py-12 sm:py-16 border-t border-[#E5E4DF] bg-[#FFFFFF]"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <p className="text-xs font-medium text-[#52525B] mb-1.5">
              Clubhouse &amp; Landscape · 42,000 sq. ft.
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight text-balance">
              Thoughtful Architecture &amp; Open Greens
            </h2>
          </div>

          <Link
            href="/available-properties"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#18181B] hover:text-[#0E6F4E] underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 self-start sm:self-end"
          >
            <span>See Available Properties</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>

        {/* Clean 2-Card Asymmetric Architectural Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <article className="lg:col-span-7 relative min-h-[270px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-[#E5E4DF] bg-[#ECEBE6]">
            <ArchitecturalImage
              src={infinityPoolImg}
              alt="Elevated rooftop infinity edge swimming pool overlooking lush greenery at golden hour"
              caption="Rooftop Infinity Pool & Clubhouse"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 sm:p-6 text-white">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-snug">
                01. Heated Infinity Pool &amp; Wellness Club
              </h3>
              <p className="mt-1.5 text-sm text-white/85 max-w-lg">
                25m lap pool, fitness studio, indoor racquet courts, and residents-only lounge.
              </p>
            </div>
          </article>

          <article className="lg:col-span-5 relative min-h-[270px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-[#E5E4DF] bg-[#ECEBE6]">
            <ArchitecturalImage
              src={courtyardImg}
              alt="Shaded stone pathways and mature trees inside the 4-acre central residential park"
              caption="4-Acre Vehicle-Free Central Park"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 sm:p-6 text-white">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-snug">
                02. 4-Acre Vehicle-Free Park
              </h3>
              <p className="mt-1.5 text-sm text-white/85">
                Underground parking, shaded trails, and triple-glazed MERV-14 fresh air homes.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
