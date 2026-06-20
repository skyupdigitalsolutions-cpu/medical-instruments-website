import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Valid email is required"),
  hospital: z.string().min(2, "Hospital/Clinic name is required"),
  requirement: z.string().min(1, "Please select a requirement"),
  message: z.string().optional(),
});

export function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      hospital: "",
      requirement: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Inquiry Submitted Successfully",
      description: "Our procurement team will contact you within 24 hours.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Need a quotation for surgical instruments or hospital equipment? Reach out to our dedicated support team today.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground mt-1">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground mt-1">info@medisupply.in</p>
                  <p className="text-sm text-muted-foreground">For general inquiries and quotes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground">Headquarters</h4>
                  <p className="text-muted-foreground mt-1">123 Medical District</p>
                  <p className="text-muted-foreground">Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-border shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quotation</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Dr. John Doe" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="contact@hospital.com" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hospital"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hospital/Clinic Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Apollo Healthcare" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="requirement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Requirement</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-white">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="surgical">Surgical Instruments</SelectItem>
                          <SelectItem value="diagnostic">Diagnostic Equipment</SelectItem>
                          <SelectItem value="icu">ICU Equipment</SelectItem>
                          <SelectItem value="furniture">Hospital Furniture</SelectItem>
                          <SelectItem value="lab">Laboratory Equipment</SelectItem>
                          <SelectItem value="consumables">Medical Consumables</SelectItem>
                          <SelectItem value="other">Other / Mixed</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide specifics about your requirement, quantities, or models..." 
                          className="bg-white min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-12 text-lg">Submit Inquiry</Button>
              </form>
            </Form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
