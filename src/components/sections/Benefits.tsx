import { motion } from 'framer-motion';
import { Leaf, Zap, Heart } from 'lucide-react'; // Example icons

export function Benefits() {
    const benefits = [
        { icon: Leaf, title: "Rich Flavor", desc: "Umami-packed notes with zero bitterness." },
        { icon: Zap, title: "Clean Energy", desc: "Steady focus without the coffee crash." },
        { icon: Heart, title: "Health", desc: "Packed with antioxidants and L-Theanine." },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Text */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-maton-dark leading-tight">
                            Experience Wellness <br />
                            <span className="text-maton-dark/60 italic">with Every Sip</span>
                        </h2>
                        <p className="mt-6 text-maton-text/80 leading-relaxed max-w-md">
                            Our matcha is shade-grown for 30 days to boost chlorophyll levels, resulting in a vibrant green color and a naturally sweet, savory flavor profile.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center space-y-3"
                            >
                                <div className="w-12 h-12 bg-maton-lime/20 rounded-full flex items-center justify-center text-maton-dark">
                                    <b.icon size={20} />
                                </div>
                                <h4 className="font-bold text-sm">{b.title}</h4>
                                <p className="text-xs text-maton-muted">{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Images */}
                <div className="relative h-[600px]">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="absolute top-0 right-0 w-3/4 h-3/5 bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
                    >
                        <img src="/assets/benefit-antioxidant.png" alt="Antioxidant" className="w-full h-full object-cover object-center" />
                        <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                            Antioxidant Powerhouse
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-0 left-0 w-3/4 h-3/5 bg-gray-200 rounded-2xl overflow-hidden shadow-lg z-10"
                    >
                        <img src="/assets/benefit-relax.png" alt="Relax" className="w-full h-full object-cover object-center" />
                        <div className="absolute top-4 right-4 bg-white/90 px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                            Relax & Focus
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
