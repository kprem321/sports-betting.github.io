import { Link } from "react-router-dom";
import { TrendingUp, Users, Shield, Tv, ArrowRight, AlertTriangle } from "lucide-react";
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
              Sports betting is the activity of predicting sports results and placing a wager on the outcome. 
              While it may seem harmless, it has become a growing concern, especially among young people.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">How It Works</h3>
              <p className="text-muted-foreground">
                Bettors place money on predictions about sporting events—from who wins a game to specific 
                statistics like points scored. With the rise of mobile apps and online platforms, betting 
                has never been more accessible.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-foreground">The Growing Industry</h3>
              <p className="text-muted-foreground">
                Since 2018, when the U.S. Supreme Court allowed states to legalize sports betting, 
                the industry has exploded. Billions of dollars are wagered annually, and aggressive 
                marketing targets younger demographics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            The Numbers Tell a Story
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              value="67%"
              label="Youth Exposure"
              description="Young people who have seen gambling ads"
            />
            <StatCard
              value="2-4x"
              label="Higher Risk"
              description="Teens are more likely to develop gambling problems"
            />
            <StatCard
              value="$7B+"
              label="Annual Ads"
              description="Spent on gambling advertising yearly"
            />
            <StatCard
              value="18-24"
              label="Age Group"
              description="Fastest growing demographic for betting apps"
            />
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ContentCard icon={AlertTriangle} title="Why This Matters" variant="warning">
            <p className="text-foreground">
              Gambling addiction can develop quickly in young people. The teenage brain is still developing, 
              making youth more susceptible to addiction and impulsive decision-making. What starts as "just for fun" 
              can quickly spiral into financial troubles, mental health issues, and strained relationships.
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
