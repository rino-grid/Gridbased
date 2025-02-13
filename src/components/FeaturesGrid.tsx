
const features = [
  {
    title: "GRIDS",
    description: (
      <>
        Inventories inspired by EFT, Diablo,{" "}
        <a href="#" className="hover:underline" style={{ color: 'rgb(48, 255, 162)' }}>
          DMD
        </a>{" "}
        and{" "}
        <a href="#" className="hover:underline" style={{ color: 'rgb(48, 255, 162)' }}>
          Stoneshard
        </a>
        .
      </>
    ),
    image: "https://i.imgur.com/DNZez8o.png",
    span: "col-span-2",
  },
  {
    title: "CO-OP",
    description: "Multiplayer mechanics.",
    image: "https://i.imgur.com/7xB1g5c.png",
    span: "col-span-1",
  },
  {
    title: "HIDEOUTS",
    description: "Progressionmaxxing.",
    image: "https://i.imgur.com/5GEy3HM.png",
    span: "col-span-1",
  },
  {
    title: "LOOT",
    description: "The most important thing in the universe.",
    image: "https://i.imgur.com/wzc5BfS.png",
    span: "col-span-2",
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-20 border-t border-b border-[#1a1a1a] w-full bg-[#060606]">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`space-y-4 ${feature.span}`}>
              <div className="relative rounded border border-[#1a1a1a] overflow-hidden bg-[rgba(34,34,34,0.51)]">
                <div className="h-[280px] relative">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ color: 'rgb(48, 255, 162)' }} className="text-xl">✦</div>
                <h3 style={{ color: 'rgb(48, 255, 162)' }} className="text-xl">{feature.title}</h3>
              </div>
              <p className="text-[#8794a0]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
