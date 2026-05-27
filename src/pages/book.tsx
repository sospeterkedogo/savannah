export default function Book() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black pb-16 pt-8">
      <div className="bg-black/60 rounded-2xl shadow-2xl border border-luxury-accent/30 p-10 flex flex-col items-center max-w-xl w-full">
        <h1 className="text-5xl font-serif font-bold text-luxury-accent mb-4 drop-shadow-lg">Book a Table</h1>
        <p className="mb-8 text-lg text-white/80 text-center">Reserve your spot at Savannah Bar & Grill. We look forward to welcoming you for an unforgettable experience.</p>
        <form className="w-full flex flex-col gap-4 mt-4" aria-label="Book a Table">
          <input className="px-4 py-3 rounded-lg bg-black/40 border border-luxury-accent text-white placeholder:text-white/60 focus:ring-2 focus:ring-luxury-accent" placeholder="Name" aria-label="Name" required />
          <input className="px-4 py-3 rounded-lg bg-black/40 border border-luxury-accent text-white placeholder:text-white/60 focus:ring-2 focus:ring-luxury-accent" placeholder="Email" aria-label="Email" type="email" required />
          <input className="px-4 py-3 rounded-lg bg-black/40 border border-luxury-accent text-white placeholder:text-white/60 focus:ring-2 focus:ring-luxury-accent" placeholder="Date" aria-label="Date" type="date" required />
          <input className="px-4 py-3 rounded-lg bg-black/40 border border-luxury-accent text-white placeholder:text-white/60 focus:ring-2 focus:ring-luxury-accent" placeholder="Time" aria-label="Time" type="time" required />
          <button type="submit" className="luxury-cta bg-gradient-to-r from-luxury-accent to-yellow-400 text-black rounded-full font-bold text-lg py-3 mt-2">Reserve Now</button>
        </form>
        <div className="mt-8 text-white/70 text-center text-sm">Or call us at <a href="tel:+1234567890" className="underline hover:text-luxury-accent">+1 234 567 890</a></div>
      </div>
    </main>
  );
}
