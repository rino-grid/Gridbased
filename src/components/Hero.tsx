
const Hero = () => {
  return (
    <section className="relative py-32 px-4 md:px-6 lg:px-8 flex items-center justify-center min-h-[50vh] overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 34, 34, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 34, 34, 0.2) 1px, transparent 1px),
            linear-gradient(to right, rgba(34, 34, 34, 0.1) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(34, 34, 34, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 200px 200px, 200px 200px',
          backgroundPosition: 'center center',
          animation: 'gridMove 20s linear infinite',
        }}
      />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white mb-2">
          GRIDBASED
        </h1>
        <p className="text-3xl md:text-4xl lg:text-5xl" style={{ color: 'rgb(48, 255, 162)' }}>
          STUDIOS
        </p>
      </div>
    </section>
  );
};

export default Hero;
