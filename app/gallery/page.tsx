import { Camera, GraduationCap, Briefcase, Leaf } from "lucide-react";
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

const gallerySections = [
  {
    title: "Education Moments",
    icon: GraduationCap,
    color: "text-primary",
    description:
      "Classroom sessions, mentoring programs, and student milestones.",
    tags: ["Classes 9-12", "JEE/NEET", "Workshops"],
  },
  {
    title: "Office Projects",
    icon: Briefcase,
    color: "text-primary",
    description:
      "Office installations, corporate deliveries, and setup transformations.",
    tags: ["Bulk Orders", "Installations", "Support"],
  },
  {
    title: "Ayurvedic Wellness",
    icon: Leaf,
    color: "text-primary",
    description:
      "Product highlights, wellness kits, and customer success stories.",
    tags: ["Natural Care", "Wellness Kits", "Consultation"],
  },
];

const placeholders = Array.from({ length: 9 }, (_, idx) => idx + 1);

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">EDUSIRES Gallery</h1>
            <p className="text-lg md:text-xl opacity-90">
              A visual showcase of our journey across education, office
              solutions, and Ayurvedic wellness.
            </p>
            <div className="inline-flex items-center gap-2 rounded-md border border-white/30 px-4 py-2 text-sm">
              <Camera className="w-4 h-4" />
              Real initiatives. Real impact. Real outcomes.
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8 space-y-8">
          {gallerySections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <section.icon className={`w-6 h-6 ${section.color}`} />
                  <CardTitle className="text-2xl">{section.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {section.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 pt-1">
                  {section.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {placeholders.map((item) => (
                    <div
                      key={`${section.title}-${item}`}
                      className="group aspect-[4/3] rounded-lg border-2 border-border/70 bg-muted/40 p-4 flex flex-col items-center justify-center text-center transition-colors hover:border-primary/40"
                    >
                      <Camera className="w-8 h-8 text-muted-foreground mb-2" />
                      <p className="font-medium">{section.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Media slot {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
