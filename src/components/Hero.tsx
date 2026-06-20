import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80"
          alt="Modern operating theatre"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground backdrop-blur-sm mb-6 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Premium Healthcare Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Trusted Medical Instruments &amp; Surgical Equipment
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Providing high-quality surgical instruments, hospital equipment, diagnostic devices, and healthcare solutions for hospitals, clinics, laboratories, and healthcare institutions.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" asChild className="text-base px-8">
                <a href="#contact">Request Quotation</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 text-white border-white hover:bg-white hover:text-slate-900">
                <a href="#products">View Products</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
