import { notFound } from "next/navigation";
import { Home } from "@/components/home";
import { locales, defaultLang, type Lang } from "@/lib/i18n";

export default function Page({ params }: { params: { lang: string } }) {
  if (!(locales as readonly string[]).includes(params.lang) || params.lang === defaultLang) notFound();
  return <Home lang={params.lang as Lang} />;
}
