import { MdEvent } from '../components/HighEndIcons';
import { HiOutlineNewspaper } from '../components/HighEndIcons';

export default function Events() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black pb-16 pt-8">
      <div className="bg-black/60 rounded-2xl shadow-2xl border border-luxury-accent/30 p-10 flex flex-col items-center max-w-2xl w-full">
        <h1 className="text-5xl font-serif font-bold text-luxury-accent mb-4 drop-shadow-lg flex items-center gap-3">
          <MdEvent className="text-4xl" /> Events & Updates
        </h1>
        <p className="mb-8 text-lg text-white/80 text-center flex items-center gap-2">
          <HiOutlineNewspaper className="text-2xl" /> Stay tuned for our latest happenings, live music nights, tasting events, and exclusive news.
        </p>
        <div className="w-full mt-6 text-white/80 text-lg text-center">
          <p className="mb-4">No upcoming events at the moment. Please check back soon or follow us on social media for instant updates!</p>
        </div>
      </div>
    </main>
  );
}