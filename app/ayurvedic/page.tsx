"use client"

import { Leaf, Shield, Award, Heart, Brain, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const productCategories = [
  {
    title: "Immunity Boosters",
    description: "Natural supplements to strengthen your immune system",
    image: "/placeholder.svg?height=200&width=300",
    products: ["Chyawanprash", "Giloy Tablets", "Ashwagandha", "Tulsi Drops", "Amla Juice"],
    icon: Shield,
  },
  {
    title: "Digestive Support",
    description: "Ayurvedic solutions for digestive health",
    image: "/placeholder.svg?height=200&width=300",
    products: ["Triphala Churna", "Digestive Tablets", "Liver Tonic", "Acidity Relief", "Constipation Care"],
    icon: Heart,
  },
  {
    title: "Hair & Skin Care",
    description: "Natural beauty and wellness products",
    image: "/placeholder.svg?height=200&width=300",
    products: ["Hair Oil", "Face Packs", "Skin Cream", "Anti-Aging Serum", "Herbal Shampoo"],
    icon: Sparkles,
  },
  {
    title: "Mental Wellness",
    description: "Herbs for stress relief and mental clarity",
    image: "/placeholder.svg?height=200&width=300",
    products: ["Brahmi Tablets", "Stress Relief Oil", "Memory Booster", "Sleep Aid", "Meditation Tea"],
    icon: Brain,
  },
  {
    title: "Joint & Bone Care",
    description: "Natural solutions for joint health",
    image: "/placeholder.svg?height=200&width=300",
    products: ["Joint Pain Oil", "Calcium Tablets", "Arthritis Care", "Muscle Relaxant", "Bone Strength"],
    icon: Award,
  },
  {
    title: "Women's Health",
    description: "Specialized ayurvedic products for women",
    image: "/placeholder.svg?height=200&width=300",
    products: ["Menstrual Care", "Pregnancy Support", "Hormonal Balance", "Iron Supplements", "Wellness Tonic"],
    icon: Heart,
  },
]

const certifications = [
  {
    title: "AYUSH Certified",
    description: "Approved by Ministry of AYUSH, Government of India",
    icon: Award,
  },
  {
    title: "GMP Certified",
    description: "Good Manufacturing Practices compliance",
    icon: Shield,
  },
  {
    title: "ISO 9001:2015",
    description: "International quality management standards",
    icon: Award,
  },
  {
    title: "Trademark Guarantee",
    description: "Authentic products with trademark protection",
    icon: Shield,
  },
]

const benefits = [
  "100% Natural Ingredients",
  "No Side Effects",
  "Traditional Formulations",
  "Scientific Testing",
  "Quality Assurance",
  "Expert Consultation",
]

const testimonials = [
  {
    name: "Dr. Sunita Sharma",
    role: "Ayurveda Practitioner",
    content:
      "I recommend EDUSIRES ayurvedic products to my patients. The quality is exceptional and results are visible.",
    rating: 5,
  },
  {
    name: "Ramesh Kumar",
    role: "Regular Customer",
    content: "Using their immunity booster for 6 months. Haven't fallen sick even once. Highly effective products.",
    rating: 5,
  },
  {
    name: "Priya Devi",
    role: "Health Enthusiast",
    content: "Their hair oil transformed my hair health completely. Natural products with amazing results.",
    rating: 5,
  },
]

export default function AyurvedicPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">Ayurvedic Products</h1>
            <p className="text-xl mb-8 opacity-90">
              Authentic Ayurvedic solutions with trademarked guarantee for natural health & wellness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Leaf className="w-5 h-5 mr-2" />
                Explore Remedies
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-800 bg-transparent"
              >
                <Shield className="w-5 h-5 mr-2" />
                Buy Ayurvedic Kits
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Ayurvedic Line */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Our Ayurvedic Line</h2>
              <p className="text-lg text-muted-foreground mb-6">
                EDUSIRES brings you authentic Ayurvedic products rooted in ancient wisdom and backed by modern science.
                Our products are carefully formulated using traditional recipes and high-quality natural ingredients.
              </p>
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold">Our Commitment:</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-emerald-600" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button size="lg">Learn More About Our Process</Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Ayurvedic Products"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-4 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Natural</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive range of ayurvedic products for holistic wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </div>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
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
                    <Button className="w-full mt-4">Shop Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-muted-foreground">
              Our products meet the highest standards of quality and safety
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <cert.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{cert.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Inquiry Form */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Product Inquiry</h2>
              <p className="text-xl text-muted-foreground">
                Get personalized recommendations from our ayurvedic experts
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Health Consultation Form</CardTitle>
                <CardDescription>Share your health concerns and get customized product recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" placeholder="Enter your age" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="healthConcern">Primary Health Concern</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your main concern" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immunity">Immunity & General Health</SelectItem>
                        <SelectItem value="digestive">Digestive Issues</SelectItem>
                        <SelectItem value="skin-hair">Skin & Hair Problems</SelectItem>
                        <SelectItem value="stress">Stress & Mental Health</SelectItem>
                        <SelectItem value="joint">Joint & Bone Health</SelectItem>
                        <SelectItem value="womens">Women's Health</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="symptoms">Describe Your Symptoms</Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Please describe your symptoms or health concerns in detail..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="medications">Current Medications (if any)</Label>
                    <Textarea id="medications" placeholder="List any current medications or treatments..." rows={2} />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Get Expert Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-xl text-muted-foreground">Real experiences from our satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Wellness Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of authentic Ayurveda with our premium products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Leaf className="w-5 h-5 mr-2" />
              Shop All Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              <Shield className="w-5 h-5 mr-2" />
              Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
