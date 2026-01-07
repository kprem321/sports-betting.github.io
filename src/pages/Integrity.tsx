import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Integrity = () => {
  return (
    <Layout>
      <HeroSection
        title="Betting and Integrity in Modern Sports"
        subtitle="Exploring the tension between sports betting expansion and the preservation of fair play"
        accent="Sports Integrity"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Summary Button */}
            <div className="flex justify-center mb-12">
              <Button asChild size="lg" className="gap-2">
                <a 
                  href="https://drive.google.com/file/d/1dQni1fy7Vz--TyXbfT19F8aSpiJbBi0h/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  Summary of the Article
                </a>
              </Button>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                As sports betting becomes more and more mixed with professional sports, integrity is now the center of debate. While critics argue that this creates more opportunities for corruption and abuse simply due to the large amount of money involved, defenders of the leagues argue back that the betting actually strengthens integrity by allowing stronger monitoring to find suspicious behavior. In fact, we see a similar theme in the book <em>Talking to Strangers</em>, by Malcolm Gladwell. In this book, Gladwell discusses how institutions place trust in systems and appearances, rather than acknowledging the truth in deception and lies. This debate is further propagated by recent scandals, which we will explore below.
              </p>
            </div>

            {/* What the leagues say */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                What the leagues say:
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Major leagues, such as the NFL, NBA, and NHL, argue that legalized sports betting strengthens integrity. They say that regulated sportsbooks allow for stronger scrutiny and regulation of the betting industry, which is not possible in offshore and illegal markets.
                </p>
                <p className="leading-relaxed">
                  This is done by collecting large amounts of the wagering data and monitoring them in real-time, allowing them to find usual patterns that can show that match fixing or information leaks are occurring. Sports Business Journel explain that leagues argue legal betting allows them to "monitor suspicious wagering patterns" that would otherwise go undetected in the offshore markets.
                </p>
                <p className="leading-relaxed">
                  Due to this monitoring, the leagues argue that the regulated sportsbooks are safer than the illegal offshore ones, as in those, the activity is hidden and impossible to track. Much like the misplaced trust seen in <em>Talking to Strangers</em>, leagues often assume that the surveillance results that the sportsbooks provide is the actual truth or are perfectly even when this is not the case, as seen by the many scandals.
                </p>
              </div>
            </div>

            {/* What the critics say */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                What the critics say:
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Many fans and critics consider these promises to be too weak and flimsy, especially due to the high-profile scandals that have recently popped up in leagues like the NBA, NFL, etc, leading to the public sentiment that sportsbook monitoring often fails in preventing wrongdoing. This public reaction is similar to the anecdotes Gladwell provides in his book, where people assume they can detect deception and lies, but in reality, constantly overestimate their ability and wrongly assume they are telling the truth, even with safeguards in place.
                </p>
                <p className="leading-relaxed">
                  Furthermore, the number of variables that can be manipulated or sold has increased with this increase in betting, increasing opportunities for exploitation and leakable information that is being taken advantage of. While the leagues say they have the technology to monitor quickly that works, experts, according to the Reuters article, argue that due to the sheer number of variables, it is impossible to track everything and prevent all insider abuse. In Reuters, experts warn that with increased betting, it "creates more opportunities for exploitation," just emphasizing how limited the current systems to detect fraud are. Each game, more and more variables are added, which are just more variables that can be manipulated.
                </p>
              </div>
            </div>

            {/* Scandals */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Scandals:
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  According to Reuters, more than 30 people with insider information have been charged with fraud, manipulation, or insider activity, all through betting manipulation. These charges are against many top-level people within the field, such as NBA players, coaches, and other high-level team insiders.
                </p>
                <p className="leading-relaxed">
                  In all of these cases, these people shared private information to influence betting outcomes. This tended to focus on proposition betting. Proposition betting, or prop betting for short, is when a wager is placed on a specific event occurring. Due to the sheer number of variables, these bets are incredibly easy to manipulate and heavily depend on insider knowledge, making them easy to abuse.
                </p>
                <p className="leading-relaxed">
                  In 2018, the Supreme Court legalized sports betting nationwide, which is when the league quickly partnered with different sportsbooks. However, the influx of cases since then has shown that integrity is only decreasing, and legalizing sports betting has been responsible for this drop.
                </p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Conclusion:
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This debate of integrity continues to blow out of control. Leagues continue to argue that sportsbooks allow for stronger scrutiny and prevent illegal markets, but many remain skeptical due to the numerous scandals that have unfolded. This is exactly what Gladwell argued in <em>Talking to Strangers</em>: relationships based on assumed truth and trust in systems are weak, increasing the distrust in monitoring for integrity within sports.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Integrity;
