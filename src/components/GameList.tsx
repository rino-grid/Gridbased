
import { ArrowRight, Square } from "lucide-react";

const GameList = () => {
  return (
    <section className="py-20 w-full">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <Square className="w-6 h-6" style={{ color: 'rgb(48, 255, 162)' }} />
          <h2 className="text-2xl" style={{ color: 'rgb(48, 255, 162)' }}>THE MAIN QUEST</h2>
        </div>

        <p className="text-[#8794a0] mb-8">Games with a grid based inventory.</p>

        <div className="border border-[#1a1a1a] rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4 text-sm text-[#8794a0] mb-4">
            <div>GAMES</div>
            <div>RELEASED</div>
            <div>STEAM</div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-white">MAGITOWER</div>
              <div className="text-white">JAN 2025</div>
              <div>
                <button className="bg-[#1a1a1a] p-2 rounded hover:bg-[#252525] transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center text-[#8794a0]">
              <div>GAME 2</div>
              <div>COMING SOON</div>
              <div></div>
            </div>

            <div className="grid grid-cols-3 gap-4 items-center text-[#8794a0]">
              <div>GAME 3</div>
              <div>COMING SOON</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameList;
