"use client";

import {
  Briefcase,
  Truck,
  Award,
  Shield,
  Download,
  ShoppingCart,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const productCategories = [
  {
    title: "Laptops & Computers",
    description: "Latest laptops, desktops, and accessories",
    image: "/placeholder.svg?height=200&width=300",
    products: [
      "Business Laptops",
      "Gaming Laptops",
      "Desktop PCs",
      "Monitors",
      "Keyboards & Mouse",
    ],
  },
  {
    title: "Printers & Scanners",
    description: "High-quality printing and scanning solutions",
    image: "/placeholder.svg?height=200&width=300",
    products: [
      "Laser Printers",
      "Inkjet Printers",
      "Multifunction Printers",
      "Scanners",
      "Printer Supplies",
    ],
  },
  {
    title: "Office Furniture",
    description: "Ergonomic and stylish office furniture",
    image: "/placeholder.svg?height=200&width=300",
    products: [
      "Office Chairs",
      "Office Desks",
      "Filing Cabinets",
      "Conference Tables",
      "Storage Solutions",
    ],
  },
  {
    title: "Stationery & Supplies",
    description: "Complete range of office stationery",
    image: "/placeholder.svg?height=200&width=300",
    products: [
      "Paper & Notebooks",
      "Pens & Pencils",
      "Files & Folders",
      "Binding Supplies",
      "Office Accessories",
    ],
  },
  {
    title: "Networking Equipment",
    description: "Routers, switches, and networking solutions",
    image: "/placeholder.svg?height=200&width=300",
    products: [
      "WiFi Routers",
      "Network Switches",
      "Cables",
      "Access Points",
      "Security Cameras",
    ],
  },
  {
    title: "Audio Visual",
    description: "Projectors, speakers, and AV equipment",
    image: "/placeholder.svg?height=200&width=300",
    products: [
      "Projectors",
      "Speakers",
      "Microphones",
      "Video Conferencing",
      "Interactive Boards",
    ],
  },
];

const features = [
  {
    icon: Award,
    title: "ISO Certified",
    description: "Quality assured products with international standards",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery across Bihar and neighboring states",
  },
  {
    icon: Shield,
    title: "Warranty Support",
    description: "Comprehensive warranty and after-sales service",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock customer support and assistance",
  },
];

const testimonials = [
  {
    name: "Rajesh Enterprises",
    type: "Corporate Client",
    content:
      "Excellent service and quality products. They supplied our entire office setup within budget and timeline.",
    rating: 5,
  },
  {
    name: "Madhepura College",
    type: "Educational Institution",
    content:
      "Reliable supplier for our computer lab equipment. Great after-sales support and competitive pricing.",
    rating: 5,
  },
  {
    name: "Bihar Government Office",
    type: "Government Client",
    content:
      "Professional service and genuine products. They handle bulk orders efficiently with proper documentation.",
    rating: 5,
  },
];

export default function OfficeAppliancesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Office Appliances Division
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Your trusted partner for complete office solutions - from laptops
              to furniture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Browse Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose EDUSIRES?</h2>
            <p className="text-xl text-muted-foreground">
              Your reliable partner for all office equipment needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive range of office equipment and supplies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Popular Products:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.products.map((product, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {product}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full mt-4">View Products</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Request a Quote</h2>
              <p className="text-xl text-muted-foreground">
                Get competitive pricing for bulk orders and B2B requirements
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Bulk Order Inquiry</CardTitle>
                <CardDescription>
                  Fill out the form below for customized pricing and solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input
                        id="contactPerson"
                        placeholder="Enter contact person name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter email address"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Product Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="laptops">
                          Laptops & Computers
                        </SelectItem>
                        <SelectItem value="printers">
                          Printers & Scanners
                        </SelectItem>
                        <SelectItem value="furniture">
                          Office Furniture
                        </SelectItem>
                        <SelectItem value="stationery">
                          Stationery & Supplies
                        </SelectItem>
                        <SelectItem value="networking">
                          Networking Equipment
                        </SelectItem>
                        <SelectItem value="av">Audio Visual</SelectItem>
                        <SelectItem value="multiple">
                          Multiple Categories
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="requirements">Detailed Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Please specify your requirements, quantities, and any special needs..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="budget">Approximate Budget</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                        <SelectItem value="50k-1l">
                          ₹50,000 - ₹1,00,000
                        </SelectItem>
                        <SelectItem value="1l-5l">
                          ₹1,00,000 - ₹5,00,000
                        </SelectItem>
                        <SelectItem value="5l-10l">
                          ₹5,00,000 - ₹10,00,000
                        </SelectItem>
                        <SelectItem value="above-10l">
                          Above ₹10,00,000
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by businesses, institutions, and government organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Download Our Complete Catalog
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get detailed information about all our products, specifications,
              and pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Download className="w-5 h-5 mr-2" />
                Download PDF Catalog
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
