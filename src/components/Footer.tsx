import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 border-t border-luxury-accent/30 py-10 px-4 flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <h2 className="text-2xl font-serif text-luxury-accent font-bold mb-2">Visit Us</h2>
        <p className="text-white/80 mb-2">123 Main Street, Savannah, GA 31401</p>
        <p className="text-white/60">(912) 555-1234</p>
        <p className="text-white/60">info@savannahbarandgrill.com</p>
        <p className="text-white/40 text-xs mt-2">&copy; 2026 Savannah Bar & Grill. All rights reserved.</p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <h2 className="text-2xl font-serif text-luxury-accent font-bold mb-2">Find Us on the Map</h2>
        <div className="rounded-xl overflow-hidden border border-luxury-accent/30 shadow-lg w-full max-w-xs h-64 bg-black">
          <iframe
            title="Savannah Bar & Grill Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-81.0998%2C32.0809%2C-81.0898%2C32.0909&amp;layer=mapnik&amp;marker=32.0859%2C-81.0948"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing location of Savannah Bar & Grill"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
