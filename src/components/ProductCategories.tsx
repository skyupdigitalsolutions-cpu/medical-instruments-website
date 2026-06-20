import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Surgical Instruments",
    desc: "Forceps, Scissors, Retractors, Needle Holders",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80"
  },
  {
    name: "Diagnostic Equipment",
    desc: "Stethoscopes, BP Monitors, ECG Machines",
    img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&q=80"
  },
  {
    name: "ICU Equipment",
    desc: "Patient Monitors, Infusion Pumps, Ventilators",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80"
  },
  {
    name: "Hospital Furniture",
    desc: "Hospital Beds, Stretchers, Examination Tables",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&q=80"
  },
  {
    name: "Laboratory Equipment",
    desc: "Microscopes, Centrifuges, Analyzers",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80"
  },
  {
    name: "Medical Consumables",
    desc: "Gloves, Masks, PPE Kits, Syringes",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80"
  }
];

export function ProductCategories() {
  return (
    <section id="products" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Product Range</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive healthcare solutions meeting the highest international standards of safety and efficacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={cat.img} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-white/80 mb-4 text-sm">{cat.desc}</p>
                <Button variant="outline" className="w-fit bg-white/10 border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
