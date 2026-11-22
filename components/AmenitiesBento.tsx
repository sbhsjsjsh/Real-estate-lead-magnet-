import infinityPoolImg from '@/src/assets/images/amenity_infinity_pool_1795338663340.jpg';
import courtyardImg from '@/src/assets/images/amenity_landscaped_courtyard_1795338658465.jpg';
import ArchitecturalImage from '@/components/ArchitecturalImage';

export default function AmenitiesBento() {
  return (
    <section
      id="amenities"
      className="py-12 sm:py-16 border-t border-[#E4E2DC] bg-[#F7F6F2]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-7">
          <p className="text-xs font-medium text-[#525860] mb-1.5">
            Clubhouse &amp; Landscape · 42,000 sq. ft.
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#14171A] tracking-tight text-balance">
            Quiet Architecture &amp; Resident-Only Amenities
          </h2>
        </div>

        {/* Clean 2-Card Asymmetric Architectural Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <article className="lg:col-span-7 relative min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-[#E4E2DC] bg-[#E6E3DA]">
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
                25m lap pool, Technogym studio, indoor racquet courts, and residents-only lounge.
              </p>
            </div>
          </article>

          <article className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-[#E4E2DC] bg-[#E6E3DA]">
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
