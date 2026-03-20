import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/logo/Edusires.svg"
              alt="EDUSIRES Logo"
              width={200}
              height={80}
            />
            <p className="text-muted-foreground">
              Empowering students, supplying businesses, and promoting wellness
              through quality education, office solutions, and authentic
              ayurvedic products.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
              <span className="cursor-pointer transition-colors hover:text-primary">
                Facebook
              </span>
              <span className="cursor-pointer transition-colors hover:text-primary">
                Twitter
              </span>
              <span className="cursor-pointer transition-colors hover:text-primary">
                Instagram
              </span>
              <span className="cursor-pointer transition-colors hover:text-primary">
                YouTube
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-primary"
              >
                About EDUSIRES
              </Link>
              <Link
                href="/education"
                className="block text-muted-foreground hover:text-primary"
              >
                Education Portal
              </Link>
              <Link
                href="/office-appliances"
                className="block text-muted-foreground hover:text-primary"
              >
                Office Shop
              </Link>
              <Link
                href="/ayurvedic"
                className="block text-muted-foreground hover:text-primary"
              >
                Ayurvedic Products
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <div className="space-y-2">
              <div className="text-muted-foreground">Classes 9-12 Coaching</div>
              <div className="text-muted-foreground">JEE/NEET Preparation</div>
              <div className="text-muted-foreground">
                Office Equipment Supply
              </div>
              <div className="text-muted-foreground">
                Ayurvedic Medicine Trade
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@edusires.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  Madhepura, Bihar, India
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} EDUSIRES. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
