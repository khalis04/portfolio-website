import { useEffect, useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Layers, Camera, Sparkles, Palette } from 'lucide-react';
import ChapterBanner from '../components/ChapterBanner';

const mediaItems = [
    {
        id: 'club-posters',
        number: '01',
        category: 'Graphic Design',
        icon: Palette,
        title: 'Club Event & Promotional Posters',
        subtitle: 'Original Graphic Design • Built From Scratch',
        images: [
            { src: '/images/poster-1.jpg', label: 'Event Poster 01' },
            { src: '/images/poster-2.jpg', label: 'Event Poster 02' },
        ],
        specs: 'Manual Blank-Canvas Layout • Visual Hierarchy • Social & Print Ready',
        description:
            'Original promotional and tournament posters crafted manually from scratch for club events, focusing on typography hierarchy, contrast, and 3-second scannability.',
    },
    {
        id: 'medal-3d',
        number: '02',
        category: 'AI Concepting',
        icon: Layers,
        title: '2D Draft to 3D Medal Concept Pipeline',
        subtitle: 'Hybrid Workflow • Canva + Gemini AI',
        images: [
            { src: '/images/medal-canva-draft.jpg', label: 'Step 1: Canva 2D Base' },
            { src: '/images/medal-ai-3d.jpg', label: 'Step 2: Gemini 3D Render' },
        ],
        specs: 'Manual 2D Geometry in Canva • Image-to-Image 3D Metallic Visualization',
        description:
            'A transparent Human-AI concepting workflow: drafting exact medal layout and typography in Canva before rendering realistic 3D relief prototypes for committee approval.',
    },
    {
        id: 'windbreaker-kit',
        number: '03',
        category: 'AI Concepting',
        icon: Sparkles,
        title: 'Team Apparel Ideation (Windbreaker & Jersey)',
        subtitle: 'Rapid Prototyping • Kelab Taekwondo UTeM & KTJ',
        images: [
            { src: '/images/windbreaker-1.jpg', label: 'Windbreaker Concept A' },
            { src: '/images/windbreaker-2.jpg', label: 'Windbreaker Concept B' },
            { src: '/images/jersey-1.jpg', label: 'Sublimation Jersey' },
        ],
        specs: 'Iterative Prompt Direction • Colorway Exploration • Athletic Mockups',
        description:
            'Rapid visual exploration of custom team windbreakers and jerseys to test color blocking, club motifs, and silhouette balance prior to production.',
    },
    {
        id: 'dslr-action',
        number: '04',
        category: 'Photography',
        icon: Camera,
        title: 'Arena Action & Street Photography',
        subtitle: 'Optical Capture • Nikon DSLR',
        images: [
            { src: '/images/dslr-1.jpg', label: 'Capture 01' },
            { src: '/images/dslr-2.jpg', label: 'Capture 02' },
            { src: '/images/dslr-3.jpg', label: 'Capture 03' },
        ],
        specs: 'Nikon DSLR • Manual Exposure • Fast Shutter Motion Freeze',
        description:
            'Authentic optical photography documenting sparring tournaments, campus moments, and street compositions with natural and arena lighting.',
    },
];

const filters = ['All', 'Graphic Design', 'AI Concepting', 'Photography'];

