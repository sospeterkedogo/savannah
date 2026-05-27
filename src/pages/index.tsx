import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-black overflow-hidden">
      {/* Hero background image fills viewport */}
      <div className="absolute inset-0 -z-10">
        <Image src="/images/herobg-w.jpg" alt="Savannah Ambiance" fill priority className="object-cover object-center w-full h-full scale-105 blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>
      <div className="w-full max-w-5xl px-4 md:px-16 py-28 flex flex-col items-center text-center bg-black/60 rounded-3xl shadow-2xl backdrop-blur-lg border border-luxury-accent/30 luxury-fade-in" tabIndex={-1} aria-label="Savannah Bar & Grill Hero">
        <h1 className="text-7xl md:text-8xl font-serif font-bold text-luxury-accent drop-shadow-[0_2px_24px_gold] mb-10 animate-fade-in-up tracking-tight">
          Savannah Bar & Grill
        </h1>
        <p className="text-2xl md:text-3xl text-white/90 mb-12 animate-fade-in-up delay-100 max-w-4xl mx-auto font-light">
          Experience the art of dining in a relaxed, luxurious setting. Savor our chef’s signature dishes, curated wines, and world-class cocktails.<br className="hidden md:inline" /> Perfect for celebrations, business, or a night out.
        </p>
        <div className="flex flex-wrap gap-8 justify-center mb-14 w-full luxury-fade-in" aria-label="Signature Dish">
          <Image src="/images/meat-w.jpg" alt="Signature Dish" width={520} height={300} className="rounded-3xl shadow-2xl border-4 border-luxury-accent max-w-full luxury-card" />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 justify-center w-full luxury-fade-in" aria-label="Hero Actions">
          <Link href="/menu" className="flex-1 min-w-[220px] px-12 py-6 bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-bold text-2xl ring-2 ring-luxury-accent/60 luxury-cta" aria-label="View Menu">
            View Menu
          </Link>
          <Link href="/book" className="flex-1 min-w-[220px] px-12 py-6 bg-transparent border-2 border-luxury-accent text-luxury-accent rounded-full font-bold text-2xl ring-2 ring-luxury-accent/60 luxury-cta" aria-label="Book a Table">
            Book a Table
          </Link>
        </div>
        <div className="flex flex-wrap gap-6 mt-16 animate-fade-in-up delay-500 justify-center w-full" aria-label="Awards and Press Mentions">
          <span className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-semibold text-xl shadow-xl">★ Michelin Guide</span>
          <span className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-semibold text-xl shadow-xl">🏆 Best New Restaurant 2026</span>
          <span className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-semibold text-xl shadow-xl">🍽️ Featured in Gourmet</span>
        </div>
      </div>
    </section>
  );
}
