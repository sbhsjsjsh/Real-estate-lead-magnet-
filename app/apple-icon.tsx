import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1E2226 0%, #111315 100%)',
          borderRadius: '38px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '12px',
            borderRadius: '28px',
            border: '2px solid rgba(234, 228, 215, 0.18)',
            display: 'flex',
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="132"
          height="132"
        >
          <polygon points="32,10 36.8,14.8 32,19.6 27.2,14.8" fill="#168A62" />
          <path
            d="M16 50 L32 21 L48 50"
            fill="none"
            stroke="#F2EDE3"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.5 41.5 H41.5"
            fill="none"
            stroke="#F2EDE3"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M28 50 V42 A4 4 0 0 1 36 42 V50"
            fill="none"
            stroke="#168A62"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
