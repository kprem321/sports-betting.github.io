interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

const StatCard = ({ value, label, description }: StatCardProps) => {
  return (
    <div className="text-center p-6 bg-card rounded-lg border border-border card-hover">
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{value}</div>
      <div className="font-semibold text-foreground mb-1">{label}</div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
