import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { StarterKit } from './components/sections/StarterKit';
import { Benefits } from './components/sections/Benefits';
import { Collection } from './components/sections/Collection';
import { Essentials } from './components/sections/Essentials';

function App() {
  return (
    <div className="min-h-screen bg-maton-cream font-sans text-maton-text selection:bg-maton-lime selection:text-maton-dark">
      <Header />
      <main>
        <Hero />
        <StarterKit />
        <Benefits />
        <Collection />
        <Essentials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
