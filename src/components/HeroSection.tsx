interface HeroSectionProps {
  title: string;
  subtitle: string;
  accent?: string;
}

const HeroSection = ({ title, subtitle, accent }: HeroSectionProps) => {
  return (
    <section className="hero-gradient text-primary-foreground py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          {accent && (
            <span className="inline-block bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full mb-4">
              {accent}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
