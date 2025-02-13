
import Hero from '../components/Hero';
import Features from '../components/Features';
import GameList from '../components/GameList';
import FeaturesGrid from '../components/FeaturesGrid';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow">
        <Hero />
        <div className="max-w-full mx-auto px-4 md:px-6 lg:px-8">
          <GameList />
          <FeaturesGrid />
          <Features />
        </div>
      </main>
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 lg:px-8 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
