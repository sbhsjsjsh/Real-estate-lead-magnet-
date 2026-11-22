'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Building2 } from 'lucide-react';

interface ArchitecturalImageProps {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

export default function ArchitecturalImage({
  src,
  alt,
  caption,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  className = 'object-cover',
}: ArchitecturalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#EAE7DF] via-[#DFDBD0] to-[#D4CFC3] text-[#454A50] p-6 text-center"
      >
        <Building2 className="w-8 h-8 stroke-[1.5]" aria-hidden="true" />
        <span className="text-sm font-medium max-w-xs">{caption ?? alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
