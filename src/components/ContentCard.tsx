import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ContentCardProps {
  icon?: LucideIcon;
  title: string;
  children: ReactNode;
  variant?: "default" | "warning";
}

const ContentCard = ({ icon: Icon, title, children, variant = "default" }: ContentCardProps) => {
  return (
    <div className={`card-hover rounded-lg p-6 ${
      variant === "warning" 
        ? "bg-accent/10 border-2 border-accent" 
        : "bg-card border border-border shadow-sm"
    }`}>
      {Icon && (
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
          variant === "warning" ? "bg-accent" : "bg-primary"
        }`}>
          <Icon className={variant === "warning" ? "text-accent-foreground" : "text-primary-foreground"} size={24} />
        </div>
      )}
      <h3 className="font-serif text-xl font-bold text-foreground mb-3">{title}</h3>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
};

export default ContentCard;
