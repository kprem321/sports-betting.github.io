import { AlertTriangle, Brain, DollarSign, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContentCard from "@/components/ContentCard";
import { ExternalLink } from "lucide-react";
const Teenagers = () => {
  return (
    <Layout>
      <HeroSection
        title="Teens and Online Sports Betting: A Growing Crisis"
        subtitle="Online sports betting is becoming more and more popular in recent years, but for many teenagers it is starting to become a very serious problem."
        accent="Youth Impact"
      />
{/* Summary Link */}
<section className="py-6 bg-background">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto">
      <a
        href="https://drive.google.com/file/d/1UoQxwyUxgarukTOT0mWTktGFCJUCrzMa/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ExternalLink size={16} />
        Summary of the Article
      </a>
    </div>
  </div>
</section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              With betting apps being easily accessible and also tied to sports
              culture, gambling doesn’t feel risky but instead a new form of
              entertainment. However, the reality for many of these teens is a
              very different and darker story.
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
              One of the biggest issues teens are facing is addiction to online
              sports betting apps such as DraftKings and FanDuel. These apps are
              fast, simple to use, and always accessible; making it easy for
              young people to place bets repeatedly without realizing how much
              money and time they’re losing. Some teens place dozens of bets a
              day, usually chasing losses in hopes of winning back money that
              they have already lost.
            </p>
            <p className="text-muted-foreground">
              Sports betting is starting to be heavily normalized through sports
              culture. Ads are appearing constantly during games, social media,
              and through many influencers. It makes gambling look like a normal
              part of being a sports fan. Teens now see betting as “just for
              fun” not as a risky behavior. As the addiction develops, it leads
              to financial problems, lying to family and friends and hurting
              relationships, it creates long-term problems far beyond the bets
              themselves (NHPR, 2025).
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
                Gambling can escalate very quickly. Betting apps have been
                programmed to provide constant attention and instant rewards,
                the two things that drive attention. Teens are more vulnerable
                due to their brains still in development specifically in areas
                like impulse control and decision making.
              </p>
            </ContentCard>

            <ContentCard icon={DollarSign} title="Severe Financial Impact">
              <p>The financial impact can also be severe. Over time, repeated losses can drain savings and lead teens into debt they are not prepared to manage. This financial strain can affect college plans and future independence.</p>
            </ContentCard>

            <ContentCard icon={AlertTriangle} title="Emotional Consequences">
              <p>
                Emotionally, teens are also experiencing stress, anxiety, guilt
                and shame, hiding their behavior until it becomes overwhelming.
              </p>
            </ContentCard>

            <ContentCard icon={Shield} title="Hidden Addiction">
              <p>
                Unlike substance abuse, gambling addiction doesn’t look obvious,
                many teens would fail to recognize the danger early or do not
                seek help until the damage is irreversible
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
              Governments have responded to teen gambling concerns mainly
              through regulation and age restrictions, some requiring users to
              meet minimum age limits and also including responsible-gambling
              warnings. However, reporting also shows that these policies fail
              to address how many times teens are being exposed to betting
              advertisements. Even NHPR notes that the regulations are finding
              it difficult to maintain the growth and aggression of the online
              sports betting industries, still leaving countless young folk
              vulnerable despite the oversight.
            </p>

            <p className="text-muted-foreground mb-6">
              Research supports this gap. A 2024 study in the Journal of Family
              and Gambling Studies found that the current policies are focusing
              on age limits instead of exposure, even though its really the
              marketing that’s convincing young people to gamble (Di Censo et
              al., 2024). Massachusetts offers an example: the state is
              attempting to regulate betting through the Massachusetts Gaming
              Commission, but NHPR reports that enforcement has not yielded any
              results.
            </p>
          </div>
        </div>
      </section>

      {/* Talking to Strangers Connection */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
              Connecting This Issue to Talking to Strangers
            </h2>

            <p className="text-muted-foreground mb-6">
              In "Talking to Strangers," Malcolm Gladwell talks about how people
              often misjudge risk because they place trust in authority and
              appearances instead of actually questioning them. He argues that
              when people see something familiar they immediately assume it's
              safe. The blind trust prevents individuals from recognizing the
              danger until the harm has already occurred.
            </p>

            <p className="text-muted-foreground">
              Online sports betting has the same issue. Since betting apps are
              legal, widely advertised and connected to sports, teens find it
              harmless. Gladwell shows how people overlook the warning signs
              just like the teens are doing currently. They don’t see the risks
              of gambling when it is presented as a form of entertainment. The
              connection highlights the trust and the flawed assumptions that
              are causing young people to enter situations that are more harmful
              than they may first appear.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Teenagers;
