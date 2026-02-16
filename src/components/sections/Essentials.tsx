

export function Essentials() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-4xl font-serif text-maton-dark mb-16">Matcha Pairing Essentials</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: Latte Mix */}
                    <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm border border-maton-dark/5 flex flex-col">
                        <div className="h-[65%] w-full relative overflow-hidden">
                            <img src="/assets/product-latte-mix.png" alt="Matcha Latte Mix" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="h-[35%] w-full p-8 flex flex-col justify-center bg-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-maton-dark">Matcha Latte Mix</h3>
                                    <p className="text-maton-text/70 text-sm mt-2 line-clamp-2">Creamy, pre-sweetened blend for instant lattes.</p>
                                </div>
                                <span className="text-xl font-bold text-maton-lime ml-4">$28</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Cake Powder */}
                    <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer bg-white shadow-sm border border-maton-dark/5 flex flex-col">
                        <div className="h-[65%] w-full relative overflow-hidden">
                            <img src="/assets/product-cake-powder.png" alt="Culinary Grade" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="h-[35%] w-full p-8 flex flex-col justify-center bg-white">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-serif text-maton-dark">Culinary Grade Powder</h3>
                                    <p className="text-maton-text/70 text-sm mt-2 line-clamp-2">Robust flavor perfect for baking and smoothies.</p>
                                </div>
                                <span className="text-xl font-bold text-maton-lime ml-4">$22</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
