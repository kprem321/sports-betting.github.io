import { Tv, Smartphone, Handshake, Megaphone, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentCard from "@/components/ContentCard";

const Media = () => {
  return (
    <Layout>
      <HeroSection
        title="Media's Role in Normalizing Sports Betting"
        subtitle="Media partnerships with betting apps accelerate higher risk betting among the younger population, creating a sense of normalization."
        accent="Media Influence"
      />

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              The Normalization Effect
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When betting media occurs on platforms, it gains a sense of legitimacy and causes 
              younger viewers to believe it is safer and accurate. Media causes sports betting 
              to be seen as more of a strategy for finance or entertainment instead of a risk 
              for addiction, creating a feeling of a routine part of watching sports.
            </p>
            <p className="text-muted-foreground">
              This normalization creates a setting of casual betting instead of recognizing it 
              as high-risk behavior to users.
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            How Media Targets Youth
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ContentCard icon={Megaphone} title="Advertisements">
              <p>
                Advertisements largely target young audiences in places such as digital platforms, 
                social media, and live sports broadcasts. The language usage promotes excitement, 
                making participation feel rewarding amongst the younger audience.
              </p>
              <p className="mt-4">
                Advertisements highly target younger audiences, first-time bettors, and both 
                experienced and inexperienced sports fans. They use techniques such as urgency-based 
                language, false information, and attraction with things like "risk-free bets," 
                celebrity endorsements, and bonus promotions.
              </p>
            </ContentCard>

            <ContentCard icon={Handshake} title="Media Partnerships (CNBC & CNN)">
              <p>
                CNN & CNBC have partnered with sportsbooks to provide expert picks and analysis. 
                These partnerships present financial analysis and entertainment which creates a 
                normalized sense in gambling.
              </p>
              <p className="mt-4">
                These partnerships appear on many popular, trusted platforms which causes younger 
                audiences to view sports betting as safe.
              </p>
            </ContentCard>

            <ContentCard icon={Tv} title="Impact on Sports Integrity">
              <p>
                Partnerships with media increase public trust in betting markets, but in reality, 
                they can enable game manipulation. Media coverage emphasizes profits and odds while 
                causing less concern about the sport's integrity.
              </p>
            </ContentCard>

            <ContentCard icon={Smartphone} title="Increasing Betting Power">
              <p>
                More and more media exposure causes sportsbooks to gain cultural authority, thus 
                creating more addictive behavior patterns from their expanded reach. The constant 
                repetition of promotions during sports events normalizes high-risk betting behavior.
              </p>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* Connection to Cultish */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Connection to "Cultish" by Amanda Montell
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              In the book <em>Cultish</em>, Amanda Montell explores the strong language usage about 
              being in one cult and only believing the "truth" within that cult. Both media and 
              the book use cult-like language such as: <strong>insiders</strong>, <strong>boost</strong>, 
              <strong>community</strong>, and <strong>join</strong>.
            </p>
            <p className="text-muted-foreground mb-6">
              In the book, the fitness cult section references slogans being repeated, which created 
              a false truth and dependence amongst the members. This connects directly to how ads 
              and media repeat promotions during sports events to normalize high-risk betting.
            </p>
            <div className="bg-secondary p-6 rounded-lg border-l-4 border-primary">
              <p className="text-foreground italic">
                Just as cults use repetitive language and insider terminology to create belonging 
                and dependency, sports betting advertisements employ similar tactics—creating a 
                sense of community around betting while masking the inherent risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              The Consequence
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The combination of trusted media partnerships, targeted advertisements, and 
              cult-like marketing language creates a powerful normalization effect. Young 
              audiences are led to believe that sports betting is a safe, entertaining, 
              and financially strategic activity rather than a potentially addictive behavior.
            </p>
            <p className="text-muted-foreground">
              This constant exposure reshapes how an entire generation views gambling—transforming 
              it from a recognized risk into an expected part of the sports fan experience.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
