"use client";
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
    <div className="bg-slate-200 dark:bg-primaryColor">
      <div className="w-full md:max-w-6xl mx-auto px-4 py-10">
        <h1 className="heading text-center">Contact Us</h1>
        <h3 className="subHeading text-center pb-4">
          We’re here to help with any questions you may have about our products
          or your order. Contact us through the form below or reach out via
          phone or email.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>
                <h3 className="heading">Send us a message</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="textNormal">
                    Name
                  </label>
                  <Input id="name" name="name" required />
                </div>
                <div>
                  <label htmlFor="email" className="textNormal">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div>
                  <label htmlFor="message" className="textNormal">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} required />
                </div>
                <div className="flex justify-center">
                  <Button type="submit" className="primaryBtn">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <p className="textNormal pt-4">Nairobi, Kenya</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-500" />
                  <p className="textNormal mt-4">+254 715 623803</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-500" />
                  <p className="textNormal mt-4">audispot254@gmail.com</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="textNormal">Everyday 24/7</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
