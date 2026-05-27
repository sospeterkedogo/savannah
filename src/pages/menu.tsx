import Image from 'next/image';
import Link from 'next/link';

const menus = [
  { src: '/menudesigns/mainmenu.svg', alt: 'Main Menu', label: 'Main Menu' },
  { src: '/menudesigns/menupasta.svg', alt: 'Pasta', label: 'Pasta' },
  { src: '/menudesigns/sdish.svg', alt: 'Signature Dishes', label: 'Signature Dishes' },
  { src: '/menudesigns/smoke&grill.svg', alt: 'Smoke & Grill', label: 'Smoke & Grill' },
  { src: '/menudesigns/specialsteak.svg', alt: 'Special Steak', label: 'Special Steak' },
  { src: '/menudesigns/steak.svg', alt: 'Steak', label: 'Steak' },
  { src: '/menudesigns/breakfast.svg', alt: 'Breakfast', label: 'Breakfast' },
  { src: '/menudesigns/cocktail.svg', alt: 'Cocktail', label: 'Cocktail' },
  { src: '/menudesigns/more-cocktail.svg', alt: 'More Cocktails', label: 'More Cocktails' },
  { src: '/menudesigns/even-more.svg', alt: 'Even More', label: 'Even More' },
];

export default function Menu() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black pb-16 pt-8">
      <h1 className="text-5xl md:text-6xl font-serif font-bold text-luxury-accent mb-4 drop-shadow-lg">Our Menus</h1>
      <p className="mb-12 text-xl text-white/80 max-w-2xl text-center">Explore our curated selection of dishes, drinks, and specialties. Tap a menu to view in detail.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-2 md:px-4">
        {menus.map(menu => {
          // Extract menu name from src (e.g., /menudesigns/mainmenu.svg => mainmenu)
          const name = menu.src.split('/').pop()?.replace('.svg', '') || '';
          return (
            <Link
              key={menu.src}
              href={`/menu/${name}`}
              className="bg-black/60 rounded-2xl shadow-2xl border border-luxury-accent/30 p-4 md:p-6 flex flex-col items-center group luxury-card min-h-[420px] focus:outline-none focus:ring-2 focus:ring-luxury-accent"
              tabIndex={0}
              aria-label={menu.label}
            >
              <div className="w-full flex-1 flex items-center justify-center">
                <Image
                  src={menu.src}
                  alt={menu.alt}
                  width={320}
                  height={420}
                  className="rounded-xl mb-4 drop-shadow-xl group-hover:scale-105 group-focus:scale-105 transition-transform object-contain w-full h-auto"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 320px"
                  priority
                  placeholder="empty"
                  quality={30}
                />
              </div>
              <span className="text-2xl font-serif text-luxury-accent font-semibold drop-shadow-lg group-hover:underline group-focus:underline mt-2" style={{fontFamily: 'Playfair Display, serif'}}>{menu.label}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
