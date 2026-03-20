"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Briefcase,
  Leaf,
  Star,
  Users,
  Award,
  Phone,
  Mail,
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
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const heroSlides = [
  {
    title: "Empowering Students, Building Futures",
    subtitle: "Quality Education for Classes 9-12, JEE, NEET & Foundation",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Join Our Courses",
    bgColor: "bg-primary",
  },
  {
    title: "Certified ISO Office Equipment Supplier",
    subtitle: "Premium Office Appliances & Stationery for Your Business",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Explore Office Products",
    bgColor: "bg-primary",
  },
  {
    title: "Authentic Ayurvedic Solutions",
    subtitle: "Trademarked Guarantee for Natural Health & Wellness",
    image: "/placeholder.svg?height=600&width=1200",
    cta: "Shop Ayurvedic Remedies",
    bgColor: "bg-primary",
  },
];

const highlights = [
  {
    icon: BookOpen,
    title: "Expert Education",
    description:
      "Comprehensive coaching for Classes 9-12, JEE, NEET & Foundation courses",
    stats: "500+ Students Enrolled",
  },
  {
    icon: Briefcase,
    title: "Office Solutions",
    description:
      "Complete range of office appliances, furniture, and stationery supplies",
    stats: "ISO Certified Supplier",
  },
  {
    icon: Leaf,
    title: "Ayurvedic Wellness",
    description:
      "Authentic ayurvedic medicines and health products with trademark guarantee",
    stats: "100% Natural Products",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "JEE Aspirant",
    content:
      "EDUSIRES transformed my preparation strategy. The faculty is exceptional and the study material is comprehensive.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content:
      "Best office equipment supplier in the region. Quality products with excellent after-sales service.",
    rating: 5,
  },
  {
    name: "Dr. Meera Singh",
    role: "Ayurveda Practitioner",
    content:
      "Their ayurvedic products are authentic and effective. I recommend them to all my patients.",
    rating: 5,
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`absolute inset-0 ${slide.bgColor} opacity-90`} />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div className="text-center max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  {slide.subtitle}
                </p>
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose EDUSIRES?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for education, office solutions, and wellness
              products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{highlight.title}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">
                    {highlight.stats}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {highlight.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Our Founder</h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                H.K. Verma
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                A dynamic and visionary entrepreneur, educator, and social
                contributor, widely recognized for his commitment to empowering
                students and uplifting communities through education and
                service.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Born March 26, 1991, Madhepura district, Bihar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Founder & CEO of EDUSIRES</span>
                </div>
              </div>
              <blockquote className="text-xl font-medium italic text-primary border-l-4 border-primary pl-4 mb-6">
                "Desire to Destination, Through Education."
              </blockquote>
              <Button size="lg">Learn More About Our Journey</Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="H.K. Verma - Founder"
                className="rounded-2xl border-2 border-border"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Students Mentored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">
              Trusted by students, businesses, and health-conscious individuals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
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

      {/* Contact CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied students and businesses who trust
            EDUSIRES
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +91-XXXXXXXXXX
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Inquiry
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
