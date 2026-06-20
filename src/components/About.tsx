import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Precision. Quality. Reliability.</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At MediSupply, we understand that the tools in a surgeon's hands must be flawless. We are a premier supplier of high-end medical instruments, diagnostic devices, and hospital equipment, serving top-tier healthcare institutions globally.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Surgical Instruments",
                "Hospital Equipment",
                "Diagnostic Devices",
                "ICU Equipment",
                "Laboratory Instruments",
                "Medical Consumables",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                alt="Medical instruments"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-border">
              <div className="text-primary font-bold text-2xl mb-1">ISO 13485</div>
              <div className="text-muted-foreground text-sm font-medium">Certified Supplier</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
