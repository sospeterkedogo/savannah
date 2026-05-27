import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaXTwitter, FaTiktok, FaYoutube } from './HighEndIcons';

export default function Footer() {
  return (
    <footer className="w-full bg-black/90 border-t border-luxury-accent/40 pt-12 pb-6 px-4 flex flex-col items-center mt-24">
      <div className="w-full max-w-6xl flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-0">
        {/* Left: Contact & Address */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0">
          <h2 className="text-xl font-serif text-luxury-accent font-bold mb-2 tracking-wide uppercase">Visit Us</h2>
          <p className="text-white/90 mb-1">123 Wellingborough Road</p>
          <p className="text-white/90 mb-1">Northampton, NN1 4AB</p>
          <p className="text-white/70 mb-1">(912) 234-1234</p>
          <p className="text-white/70 mb-1">info@savannahbarandgrill.com</p>
        </div>

        {/* Center: Socials & Brand */}
        <div className="flex-1 flex flex-col items-center justify-center mb-10 md:mb-0">
          <Image src="/images/logo.png" alt="Savannah Logo" width={56} height={56} className="rounded mb-3 shadow-lg" />
          <span className="font-serif text-2xl text-luxury-accent font-bold tracking-wider mb-2">SavannahB&G</span>
          <div className="flex gap-5 text-luxury-accent text-2xl mb-2 mt-2">
            <a href="https://instagram.com/" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-yellow-400 transition-colors"><FaInstagram /></a>
            <a href="https://facebook.com/" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-yellow-400 transition-colors"><FaFacebookF /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener" aria-label="X / Twitter" className="hover:text-yellow-400 transition-colors"><FaXTwitter /></a>
            <a href="https://tiktok.com/" target="_blank" rel="noopener" aria-label="TikTok" className="hover:text-yellow-400 transition-colors"><FaTiktok /></a>
            <a href="https://youtube.com/" target="_blank" rel="noopener" aria-label="YouTube" className="hover:text-yellow-400 transition-colors"><FaYoutube /></a>
          </div>
          <span className="text-xs text-white/40">Follow us for updates & events</span>
        </div>

        {/* Right: Map */}
        <div className="flex-1 flex flex-col items-center md:items-end">
          <h2 className="text-xl font-serif text-luxury-accent font-bold mb-2 tracking-wide uppercase">Find Us on the Map</h2>
          <div className="rounded-xl overflow-hidden border border-luxury-accent/30 shadow-lg w-full max-w-xs h-56 bg-black">
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
      </div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mt-10 pt-6 border-t border-luxury-accent/20">
        <span className="text-xs text-white/40">&copy; 2026 Savannah Bar & Grill. All rights reserved.</span>
        <span className="text-xs text-white/30 mt-2 md:mt-0">Designed & Developed by dev Pete</span>
      </div>
    </footer>
  );
}
