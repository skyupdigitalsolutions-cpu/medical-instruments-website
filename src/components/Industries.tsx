import { motion } from "framer-motion";

const industries = [
  { name: "Hospitals", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" },
  { name: "Clinics", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80" },
  { name: "Diagnostic Centers", img: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80" },
  { name: "Laboratories", img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80" },
  { name: "Nursing Homes", img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80" },
  { name: "Medical Colleges", img: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=800&q=80" }
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Delivering specialized healthcare solutions across the entire medical spectrum.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img 
                src={ind.img} 
                alt={ind.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-primary/60 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white text-xl md:text-2xl font-bold text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {ind.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
