import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-maton-dark text-white pt-24 pb-12 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 border-b border-white/10 pb-16">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                            Save up to 50% <br />
                            <span className="text-white/60">on your first order</span>
                        </h2>
                        <div className="flex space-x-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-maton-lime w-full md:w-80"
                            />
                            <button className="bg-maton-lime text-maton-dark px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Decorative small image on right */}
                    <div className="hidden md:block w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 mt-8 md:mt-0">
                        <img src="/assets/footer-decoration.png" alt="Footer Deco" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-white/60">
                    <div>
                        <h4 className="text-white font-serif text-lg mb-4">MATON</h4>
                        <p>Premium Japanese Matcha delivered directly from Uji, Kyoto to your doorstep.</p>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-4">Shop</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-maton-lime">Ceremonial Grade</a></li>
                            <li><a href="#" className="hover:text-maton-lime">Culinary Grade</a></li>
                            <li><a href="#" className="hover:text-maton-lime">Starter Kits</a></li>
                            <li><a href="#" className="hover:text-maton-lime">Accessories</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-4">Company</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-maton-lime">About Us</a></li>
                            <li><a href="#" className="hover:text-maton-lime">Contact</a></li>
                            <li><a href="#" className="hover:text-maton-lime">Wholesale</a></li>
                            <li><a href="#" className="hover:text-maton-lime">Journal</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-white font-bold mb-4">Follow Us</h5>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-maton-lime"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-maton-lime"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-maton-lime"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-white/40">
                    <p>&copy; 2024 MATON Matcha. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
