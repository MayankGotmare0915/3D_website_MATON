import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

/* Dummy Product Data */
const products = [
    { id: 1, name: "Ceremonial Grade", price: "$35", weight: "30g", image: "/assets/product-ceremonial-can.png", type: "featured" },
    { id: 2, name: "Culinary Grade", price: "$20", weight: "50g", image: "/assets/product-culinary.png", type: "standard" },
    { id: 3, name: "Master Blend", price: "$55", weight: "30g", image: "/assets/product-master-blend.png", type: "standard" },
    { id: 4, name: "Bamboo Whisk", price: "$15", weight: "100 prong", image: "/assets/accessory-whisk.png", type: "accessory" },
    { id: 5, name: "Chawan Bowl", price: "$40", weight: "Ceramic", image: "/assets/accessory-bowl.png", type: "accessory" },
    { id: 6, name: "Tea Scoop", price: "$8", weight: "Bamboo", image: "/assets/accessory-scoop.png", type: "accessory" },
];

export function Collection() {
    return (
        <section className="py-24 bg-maton-cream">
            <div className="container mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-maton-dark">Discover World of Matcha</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column - Stacked Standard Products */}
                    <div className="lg:col-span-4 flex flex-col space-y-6">
                        {products.filter(p => p.type === 'standard').map((product) => (
                            <div key={product.id} className="bg-white p-6 rounded-2xl shadow-sm flex items-center space-x-6 hover:shadow-md transition-shadow">
                                <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0 border border-maton-dark/5">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-maton-dark">{product.name}</h4>
                                    <p className="text-xs text-maton-muted">{product.weight}</p>
                                    <p className="text-lg font-serif mt-1">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center/Right Column - Featured Product */}
                    <div className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center">
                        <div className="relative z-10 md:w-1/2 space-y-6">
                            <span className="text-maton-lime text-xs font-bold tracking-widest uppercase">Best Seller</span>
                            <h3 className="text-4xl font-serif text-maton-dark">Ceremonial Grade <br /> Matcha</h3>
                            <p className="text-maton-text/70 text-sm leading-relaxed max-w-xs">
                                Our flagship product. Hand-ground stone mill matcha from Uji. Vibrant green, zero bitterness.
                            </p>
                            <div className="flex items-center space-x-4">
                                <span className="text-3xl font-serif font-bold">$35</span>
                                <button className="bg-maton-dark text-white px-6 py-3 rounded-full hover:bg-maton-lime hover:text-maton-dark transition-colors flex items-center space-x-2">
                                    <span>Add to Cart</span>
                                    <ShoppingBag size={16} />
                                </button>
                            </div>
                        </div>

                        <div className="md:w-1/2 relative mt-8 md:mt-0">
                            <div className="aspect-square bg-maton-lime/10 rounded-full flex items-center justify-center relative overflow-hidden">
                                <motion.img
                                    initial={{ scale: 1.35 }}
                                    whileHover={{ scale: 1.45 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    src="/assets/product-ceremonial-can.png"
                                    alt="Ceremonial Matcha"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Accessories Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {products.filter(p => p.type === 'accessory').map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all cursor-pointer group">
                            <div className="w-24 h-24 mx-auto bg-gray-50 rounded-full mb-4 overflow-hidden group-hover:scale-110 transition-transform shadow-sm">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <h5 className="font-bold text-maton-dark text-sm">{product.name}</h5>
                            <span className="text-maton-muted text-xs block mt-1">{product.price}</span>
                        </div>
                    ))}

                    {/* Explore All Link Card */}
                    <div className="flex items-center justify-center">
                        <button className="text-maton-dark font-serif font-bold text-lg border-b-2 border-maton-lime pb-1 hover:text-maton-lime transition-colors">
                            Explore All <br /> Products &rarr;
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
