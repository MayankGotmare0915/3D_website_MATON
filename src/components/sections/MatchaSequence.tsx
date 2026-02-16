import { useRef, useEffect, useState } from 'react';
import { useMotionValueEvent, MotionValue, useTransform } from 'framer-motion';

interface MatchaSequenceProps {
    progress: MotionValue<number>;
}

const FRAME_COUNT = 90;

export function MatchaSequence({ progress }: MatchaSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Handle Resize
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(3, '0');
            img.src = `/matcha_img_seq/ezgif-frame-${frameNum}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    // Map progress
    const frameIndex = useTransform(progress, [0, 1], [0, FRAME_COUNT - 1]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = images[index];

        if (canvas && ctx && img && dimensions.width > 0 && dimensions.height > 0) {
            // Set canvas internal resolution to match display size for sharpness
            if (canvas.width !== dimensions.width || canvas.height !== dimensions.height) {
                canvas.width = dimensions.width;
                canvas.height = dimensions.height;
            }

            const { width, height } = dimensions;

            ctx.clearRect(0, 0, width, height);

            // Object Cover Logic
            const scale = Math.max(width / img.width, height / img.height);
            const x = (width / 2) - (img.width / 2) * scale;
            const y = (height / 2) - (img.height / 2) * scale;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    // Render on frame change
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;
        renderFrame(Math.min(Math.round(latest), FRAME_COUNT - 1));
    });

    // Initial draw & Redraw on resize
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            renderFrame(Math.min(Math.round(frameIndex.get()), FRAME_COUNT - 1));
        }
    }, [isLoaded, images, dimensions]);

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center overflow-hidden">
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-maton-dark z-20">
                    <span className="text-maton-lime/50 text-xs tracking-widest uppercase animate-pulse">
                        Preparing Ritual...
                    </span>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
