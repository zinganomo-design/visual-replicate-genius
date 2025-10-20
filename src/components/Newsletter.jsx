import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">
            Join Our Newsletter
          </h2>
          <p className="text-muted-foreground">
            Join over half a million vitamin lovers and get our latest deals, articles, and resources!
          </p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="youremail@example.com"
              className="flex-1"
            />
            <Button className="bg-primary hover:bg-primary-dark font-semibold px-8">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
