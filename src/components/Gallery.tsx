import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
  "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?w=800&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80",
  "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80"
];

export function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Inside the Theatre</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A glimpse into the clinical environments equipped by MediSupply.
          </p>
        </div>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImg(img)}
            >
              <img src={img} alt={`Gallery ${i}`} className="w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Lightbox"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
