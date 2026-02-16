import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { MatchaSequence } from './MatchaSequence';

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative w-full h-[300vh] bg-maton-dark text-white">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">

                {/* Full Screen Background Sequence */}
                <div className="absolute inset-0 z-0">
                    <MatchaSequence progress={scrollYProgress} />
                    {/* Gradient Overlay for left-side text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>
                </div>

                {/* Content Container - Overlay */}
                <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-10 pointer-events-none">

                    <div className="max-w-2xl space-y-8 pointer-events-auto">

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-serif text-left leading-[1.1] drop-shadow-xl"
                        >
                            Best <br />
                            Matcha <br />
                            <span className="italic font-light text-white/90">in Town</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/80 font-serif tracking-widest pl-1"
                        >
                            最高のお茶
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="pt-4"
                        >
                            <button className="bg-maton-lime text-maton-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-maton-lime/20 cursor-pointer pointer-events-auto">
                                Add To Cart
                            </button>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
}
