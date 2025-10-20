import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-light/20 rounded-full blur-3xl translate-x-1/3" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-dark/30 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground space-y-6">
            <h2 className="text-6xl font-bold leading-tight">
              HEALTH<br />SOLUTION
            </h2>
            <p className="text-lg opacity-90">
              We're available 24/7. Order Now &
            </p>
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold text-lg px-8"
            >
              GET AN INSTANT 20% OFF
            </Button>
          </div>
          
          <div className="relative">
            <img
              src={heroIllustration}
              alt="Medical solutions"
              className="w-full h-auto drop-shadow-2xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
