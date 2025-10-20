import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

const CategoryCard = ({ icon: Icon, title, subtitle }: CategoryCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group border border-border">
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
