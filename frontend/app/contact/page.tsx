import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // Implement your form submission logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                <p>123 Business Street, City, Country</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-500" />
                <p>+1 (123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-500" />
                <p>contact@example.com</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
