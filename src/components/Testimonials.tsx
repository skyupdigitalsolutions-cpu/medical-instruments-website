import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "MediSupply has been our trusted partner for surgical instruments for over 5 years. Their product quality and delivery reliability is unmatched.",
    author: "Dr. Priya Sharma",
    role: "Hospital Administrator",
    org: "Apollo Healthcare"
  },
  {
    quote: "The precision of the surgical instruments we source from MediSupply directly impacts patient outcomes. Their quality is exceptional.",
    author: "Dr. Rajesh Kumar",
    role: "Senior Surgeon",
    org: "Fortis Hospital"
  },
  {
    quote: "As a growing clinic, pricing and availability matter. MediSupply delivers on both consistently without compromising on quality.",
    author: "Mr. Anil Verma",
    role: "Clinic Owner",
    org: "LifeCare Clinic"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-primary/5 rounded-b-[100px] -z-10" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Experts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Hear from healthcare professionals who rely on our instruments daily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-md border border-border shadow-lg p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-foreground text-lg mb-8 italic relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{t.author}</div>
                  <div className="text-sm text-muted-foreground">{t.role}, {t.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
