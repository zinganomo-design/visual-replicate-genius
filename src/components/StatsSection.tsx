import { Users, CreditCard, Package, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "32 Million+",
    label: "Registered users as of Mar 31, 2022",
  },
  {
    icon: CreditCard,
    value: "36 Million+",
    label: "Orders on SereneMeds till date",
  },
  {
    icon: Package,
    value: "99000+",
    label: "Unique items sold last 3 months",
  },
  {
    icon: MapPin,
    value: "19500+",
    label: "Pin codes serviced last 3 months",
  },
];

const StatsSection = () => {
  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-dark/30 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-primary-foreground mb-12">
          Why Choose Us?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-primary-foreground"
            >
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
