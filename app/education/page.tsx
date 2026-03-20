"use client";

import {
  BookOpen,
  Users,
  Clock,
  Award,
  Download,
  Play,
  Star,
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

const courses = [
  {
    title: "Class 9 Foundation",
    description: "Strong foundation building for future competitive exams",
    duration: "1 Year",
    students: "150+",
    subjects: ["Mathematics", "Science", "English"],
    fee: "₹15,000/year",
  },
  {
    title: "Class 10 Board Prep",
    description: "Comprehensive preparation for board examinations",
    duration: "1 Year",
    students: "200+",
    subjects: ["Mathematics", "Science", "Social Science", "English"],
    fee: "₹18,000/year",
  },
  {
    title: "Class 11 Science",
    description: "PCM/PCB streams with competitive exam focus",
    duration: "1 Year",
    students: "180+",
    subjects: ["Physics", "Chemistry", "Mathematics/Biology"],
    fee: "₹25,000/year",
  },
  {
    title: "Class 12 Science",
    description: "Board + JEE/NEET integrated preparation",
    duration: "1 Year",
    students: "160+",
    subjects: ["Physics", "Chemistry", "Mathematics/Biology"],
    fee: "₹28,000/year",
  },
  {
    title: "JEE Main/Advanced",
    description: "Intensive preparation for engineering entrance",
    duration: "2 Years",
    students: "120+",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    fee: "₹35,000/year",
  },
  {
    title: "NEET Preparation",
    description: "Medical entrance exam focused coaching",
    duration: "2 Years",
    students: "100+",
    subjects: ["Physics", "Chemistry", "Biology"],
    fee: "₹32,000/year",
  },
];

const faculty = [
  {
    name: "Dr. Rajesh Kumar",
    subject: "Physics",
    experience: "15 Years",
    qualification: "Ph.D. Physics, IIT Delhi",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Prof. Sunita Sharma",
    subject: "Chemistry",
    experience: "12 Years",
    qualification: "M.Sc. Chemistry, DU",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Mr. Amit Singh",
    subject: "Mathematics",
    experience: "10 Years",
    qualification: "M.Sc. Mathematics, BHU",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Dr. Priya Verma",
    subject: "Biology",
    experience: "8 Years",
    qualification: "Ph.D. Botany, JNU",
    image: "/placeholder.svg?height=200&width=200",
  },
];

const testimonials = [
  {
    name: "Rahul Gupta",
    course: "JEE Main",
    result: "AIR 2,456",
    content:
      "The systematic approach and regular tests helped me crack JEE Main with a good rank.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    course: "NEET",
    result: "AIR 8,234",
    content:
      "Excellent faculty and study material. The doubt clearing sessions were very helpful.",
    rating: 5,
  },
  {
    name: "Vikash Kumar",
    course: "Class 12",
    result: "95.2%",
    content:
      "Scored excellent marks in board exams. Thank you EDUSIRES for the guidance.",
    rating: 5,
  },
];

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Education Portal
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive coaching for Classes 9-12, JEE, NEET & Foundation
              courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <BookOpen className="w-5 h-5 mr-2" />
                Book Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
            <p className="text-xl text-muted-foreground">
              Choose from our comprehensive range of courses designed for
              success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="secondary">
                      <Clock className="w-3 h-3 mr-1" />
                      {course.duration}
                    </Badge>
                    <Badge variant="outline">
                      <Users className="w-3 h-3 mr-1" />
                      {course.students}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Subjects:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.subjects.map((subject, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {course.fee}
                      </span>
                      <Button>Enroll Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expert Faculty</h2>
            <p className="text-xl text-muted-foreground">
              Learn from experienced educators and subject matter experts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {faculty.map((teacher, index) => (
              <Card
                key={index}
                className="text-center hover:border-primary/40 transition-colors"
              >
                <CardHeader>
                  <img
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-lg">{teacher.name}</CardTitle>
                  <CardDescription>{teacher.subject} Faculty</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span>{teacher.experience}</span>
                    </div>
                    <p className="text-muted-foreground">
                      {teacher.qualification}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Book Your Free Demo</h2>
              <p className="text-xl text-muted-foreground">
                Experience our teaching methodology before enrolling
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll contact you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <Label htmlFor="course">Course Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="class9">
                          Class 9 Foundation
                        </SelectItem>
                        <SelectItem value="class10">
                          Class 10 Board Prep
                        </SelectItem>
                        <SelectItem value="class11">
                          Class 11 Science
                        </SelectItem>
                        <SelectItem value="class12">
                          Class 12 Science
                        </SelectItem>
                        <SelectItem value="jee">JEE Main/Advanced</SelectItem>
                        <SelectItem value="neet">NEET Preparation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Book Free Demo Class
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear from our successful students who achieved their dreams
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
                  <CardDescription>
                    {testimonial.course} • {testimonial.result}
                  </CardDescription>
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

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Study Resources</h2>
            <p className="text-xl text-muted-foreground">
              Access our comprehensive study materials and resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:border-primary/40 transition-colors">
              <CardHeader>
                <Download className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Study Materials</CardTitle>
                <CardDescription>
                  Comprehensive notes, assignments, and practice papers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Download PDFs
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary/40 transition-colors">
              <CardHeader>
                <Play className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Demo Videos</CardTitle>
                <CardDescription>
                  Sample lectures and concept explanation videos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Watch Videos
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:border-primary/40 transition-colors">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Online Tests</CardTitle>
                <CardDescription>
                  Practice tests and mock examinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  Take Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
