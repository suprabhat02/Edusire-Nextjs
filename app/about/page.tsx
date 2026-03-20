"use client";

import {
  Calendar,
  MapPin,
  Award,
  Users,
  Target,
  Heart,
  BookOpen,
  Briefcase,
  Leaf,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const timeline = [
  {
    year: "1991",
    title: "Birth & Early Life",
    description:
      "H.K. Verma born on March 26, 1991, in a remote village in Madhepura district, Bihar",
  },
  {
    year: "2010",
    title: "Educational Foundation",
    description:
      "Completed higher secondary education with distinction, developing passion for teaching",
  },
  {
    year: "2015",
    title: "Teaching Career Begins",
    description:
      "Started teaching local students, focusing on underprivileged children",
  },
  {
    year: "2018",
    title: "EDUSIRES Founded",
    description: "Established EDUSIRES as a formal educational institution",
  },
  {
    year: "2020",
    title: "Business Expansion",
    description:
      "Expanded into office appliances supply to support local businesses",
  },
  {
    year: "2022",
    title: "Ayurvedic Division",
    description: "Launched ayurvedic medicine trade with trademark guarantee",
  },
  {
    year: "2024",
    title: "Multi-Domain Success",
    description:
      "Established as a trusted name across education, business, and wellness sectors",
  },
];

const achievements = [
  {
    icon: Users,
    title: "500+ Students Mentored",
    description:
      "Successfully guided students from underprivileged backgrounds",
  },
  {
    icon: Award,
    title: "ISO Certified Supplier",
    description: "Recognized for quality in office equipment supply",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Significant contribution to rural education and development",
  },
  {
    icon: Target,
    title: "Multi-Domain Excellence",
    description: "Successfully operating across three different industries",
  },
];

const values = [
  {
    title: "Education First",
    description:
      "Believing that education is the foundation of all progress and development",
    icon: BookOpen,
  },
  {
    title: "Quality Assurance",
    description:
      "Maintaining highest standards in all products and services we offer",
    icon: Award,
  },
  {
    title: "Community Service",
    description:
      "Committed to uplifting communities through our various initiatives",
    icon: Heart,
  },
  {
    title: "Innovation",
    description: "Continuously evolving and adapting to meet changing needs",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About EDUSIRES
            </h1>
            <p className="text-xl mb-8 opacity-90">
              The inspiring journey of H.K. Verma and the growth of EDUSIRES
            </p>
            <blockquote className="text-2xl font-medium italic border-l-4 border-white pl-6">
              "Desire to Destination, Through Education."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Our Founder</h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                H.K. Verma
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  H.K. Verma is a dynamic and visionary entrepreneur, educator,
                  and social contributor, widely recognized for his commitment
                  to empowering students and uplifting communities through
                  education and service.
                </p>
                <p>
                  Born on March 26, 1991, in a remote village in Madhepura
                  district, Bihar, Mr. Verma has emerged as a symbol of
                  dedication, resilience, and leadership.
                </p>
                <p>
                  He is the Founder and CEO of EDUSIRES, a multi-faceted
                  organization dedicated to providing quality education to
                  students from Class 9 to 12, as well as foundational training
                  for NEET-UG and JEE (Main/Advanced) aspirants.
                </p>
                <p>
                  Under his leadership, EDUSIRES has grown into a trusted name
                  not only in the field of academic coaching but also in
                  supplying office appliances, stationery, and promoting
                  Ayurvedic medicine trade.
                </p>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Born: March 26, 1991</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Madhepura, Bihar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Founder & CEO</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>500+ Students Mentored</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="H.K. Verma - Founder"
                className="rounded-2xl border-2 border-border"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">2018</div>
                  <div className="text-sm">Founded EDUSIRES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  To empower students through quality education, support
                  businesses with reliable office solutions, and promote
                  wellness through authentic Ayurvedic products. We strive to
                  bridge the gap between aspiration and achievement, especially
                  for students from underprivileged backgrounds.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  To become a leading multi-domain organization that transforms
                  lives through education, empowers businesses with quality
                  products, and promotes holistic wellness. We envision a future
                  where every student achieves their dreams and every community
                  prospers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">EDUSIRES Journey</h2>
            <p className="text-xl text-muted-foreground">
              From humble beginnings to multi-domain success
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-2 top-0 w-0.5 h-full bg-primary/20 md:left-1/2 md:-translate-x-1/2"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start pl-10 md:pl-0 md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}
                  >
                    <Card className="hover:border-primary/40 transition-colors">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <Badge
                            variant="secondary"
                            className="text-lg px-3 py-1"
                          >
                            {item.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-0 top-8 z-10 md:relative md:left-auto md:top-auto">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that define our success and impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {achievement.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Three Domains */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Three Domains</h2>
            <p className="text-xl text-muted-foreground">
              Excellence across education, business solutions, and wellness
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  Education Services
                </CardTitle>
                <CardDescription>
                  Classes 9-12, JEE, NEET & Foundation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive coaching programs designed to help students
                  achieve their academic goals and crack competitive
                  examinations with confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  Office Appliances
                </CardTitle>
                <CardDescription>Complete business solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ISO certified supplier of office equipment, furniture, and
                  stationery, supporting businesses with quality products and
                  reliable service.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-primary">
                  Ayurvedic Medicine
                </CardTitle>
                <CardDescription>Natural wellness solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Authentic Ayurvedic products with trademark guarantee,
                  promoting natural health and wellness through traditional
                  formulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
