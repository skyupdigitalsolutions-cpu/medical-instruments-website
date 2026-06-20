import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-primary py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-primary-foreground/10">
          <Counter end={500} suffix="+" label="Products" />
          <Counter end={250} suffix="+" label="Healthcare Clients" />
          <Counter end={50} suffix="+" label="Partner Brands" />
          <Counter end={10} suffix="+" label="Years Experience" />
        </div>
      </div>
    </section>
  );
}
