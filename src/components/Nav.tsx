import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/book', label: 'Book' },
  { href: '/contact', label: 'Contact' },
  { href: '/hours', label: 'Hours' },
  { href: '/info', label: 'Info' },
  { href: '/legal', label: 'Legal' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-between px-6 py-3 border-b border-luxury-accent shadow-lg">
      <div className="flex items-center gap-3">
        <Link href="/" aria-label="Savannah Home" tabIndex={0} className="focus:outline-none focus:ring-2 focus:ring-luxury-accent rounded">
          <Image src="/images/logo.png" alt="Savannah Logo" width={48} height={48} className="rounded" priority />
        </Link>
        <span className="hidden sm:inline font-serif text-3xl text-luxury-accent font-bold ml-3 tracking-wider drop-shadow-lg" style={{fontFamily: 'Playfair Display, serif'}}>Savannah</span>
      </div>
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href} className="font-semibold text-lg text-white hover:text-luxury-accent focus:text-luxury-accent transition-colors tracking-wide">
            {link.label}
          </Link>
        ))}
        <Link href="/book" className="ml-6 px-7 py-2 bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-bold shadow-lg hover:scale-105 focus:scale-105 transition-transform ring-2 ring-luxury-accent/60" aria-label="Reserve a Table">Reserve</Link>
      </div>
      {/* Hamburger Button */}
      <button
        className={`md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus:ring-2 focus:ring-luxury-accent transition-transform ${open ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        style={{ zIndex: 60 }}
      >
        <span className="block w-7 h-1 bg-luxury-accent rounded transition-all"></span>
        <span className="block w-7 h-1 bg-luxury-accent rounded transition-all"></span>
        <span className="block w-7 h-1 bg-luxury-accent rounded transition-all"></span>
      </button>
      {/* Slide-in Mobile Nav */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/90 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-full sm:w-[420px] bg-black flex flex-col items-center justify-center gap-10 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? 'translate-x-0' : 'translate-x-full'} luxury-fade-in`}
          style={{ zIndex: 60 }}
        >
          <button
            className="absolute top-6 right-6 text-luxury-accent text-5xl font-bold focus:outline-none focus:ring-2 focus:ring-luxury-accent"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            tabIndex={0}
          >
            ×
          </button>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-4xl font-serif text-luxury-accent hover:text-white focus:text-white transition-colors mb-2" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/book" className="mt-8 px-12 py-4 bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-bold text-3xl shadow-xl hover:scale-105 focus:scale-105 transition-transform ring-2 ring-luxury-accent/60" aria-label="Reserve a Table" onClick={() => setOpen(false)}>Reserve</Link>
        </aside>
      </div>
    </nav>
  );
}
