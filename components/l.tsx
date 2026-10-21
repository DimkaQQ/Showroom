// Both languages are in the HTML; CSS shows the active one (see globals.css).
export function L({ ru, en }: { ru: string; en: string }) {
  return (
    <>
      <span data-l="ru">{ru}</span>
      <span data-l="en">{en}</span>
    </>
  );
}
