import { Link } from "react-router-dom";
import { Users, Shield, Tv, ArrowRight, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentCard from "@/components/ContentCard";
import StatCard from "@/components/StatCard";

const Index = () => {
  return (
    <Layout>
      <HeroSection
        title="Understanding Sports Betting & Its Impact on Youth"
        subtitle="An educational exploration of how sports betting affects young people, from media influence to personal struggles and the integrity of sports."
        accent="Educational Resource"
      />

      {/* Essential Question Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-xl md:text-2xl font-bold mb-4">Essential Question</h2>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              In an era where professional leagues and media have financial partnerships with betting apps, how does the rhetorical appeal of "integrity of the game," recently challenged by high-profile scandals, coexist with the pervasive, gamified marketing that normalizes and accelerates high-risk betting behavior among young, non-adult sports fans?
            </p>
          </div>
        </div>
      </section>

      {/* What is Sports Betting Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              What is Sports Betting?
            </h2>
            <p className="text-lg text-muted-foreground">
              Sports betting is the activity of wagering money on predicted sports outcomes — gambling encompasses a broader range.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">How Does Sports Betting Work?</h3>
              <p className="text-muted-foreground">
                Many people bet through sportsbooks or apps by depositing money and then choosing different wager types. There are many live and same game bets. These bets are updated constantly as well as with other promotions and advertising to attract users.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">The Growing Industry</h3>
              <p className="text-muted-foreground">
                Sports betting has largely expanded in the U.S. It has grown into a multibillion dollar industry in which betting apps have combined with many news, social media, and sports broadcasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
            Statistics (18-22 Years Old)
          </h2>
          <p className="text-muted-foreground text-center mb-12">The numbers reveal concerning trends among young adults</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <StatCard
              value="58%"
              label="Engaged in Betting"
              description="Have engaged in at least one sports betting activity"
            />
            <StatCard
              value="63%"
              label="Ad Exposure"
              description="Have recalled seeing betting advertisements"
            />
            <StatCard
              value="16%"
              label="Risky Behavior"
              description="Have reported at least one risky behavior (6% lost over $500 in a day)"
            />
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ContentCard icon={AlertTriangle} title="Why Does Sports Betting Matter?" variant="warning">
            <p className="text-foreground">
              There is large rapid growth with sports betting, causing concern with integrity. High amounts of sports betting is shown in the media which directly impacts teens, causing high risk and negative behavior.
            </p>
          </ContentCard>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
            Explore the Topics
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Dive deeper into the three key areas affected by the rise of sports betting among youth.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/media" className="group">
              <ContentCard icon={Tv} title="Media Influence">
                <p className="mb-4">
                  How advertising, social media, and celebrity endorsements normalize gambling for young audiences.
                </p>
                <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </span>
              </ContentCard>
            </Link>

            <Link to="/teenagers" className="group">
              <ContentCard icon={Users} title="Impact on Teenagers">
                <p className="mb-4">
                  The psychological and financial effects of gambling on developing minds and young lives.
                </p>
                <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </span>
              </ContentCard>
            </Link>

            <Link to="/integrity" className="group">
              <ContentCard icon={Shield} title="Sports Integrity">
                <p className="mb-4">
                  How betting threatens fair play, from match-fixing scandals to the erosion of trust in sports.
                </p>
                <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </span>
              </ContentCard>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
