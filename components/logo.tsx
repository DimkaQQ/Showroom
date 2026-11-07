export function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <rect width="64" height="64" rx="14" fill="#0d0f12" stroke="#262a30" strokeWidth="2" />
      <path d="M16 47V17l16 20 16-20v30" fill="none" stroke="#f2b544" strokeWidth="7.5" strokeMiterlimit="4" />
    </svg>
  );
}
