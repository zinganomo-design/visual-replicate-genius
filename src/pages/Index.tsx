import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import StatsSection from "@/components/StatsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Pill, Heart, Activity, Stethoscope, ChevronLeft, ChevronRight } from "lucide-react";

import betadineImg from "@/assets/products/betadine.jpg";
import mucosolvanImg from "@/assets/products/mucosolvan.jpg";
import panadolImg from "@/assets/products/panadol.jpg";

const categories = [
  {
    icon: Heart,
    title: "Nutrition &",
    subtitle: "Supplements",
  },
  {
    icon: Activity,
    title: "Sports",
    subtitle: "Nutrition",
  },
  {
    icon: Pill,
    title: "Medicines",
  },
  {
    icon: Stethoscope,
    title: "Pharmacy",
  },
];

const products = [
  {
    image: betadineImg,
    name: "Betadine Mouthwash And Gargle 250 Ml",
    description: "Kills bacteria, viruses, fungi, spores and protozoa",
    price: "PKR 40.60",
    isOutOfStock: false,
  },
  {
    image: mucosolvanImg,
    name: "Mucosolvan 30mg/5 5ml Syrup 100 Ml Sugar Free",
    description: "Clears mucus and facilitates expectoration",
    price: "PKR 82.50",
    isOutOfStock: true,
  },
  {
    image: panadolImg,
    name: "Panadol Migraine Tablets 24's",
    description: "Pain reliever with Acetylsalicylic acid and Paracetamol",
    price: "PKR 28.50",
    isOutOfStock: false,
  },
  {
    image: betadineImg,
    name: "Betadine Mouthwash And Gargle 250 Ml",
    description: "Kills bacteria, viruses, fungi, spores and protozoa",
    price: "PKR 40.60",
    isOutOfStock: false,
  },
  {
    image: mucosolvanImg,
    name: "Mucosolvan 30mg/5 5ml Syrup 100 Ml Sugar Free",
    description: "Clears mucus and facilitates expectoration",
    price: "PKR 82.50",
    isOutOfStock: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <Hero />

      {/* Categories Section */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                icon={category.icon}
                title={category.title}
                subtitle={category.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary">Instant Pharmacy</h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Button size="icon" variant="outline" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button className="bg-primary hover:bg-primary-dark font-semibold">
                View All
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      
      <Newsletter />
      
      <Footer />
    </div>
  );
};

export default Index;
