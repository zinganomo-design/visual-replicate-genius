import { Search, ShoppingCart, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-3 border-b border-primary-light/20">
          <div className="flex items-center gap-4 flex-1 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for medicines..."
                className="pl-10 bg-background text-foreground border-none"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="relative hover:opacity-80 transition-opacity">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                0
              </span>
            </button>
            
            <div className="flex items-center gap-2">
              <select className="bg-transparent border-none text-sm font-medium cursor-pointer">
                <option>EN</option>
                <option>FR</option>
              </select>
            </div>
            
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <User className="h-4 w-4" />
              <span className="text-sm font-medium">My Account</span>
            </button>
            
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">021 3441122</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">MEDEX</h1>
            
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-primary-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light transition-colors">
                  Pharmacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light transition-colors">
                  Nutrition Supplements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light transition-colors">
                  Sports & Nutritions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light transition-colors">
                  Mother & Baby Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-light transition-colors">
                  Medicines
                </a>
              </li>
            </ul>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm" className="font-semibold">
              Shop by Brands
            </Button>
            <Button variant="destructive" size="sm" className="font-semibold">
              OFFERS
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
