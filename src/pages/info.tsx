export default function Info() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black pb-16 pt-8">
      <div className="bg-black/60 rounded-2xl shadow-2xl border border-luxury-accent/30 p-10 flex flex-col items-center max-w-xl w-full">
        <h1 className="text-5xl font-serif font-bold text-luxury-accent mb-4 drop-shadow-lg">Info</h1>
        <p className="mb-8 text-lg text-white/80 text-center">Find out more about Savannah Bar & Grill.</p>
        <div className="w-full mt-6 text-white/80 text-lg text-center">
          <p className="mb-4">Savannah Bar & Grill is a luxury dining destination in the heart of the city, offering a curated menu of world-class cuisine, signature cocktails, and a vibrant atmosphere. Our chefs blend classic and contemporary flavors for an unforgettable experience.</p>
          <p className="mb-4">Perfect for celebrations, business meetings, or a night out. Enjoy live music on weekends and exclusive tasting events throughout the year.</p>
          <p>Follow us on <a href="#" className="underline hover:text-luxury-accent">Instagram</a> and <a href="#" className="underline hover:text-luxury-accent">Facebook</a> for the latest updates.</p>
        </div>
      </div>
    </main>
  );
}
