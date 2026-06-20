import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t-4 border-primary text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                M
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                MediSupply
              </span>
            </a>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Premium supplier of medical instruments, surgical equipment, and healthcare solutions globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="hover:text-primary transition-colors">Surgical Instruments</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Diagnostic Equipment</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">ICU Setup</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Hospital Furniture</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Consumables</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-slate-400 text-sm">Headquarters</span>
                <span>123 Medical District, Mumbai 400001</span>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-slate-400 text-sm">Sales & Support</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-slate-400 text-sm">Email</span>
                <span>info@medisupply.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MediSupply. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Designed for Precision Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
