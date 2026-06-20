import { motion } from "framer-motion";
import { ShieldCheck, Truck, HeadphonesIcon, Building2, PackageCheck, Award, BadgeCheck, Stethoscope } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Certified Quality Products", desc: "All products meet international ISO and CE certification standards." },
  { icon: Building2, title: "Trusted Industry Suppliers", desc: "Partnering with top global manufacturers of medical equipment." },
  { icon: Award, title: "Competitive Pricing", desc: "Best-in-class pricing structures optimized for hospital procurement." },
  { icon: Truck, title: "Fast Delivery", desc: "Expedited shipping network to ensure you never run out of critical supplies." },
  { icon: HeadphonesIcon, title: "Technical Support", desc: "24/7 dedicated support team for equipment setup and troubleshooting." },
  { icon: PackageCheck, title: "Bulk Order Availability", desc: "Capable of fulfilling massive institutional procurement requests." },
  { icon: Stethoscope, title: "Hospital & Clinic Solutions", desc: "Tailored equipment packages for different sizes of healthcare facilities." },
  { icon: BadgeCheck, title: "Warranty Assistance", desc: "Comprehensive warranty support and rapid replacement guarantees." }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose MediSupply</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We are more than a supplier. We are a strategic partner in delivering exceptional patient care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-muted/50 border border-border hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feat.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feat.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
