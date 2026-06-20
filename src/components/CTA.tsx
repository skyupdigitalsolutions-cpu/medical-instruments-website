import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary to-secondary">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1920&q=80')] opacity-10 mix-blend-overlay bg-cover bg-center" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Looking for Reliable Medical Equipment?</h2>
        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl mb-10">
          Our experts are ready to help you find the right solution for your healthcare facility. Partner with us for precision and reliability.
        </p>
        <Button size="lg" asChild className="bg-white text-primary hover:bg-slate-100 text-lg px-10 h-14">
          <a href="#contact">Request a Quote</a>
        </Button>
      </div>
    </section>
  );
}
