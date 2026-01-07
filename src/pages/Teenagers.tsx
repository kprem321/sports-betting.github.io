import { AlertTriangle, Brain, DollarSign, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentCard from "@/components/ContentCard";

const Teenagers = () => {
  return (
    <Layout>
      <HeroSection
        title="Teens and Online Sports Betting: A Growing Crisis"
        subtitle="Online sports betting has become increasingly popular, but for many teenagers and young adults, it has quickly turned into a serious problem."
        accent="Youth Impact"
      />

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              With betting apps available at all times and deeply tied to sports culture, gambling is 
              no longer something that feels distant or risky—it often looks entertaining, harmless, 
              and easy. However, the reality for many teens tells a much darker story.
            </p>
          </div>
        </div>
      </section>

      {/* What Problems Are Teens Facing */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              What Problems Are Teens Facing?
            </h2>
            <p className="text-muted-foreground mb-6">
              One of the biggest issues teens face is addiction to online sports betting apps. These apps 
              are fast, simple to use, and accessible 24/7, making it easy for young people to place bets 
              repeatedly without fully realizing how much money or time they are losing. Some teens place 
              dozens of bets a day, often chasing losses in hopes of winning back money they have already lost.
            </p>
            <p className="text-muted-foreground">
              Sports betting is also heavily normalized through sports culture. Ads appear constantly during 
              games, on social media, and through influencers, making gambling feel like a normal part of being 
              a sports fan. Because of this, many teens see betting as "just for fun," not as a risky behavior. 
              As addiction develops, it often leads to financial problems, lying to family members, and damaged 
              relationships, creating long-term consequences far beyond the bets themselves (NHPR, 2025).
            </p>
          </div>
        </div>
      </section>

      {/* Why Is It So Serious */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Why Is It So Serious?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ContentCard icon={Brain} title="Developing Brains at Risk">
              <p>
                Online gambling addiction can escalate very quickly. Betting apps are designed to provide 
                instant rewards and constant stimulation, which makes them especially addictive. Teens are 
                particularly vulnerable because their brains are still developing, especially in areas 
                related to impulse control and decision-making.
              </p>
            </ContentCard>

            <ContentCard icon={DollarSign} title="Severe Financial Impact">
              <p>
                The financial impact can be severe—lost savings, debt, and disrupted plans for college or 
                independence. Unlike other expenses, gambling losses can accumulate rapidly, leaving teens 
                in financial situations they are not equipped to handle.
              </p>
            </ContentCard>

            <ContentCard icon={AlertTriangle} title="Emotional Consequences">
              <p>
                Emotionally, teens experience stress, anxiety, guilt, and shame, often hiding their behavior 
                until it becomes overwhelming. Unlike substance abuse, gambling addiction does not always look 
                obvious, which means many teens fail to recognize the danger early.
              </p>
            </ContentCard>

            <ContentCard icon={Shield} title="Hidden Addiction">
              <p>
                Many teens do not seek help until serious damage has already been done. The invisible nature 
                of online gambling—no physical signs, easily hidden on phones—makes it one of the most 
                difficult addictions to detect in young people (NHPR, 2025).
              </p>
            </ContentCard>
          </div>
        </div>
      </section>

      {/* Government Response */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              What Is the Government Doing to Stop This?
            </h2>
            <p className="text-muted-foreground mb-6">
              Massachusetts legalized online sports betting with some restrictions, including limits on 
              certain types of advertising. The Massachusetts Gaming Commission is responsible for overseeing 
              betting companies and investigating violations. However, reports suggest that regulations have 
              not kept pace with aggressive online marketing, especially marketing that reaches young people.
            </p>
            <p className="text-muted-foreground mb-6">
              While treatment programs exist, prevention and education efforts for youth remain limited. 
              Lawmakers have begun discussing stronger controls on advertising and youth exposure, but 
              progress has been slow.
            </p>
            <p className="text-muted-foreground">
              As online betting continues to grow, many teens remain exposed to a system that prioritizes 
              profit over protection.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teenagers;
