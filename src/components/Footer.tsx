import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Youth & Betting</h3>
            <p className="text-primary-foreground/80 text-sm">
              An educational resource exploring the impact of sports betting on young people.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Topics</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/media" className="text-primary-foreground/80 hover:text-accent transition-colors">Media Influence</Link></li>
              <li><Link to="/teenagers" className="text-primary-foreground/80 hover:text-accent transition-colors">Impact on Teenagers</Link></li>
              <li><Link to="/integrity" className="text-primary-foreground/80 hover:text-accent transition-colors">Sports Integrity</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <p className="text-primary-foreground/80 text-sm">
              If you or someone you know needs help with gambling, please reach out to a trusted adult or counselor.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>English Class Project • 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
