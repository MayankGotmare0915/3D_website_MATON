import { useState, useEffect } from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 transition-all duration-300 ${isScrolled ? 'bg-white/30 backdrop-blur-md shadow-sm py-4 text-maton-dark' : 'bg-transparent py-8 text-white'
                }`}
        >
            <div className="flex-shrink-0">
                <a href="/" className={`text-3xl font-serif font-bold tracking-widest ${isScrolled ? 'text-maton-dark' : 'text-white'}`}>MATON</a>
            </div>

            <div className="flex items-center space-x-12">
                <nav className="hidden md:flex items-center space-x-12">
                    {['Home', 'Products', 'Testimonial'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-300 hover:text-maton-lime ${isScrolled ? 'text-maton-dark' : 'text-white'
                                }`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center space-x-8">
                    <button className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-maton-lime ${isScrolled ? 'text-maton-dark' : 'text-white'}`}>Sign In</button>
                    <button className={`transition-colors relative hover:text-maton-lime ${isScrolled ? 'text-maton-dark' : 'text-white'}`}>
                        <ShoppingBag size={20} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-maton-lime rounded-full"></span>
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
