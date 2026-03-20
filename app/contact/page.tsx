import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const contactChannels = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91-XXXXXXXXXX",
    note: "Mon-Sat, 9:00 AM - 7:00 PM",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "info@edusires.com",
    note: "Response within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Office",
    detail: "Madhepura, Bihar, India",
    note: "Pre-book your visit",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">Contact EDUSIRES</h1>
            <p className="text-lg md:text-xl opacity-90">
              Have questions about education, office solutions, or Ayurvedic
              products? We are here to help.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm">
              <MessageCircle className="w-4 h-4" />
              Quick support. Clear guidance. Trusted team.
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {contactChannels.map((channel, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <channel.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{channel.title}</CardTitle>
                  <CardDescription>{channel.note}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium break-words">{channel.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-5 items-start">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle className="text-2xl">Send an Inquiry</CardTitle>
                <CardDescription>
                  Tell us what you need and our team will connect with you
                  shortly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter phone number" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">Interested In</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="education">
                            Education Services
                          </SelectItem>
                          <SelectItem value="office">
                            Office Appliances
                          </SelectItem>
                          <SelectItem value="ayurvedic">
                            Ayurvedic Products
                          </SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Describe your requirement..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">Working Hours</CardTitle>
                <CardDescription>
                  We are available for call and walk-in consultation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM to 7:00 PM</p>
                    <p>Saturday: 9:00 AM to 5:00 PM</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                </div>
                <div className="rounded-xl border-2 border-dashed border-border p-4 text-sm text-muted-foreground">
                  For urgent support, mention your concern in the message and
                  request a priority callback.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
