import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Why Us", href: "#why-us" },
    { name: "Industries", href: "#industries" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg`}>
            M
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
            MediSupply
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-muted-foreground" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant={isScrolled ? "default" : "secondary"}>
            <a href="#contact">Request Quotation</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 -mr-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border absolute top-full left-0 right-0 overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-foreground font-medium py-2 border-b border-border/50"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
                <a href="#contact">Request Quotation</a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
