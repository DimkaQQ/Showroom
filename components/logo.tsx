export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="10" fill="#0a0b0d" stroke="#2a2d33" strokeWidth="2" />
      <path d="M16 47V17l16 20 16-20v30" fill="none" stroke="#ff6a2b" strokeWidth="6" strokeMiterlimit="4" />
    </svg>
  );
}
