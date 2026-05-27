import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menuDetails = {
  'mainmenu': {
    title: 'Main Menu',
    image: '/menudesigns/mainmenu.svg',
    description: 'A curated selection of our signature dishes, appetizers, and mains. Experience the best of Savannah in one menu.',
    items: [
      'Grilled Salmon with Lemon Butter Sauce',
      'Classic Cheeseburger with Fries',
      'Caesar Salad with Grilled Chicken',
      'Margherita Pizza with Fresh Basil',
      'Chocolate Lava Cake for Dessert',
    ],
  },
  'menupasta': {
    title: 'Pasta',
    image: '/menudesigns/menupasta.svg',
    description: 'Handmade pastas with rich, authentic sauces and fresh ingredients.',
    items: [
      'Truffle Tagliatelle',
      'Lobster Ravioli',
      'Classic Spaghetti Carbonara',
      'Pesto Genovese',
    ],
  },
  'sdish': {
    title: 'Signature Dishes',
    image: '/menudesigns/sdish.svg',
    description: 'Our chef’s most celebrated creations, crafted for a memorable dining experience.',
    items: [
      'Wagyu Beef Tartare',
      'Miso Black Cod',
      'Duck à l’Orange',
    ],
  },
  'smoke&grill': {
    title: 'Smoke & Grill',
    image: '/menudesigns/smoke&grill.svg',
    description: 'Charcoal-grilled specialties and smoked meats with bold flavors.',
    items: [
      'Smoked Brisket',
      'BBQ Ribs',
      'Grilled Lamb Chops',
    ],
  },
  'specialsteak': {
    title: 'Special Steak',
    image: '/menudesigns/specialsteak.svg',
    description: 'Premium cuts, expertly aged and grilled to perfection.',
    items: [
      'Tomahawk Ribeye',
      'Filet Mignon',
      'Porterhouse',
    ],
  },
  'steak': {
    title: 'Steak',
    image: '/menudesigns/steak.svg',
    description: 'Classic steakhouse favorites, cooked to your liking.',
    items: [
      'Sirloin',
      'Ribeye',
      'T-Bone',
    ],
  },
  'breakfast': {
    title: 'Breakfast',
    image: '/menudesigns/breakfast.svg',
    description: 'Start your day with our gourmet breakfast options.',
    items: [
      'Eggs Benedict',
      'Avocado Toast',
      'French Toast',
    ],
  },
  'cocktail': {
    title: 'Cocktail',
    image: '/menudesigns/cocktail.svg',
    description: 'Signature cocktails crafted by our expert mixologists.',
    items: [
      'Savannah Gold',
      'Classic Martini',
      'Negroni',
    ],
  },
  'more-cocktail': {
    title: 'More Cocktails',
    image: '/menudesigns/more-cocktail.svg',
    description: 'Explore our extended cocktail list for every taste.',
    items: [
      'Espresso Martini',
      'Aperol Spritz',
      'Old Fashioned',
    ],
  },
  'even-more': {
    title: 'Even More',
    image: '/menudesigns/even-more.svg',
    description: 'Discover even more culinary delights and seasonal specials.',
    items: [
      'Chef’s Tasting Menu',
      'Seasonal Desserts',
      'Vegan Specials',
    ],
  },
};

export default function MenuDetail() {
  const router = useRouter();
  const { name } = router.query;
  const menu = menuDetails[name as keyof typeof menuDetails];

  if (!menu) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-black pb-16 pt-8">
        <div className="bg-black/60 rounded-2xl shadow-2xl border border-luxury-accent/30 p-10 flex flex-col items-center max-w-xl w-full">
          <h1 className="text-4xl font-serif font-bold text-luxury-accent mb-4 drop-shadow-lg">Menu Not Found</h1>
          <Link href="/menu" className="luxury-cta mt-6 px-8 py-3 bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-bold text-lg">Back to Menus</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black pb-16 pt-8">
      <div className="fixed inset-0 z-40 bg-black/90 animate-fade-in" />
      <div className="relative z-50 bg-black/90 rounded-2xl shadow-2xl border border-luxury-accent/30 p-10 flex flex-col items-center max-w-2xl w-full luxury-fade-in">
        <button onClick={() => router.back()} aria-label="Close" className="absolute top-4 right-4 text-luxury-accent text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-luxury-accent">×</button>
        <h1 className="text-5xl font-serif font-bold text-luxury-accent mb-4 drop-shadow-lg text-center">{menu.title}</h1>
        <Image
          src={menu.image}
          alt={menu.title}
          width={320}
          height={420}
          className="rounded-xl mb-6 drop-shadow-xl object-contain w-full h-auto"
          priority
          placeholder="empty"
          quality={30}
        />
        <p className="mb-6 text-xl text-white/80 text-center">{menu.description}</p>
        <ul className="mb-8 text-lg text-luxury-accent/90 list-disc list-inside">
          {menu.items.map((item, i) => (
            <li key={i} className="mb-2 text-white/90">{item}</li>
          ))}
        </ul>
        <nav className="flex gap-6 mt-4">
          <Link href="/menu" className="luxury-cta px-8 py-3 bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-bold text-lg">Back to Menus</Link>
        </nav>
      </div>
    </main>
  );
}
