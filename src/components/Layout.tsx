import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-luxury-bg text-luxury-surface">
      <Nav />
      <main className="flex-1 w-full mx-auto max-w-6xl px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}