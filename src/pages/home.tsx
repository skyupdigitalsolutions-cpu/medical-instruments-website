import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { ProductCategories } from "@/components/ProductCategories";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <ProductCategories />
      <WhyChooseUs />
      <Industries />
      <Testimonials />
      <Gallery />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