export default function Media() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [cardSlides, setCardSlides] = useState({});
    const [lightbox, setLightbox] = useState(null);
    const [missingImages, setMissingImages] = useState({});

    const visibleItems =
        activeFilter === 'All'
            ? mediaItems
            : mediaItems.filter((item) => item.category === activeFilter);

    const handleImageError = (src) => {
        setMissingImages((prev) => ({ ...prev, [src]: true }));
    };

    const getSlideIndex = (id) => cardSlides[id] || 0;

    const setSlideIndex = (id, index) => {
        setCardSlides((prev) => ({ ...prev, [id]: index }));
    };

    const openLightbox = (item) => {
        setLightbox({ item, index: getSlideIndex(item.id) });
    };

    const stepLightbox = (direction) => {
        setLightbox((prev) => {
            if (!prev) return null;
            const total = prev.item.images.length;
            return {
                ...prev,
                index: (prev.index + direction + total) % total,
            };
        });
    };

    // Keyboard controls for Lightbox (Escape, Left, Right)
    useEffect(() => {
        if (!lightbox) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setLightbox(null);
            if (e.key === 'ArrowRight') stepLightbox(1);
            if (e.key === 'ArrowLeft') stepLightbox(-1);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [lightbox]);

    return (
        <div className="w-full">
            <ChapterBanner
                sectorNumber="05"
                sectorTag="Visual studio"
                title={
                    <>
                        Posters,{' '}
                        <span className="font-serif-editorial text-snow font-normal tracking-[-0.01em] pr-1">
                            medals
                        </span>
                        <br />
                        &amp; raw frames.
                    </>
                }
                description="Original club posters built from scratch, Canva-to-Gemini 3D medal concepts, and manual Nikon DSLR photography."
                pills={[
                    { num: '5.1', label: 'Projects', to: '/projects' },
                    { num: '5.2', label: 'About me', to: '/about' },
                    { num: '5.3', label: 'Contact', to: '/contact' },
                ]}
            />

            {/* LAYER 1: CLEAN DISCIPLINE FILTER BAR */}
            <section className="layer-teal">
                <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${activeFilter === filter
                                    ? 'bg-petronas text-ink shadow-sm'
                                    : 'bg-carbon/70 text-snow/80 border border-snow/10 hover:border-petronas/60 hover:text-snow'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <span className="text-xs font-mono text-slate-300">
                        Showing <strong className="text-petronas-bright">{visibleItems.length}</strong>{' '}
                        {visibleItems.length === 1 ? 'collection' : 'collections'}
                    </span>
                </div>
            </section>

            {/* LAYER 2+: ALTERNATING EDITORIAL SHOWCASE BANDS */}
            <div>
                {visibleItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    const currentIdx = getSlideIndex(item.id);
                    const currentPhoto = item.images[currentIdx];
                    const isReversed = idx % 2 === 1;
                    const bandClass = idx % 2 === 0 ? 'layer-carbon' : 'layer-slate';

                    return (
                        <section
                            key={`${activeFilter}-${item.id}`}
                            className={bandClass}
                        >
                            <div
                                style={{ animationDelay: `${idx * 90}ms` }}
                                className="animate-fade-up max-w-5xl mx-auto px-6 py-12 sm:py-14 grid md:grid-cols-12 gap-8 lg:gap-10 items-center"
                            >
                                {/* IMAGE STAGE */}
                                <div className={`md:col-span-7 space-y-3 ${isReversed ? 'md:order-2' : ''}`}>
                                    <div
                                        onClick={() => openLightbox(item)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
                                        aria-label={`Open ${item.title} fullscreen`}
                                        className="group relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-carbon border border-snow/15 hover:border-petronas/80 transition-all duration-300 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.75)] cursor-pointer"
                                    >
                                        {!missingImages[currentPhoto.src] ? (
                                            <img
                                                key={currentPhoto.src}
                                                src={currentPhoto.src}
                                                alt={`${item.title} — ${currentPhoto.label}`}
                                                onError={() => handleImageError(currentPhoto.src)}
                                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-carbon-2 via-carbon to-petronas/10">
                                                <IconComponent size={28} className="text-petronas-bright/70 mb-2.5" />
                                                <p className="text-sm font-semibold text-snow">{currentPhoto.label}</p>
                                                <p className="text-xs font-mono text-slate-400 mt-1">
                                                    Drop <span className="text-petronas-bright">{currentPhoto.src}</span> in /public
                                                </p>
                                            </div>
                                        )}

                                        {/* Subtle Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                                            <span className="text-xs font-mono text-snow/90 bg-carbon/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-snow/10">
                                                {currentPhoto.label}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold bg-petronas text-ink px-2.5 py-1 rounded-md">
                                                <Maximize2 size={12} /> Expand
                                            </span>
                                        </div>
                                    </div>

                                    {/* Clean Inline Slide Switcher */}
                                    {item.images.length > 1 && (
                                        <div className="flex items-center justify-between gap-3">
                                            <div className="flex flex-wrap gap-1.5">
                                                {item.images.map((img, sIdx) => (
                                                    <button
                                                        key={img.src}
                                                        onClick={() => setSlideIndex(item.id, sIdx)}
                                                        className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all duration-200 cursor-pointer ${currentIdx === sIdx
                                                            ? 'bg-petronas/20 text-petronas-bright border border-petronas/60 font-semibold'
                                                            : 'bg-carbon/60 text-slate-400 border border-snow/10 hover:text-snow hover:border-snow/25'
                                                            }`}
                                                    >
                                                        {img.label}
                                                    </button>
                                                ))}
                                            </div>
                                            <span className="text-[11px] font-mono text-slate-400 shrink-0">
                                                0{currentIdx + 1} / 0{item.images.length}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* CLEAN EDITORIAL COPY */}
                                <div className={`md:col-span-5 space-y-4 ${isReversed ? 'md:order-1' : ''}`}>
                                    <div className="flex items-center gap-2.5 text-xs font-mono">
                                        <span className="text-petronas-bright font-bold">{item.number}</span>
                                        <span className="h-[1px] w-6 bg-petronas/50" />
                                        <span className="uppercase tracking-wider text-slate-400">{item.category}</span>
                                    </div>

                                    <div className="space-y-1.5">
                                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-snow leading-tight">
                                            {item.title}
                                        </h2>
                                        <p className="text-xs font-mono text-petronas-bright/90">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-sm text-slate-300 leading-relaxed">
                                        {item.description}
                                    </p>

                                    <div className="pt-2 border-t border-snow/10 text-[11px] font-mono text-slate-400 leading-relaxed">
                                        {item.specs}
                                    </div>

                                    <div className="pt-1">
                                        <button
                                            onClick={() => openLightbox(item)}
                                            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-petronas-bright hover:text-snow transition-colors group cursor-pointer"
                                        >
                                            <Maximize2 size={14} className="transition-transform duration-200 group-hover:scale-110" />
                                            View gallery ({item.images.length} {item.images.length === 1 ? 'frame' : 'frames'})
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* MINIMALIST CINEMA LIGHTBOX MODAL */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-carbon/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setLightbox(null)}
                >
                    <div
                        className="animate-modal-in w-full max-w-4xl bg-carbon-2 border border-petronas/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top Bar */}
                        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-snow/10">
                            <div className="min-w-0">
                                <div className="text-[11px] font-mono text-petronas-bright uppercase tracking-wider">
                                    {lightbox.item.number} / {lightbox.item.category} —{' '}
                                    {lightbox.item.images[lightbox.index].label}
                                </div>
                                <h3 className="font-display text-base sm:text-lg font-bold text-snow truncate">
                                    {lightbox.item.title}
                                </h3>
                            </div>

                            <button
                                onClick={() => setLightbox(null)}
                                className="p-2 rounded-lg text-slate-300 hover:text-snow hover:bg-snow/10 transition-colors cursor-pointer"
                                aria-label="Close gallery"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Cinema Image Frame */}
                        <div className="relative bg-carbon flex-grow min-h-[300px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
                            {!missingImages[lightbox.item.images[lightbox.index].src] ? (
                                <img
                                    key={lightbox.item.images[lightbox.index].src}
                                    src={lightbox.item.images[lightbox.index].src}
                                    alt={lightbox.item.images[lightbox.index].label}
                                    onError={() => handleImageError(lightbox.item.images[lightbox.index].src)}
                                    className="animate-modal-in max-h-[65vh] w-auto object-contain"
                                />
                            ) : (
                                <div className="text-center p-8 space-y-1.5">
                                    <p className="text-sm font-semibold text-snow">
                                        {lightbox.item.images[lightbox.index].label}
                                    </p>
                                    <p className="text-xs font-mono text-slate-400">
                                        Add <span className="text-petronas-bright">{lightbox.item.images[lightbox.index].src}</span> to your /public folder
                                    </p>
                                </div>
                            )}

                            {lightbox.item.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => stepLightbox(-1)}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-carbon/80 text-snow border border-snow/15 hover:border-petronas hover:text-petronas-bright transition-all cursor-pointer"
                                        aria-label="Previous frame"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={() => stepLightbox(1)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-carbon/80 text-snow border border-snow/15 hover:border-petronas hover:text-petronas-bright transition-all cursor-pointer"
                                        aria-label="Next frame"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Bottom Caption & Slide Strip */}
                        <div className="px-5 py-3.5 border-t border-snow/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-carbon-2">
                            <p className="text-xs text-slate-300 max-w-xl">
                                {lightbox.item.specs}
                            </p>

                            <div className="flex items-center gap-1.5 shrink-0">
                                {lightbox.item.images.map((img, i) => (
                                    <button
                                        key={img.src}
                                        onClick={() => setLightbox((prev) => ({ ...prev, index: i }))}
                                        className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${lightbox.index === i
                                            ? 'w-6 bg-petronas-bright'
                                            : 'w-2 bg-snow/25 hover:bg-snow/50'
                                            }`}
                                        aria-label={`View ${img.label}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}