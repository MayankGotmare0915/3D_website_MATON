import { motion } from 'framer-motion';

export function StarterKit() {
    return (
        <section className="py-24 bg-maton-cream relative overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Headline */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-maton-dark/60 text-sm uppercase tracking-widest font-medium"
                    >
                        Begin Your Journey
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif text-maton-dark mt-4"
                    >
                        The Perfect Start
                    </motion.h2>
                </div>

                {/* Content Grid */}
                <div className="relative">
                    {/* Main Image Strip Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full aspect-[16/9] lg:aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden shadow-xl relative"
                    >
                        <img
                            src="/assets/starter-kit-flatlay.png"
                            alt="Matcha Starter Kit"
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>

                    {/* Floating Price Anchor */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute -top-10 right-10 md:right-20 bg-white p-6 rounded-full shadow-lg z-10 w-32 h-32 flex flex-col items-center justify-center border border-maton-dark/5"
                    >
                        <span className="text-maton-muted text-sm line-through">$45</span>
                        <span className="text-4xl font-serif text-maton-dark font-bold">$25</span>
                    </motion.div>

                    {/* Callouts - Positioned roughly based on where items might be in the image */}
                    {/* Whisk */}
                    <div className="absolute bottom-10 left-10 md:left-24 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50 max-w-[200px]">
                        <h4 className="font-serif font-bold text-maton-dark">Bamboo Whisk</h4>
                        <p className="text-xs text-maton-muted mt-1">Hand-carved 100-prong chasen for perfect froth.</p>
                    </div>

                    {/* Bowl */}
                    <div className="absolute top-10 left-1/3 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-sm border border-white/50 max-w-[200px]">
                        <h4 className="font-serif font-bold text-maton-dark">Ceremonial Bowl</h4>
                        <p className="text-xs text-maton-muted mt-1">Hand-crafted ceramic chawan, distinct texture.</p>
                    </div>

                </div>

            </div>
        </section>
    );
}
