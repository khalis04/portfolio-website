import { useEffect, useState } from 'react';
import {
    Camera,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Maximize2,
    Shuffle,
    X,
} from 'lucide-react';

const initialPhotos = [
    {
        id: 'poomsae',
        src: '/images/taekwondo/poomsae.jpg',
        title: 'Poomsae',
        location: 'Dojang',
        date: 'TAEKWONDO',
        note: 'Precision, balance, and sharp form execution on the mat.',
        tapeColor: 'rgba(245, 158, 11, 0.45)',
        tapeAngle: -5,
        baseTilt: -2.2,
        stamp: 'POOMSAE',
    },
    {
        id: 'varsity-2025',
        src: '/images/taekwondo/varsity-2025.jpg',
        title: 'Varsity 2025',
        location: 'University Tournament',
        date: '2025',
        note: 'Competing on the university stage with Kelab Taekwondo UTeM.',
        tapeColor: 'rgba(59, 130, 246, 0.42)',
        tapeAngle: 4,
        baseTilt: 1.5,
        stamp: 'VARSITY 25',
    },
    {
        id: 'sukipt-2026',
        src: '/images/taekwondo/sukipt-2026.jpg',
        title: 'SUKIPT 2026',
        location: 'Kuala Lumpur',
        date: 'AUG 2026',
        note: 'Representing UTeM on the SUKIPT 2026 tournament floor.',
        tapeColor: 'rgba(0, 161, 156, 0.48)',
        tapeAngle: -4,
        baseTilt: -1.8,
        stamp: 'SUKIPT 26',
    },
];

export default function TaekwondoScrapbook() {
    const [tilts, setTilts] = useState(() =>
        Object.fromEntries(initialPhotos.map((p) => [p.id, p.baseTilt]))
    );
    const [missingImages, setMissingImages] = useState({});
    const [lightboxId, setLightboxId] = useState(null);

    const lightboxIndex = initialPhotos.findIndex((p) => p.id === lightboxId);
    const activePhoto = lightboxIndex >= 0 ? initialPhotos[lightboxIndex] : null;

    const handleShuffle = () => {
        setTilts(
            Object.fromEntries(
                initialPhotos.map((p) => [
                    p.id,
                    Number(((Math.random() - 0.5) * 7.5).toFixed(1)),
                ])
            )
        );
    };

    const markMissing = (src) => {
        setMissingImages((prev) => ({ ...prev, [src]: true }));
    };

    const stepLightbox = (dir) => {
        if (lightboxIndex < 0) return;
        const nextIdx =
            (lightboxIndex + dir + initialPhotos.length) % initialPhotos.length;
        setLightboxId(initialPhotos[nextIdx].id);
    };

    useEffect(() => {
        if (!activePhoto) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setLightboxId(null);
            if (e.key === 'ArrowRight') stepLightbox(1);
            if (e.key === 'ArrowLeft') stepLightbox(-1);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activePhoto, lightboxIndex]);

    return (
        <div className="relative rounded-[28px] border-2 border-[#080B0F] bg-[#F6F3EB] text-[#080B0F] shadow-[0_26px_64px_-22px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Subtle Paper Dot-Grid Texture */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-55"
                style={{
                    backgroundImage:
                        'radial-gradient(rgba(8, 11, 15, 0.14) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
            />

            {/* ================= SCRAPBOOK HEADER STRIP ================= */}
            <div className="relative z-10 px-6 sm:px-9 pt-7 pb-5 border-b-2 border-dashed border-[#080B0F]/20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#080B0F] text-snow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <span className="h-2 w-2 rounded-full bg-petronas-bright" />
                        <span>Dojang Scrapbook • UTeM &amp; KTJ</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-none text-[#080B0F]">
                        Moments on the{' '}
                        <span className="font-serif-editorial text-[#008C87] font-normal pr-1">
                            mat.
                        </span>
                    </h2>
                </div>

                <button
                    type="button"
                    onClick={handleShuffle}
                    title="Re-scatter Polaroid angles"
                    className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border-2 border-[#080B0F] bg-[#080B0F] text-snow px-4 py-1.5 text-xs font-mono font-semibold shadow-[2px_2px_0px_#00A19C] hover:bg-[#00A19C] hover:text-[#080B0F] transition-colors cursor-pointer"
                >
                    <Shuffle size={12} /> Shuffle
                </button>
            </div>

            {/* ================= 3-CARD POLAROID PINBOARD ================= */}
            <div className="relative z-10 px-6 sm:px-9 py-10">
                <div className="grid md:grid-cols-3 gap-x-7 gap-y-10">
                    {initialPhotos.map((photo) => {
                        const angle = tilts[photo.id] ?? photo.baseTilt;

                        return (
                            <button
                                key={photo.id}
                                type="button"
                                onClick={() => setLightboxId(photo.id)}
                                style={{ transform: `rotate(${angle}deg)` }}
                                className="group relative text-left bg-white p-3 pb-4 rounded-sm border-2 border-[#080B0F] shadow-[6px_7px_0px_rgba(8,11,15,0.18)] hover:shadow-[10px_14px_0px_rgba(0,161,156,0.38)] hover:scale-[1.03] hover:!rotate-0 hover:z-20 transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A19C]"
                            >
                                {/* Translucent Washi Tape Strip */}
                                <span
                                    aria-hidden="true"
                                    style={{
                                        backgroundColor: photo.tapeColor,
                                        transform: `translateX(-50%) rotate(${photo.tapeAngle}deg)`,
                                    }}
                                    className="pointer-events-none absolute -top-3 left-1/2 w-20 h-6 border border-[#080B0F]/15 backdrop-blur-[1px] shadow-xs"
                                />

                                {/* Corner Stamp Tag */}
                                <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -top-2.5 right-3 rounded-sm bg-[#FEF08A] border border-[#080B0F] px-2 py-0.5 font-mono text-[9px] font-extrabold tracking-wider text-[#080B0F] rotate-2 shadow-[2px_2px_0px_#080B0F]"
                                >
                                    {photo.stamp}
                                </span>

                                {/* Photo Print Window */}
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#11161D] border border-[#080B0F]/20">
                                    {!missingImages[photo.src] ? (
                                        <img
                                            src={photo.src}
                                            alt={photo.title}
                                            loading="lazy"
                                            onError={() => markMissing(photo.src)}
                                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                        />
                                    ) : (
                                        <div
                                            className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-[#141A22]"
                                            style={{
                                                backgroundImage:
                                                    'radial-gradient(rgba(0, 210, 190, 0.16) 1px, transparent 1px)',
                                                backgroundSize: '14px 14px',
                                            }}
                                        >
                                            <div className="w-10 h-10 rounded-full bg-[#080B0F] border border-petronas/60 text-petronas-bright grid place-items-center mb-2">
                                                <Camera size={17} />
                                            </div>
                                            <span className="font-mono text-[10px] font-semibold text-snow">
                                                Add Taekwondo Photo
                                            </span>
                                            <span className="font-mono text-[9px] text-petronas-bright mt-0.5 break-all">
                                                {photo.src}
                                            </span>
                                        </div>
                                    )}

                                    {/* Subtle Hover Zoom Chip */}
                                    <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-[#080B0F]/85 text-snow px-2.5 py-0.5 font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        <Maximize2 size={10} /> Open
                                    </span>
                                </div>

                                {/* Polaroid Caption Strip */}
                                <div className="pt-3.5 px-1 space-y-1.5">
                                    <div className="flex items-baseline justify-between gap-2">
                                        <h3 className="font-serif-editorial text-2xl text-[#080B0F] leading-none">
                                            {photo.title}
                                        </h3>
                                        <span className="font-mono text-[10px] font-bold text-[#007A76] shrink-0">
                                            {photo.date}
                                        </span>
                                    </div>

                                    <p className="text-xs text-[#475569] leading-snug line-clamp-2">
                                        {photo.note}
                                    </p>

                                    <div className="pt-1 flex items-center gap-1 font-mono text-[10px] text-[#64748B]">
                                        <MapPin size={10} className="text-[#00A19C] shrink-0" />
                                        <span className="truncate">{photo.location}</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Bottom Scrapbook Footer */}
                <div className="mt-10 pt-5 border-t-2 border-dashed border-[#080B0F]/20 flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] text-[#475569]">
                    <div className="inline-flex items-center gap-2">
                        <span className="rounded bg-[#080B0F] text-[#FDE047] px-2 py-0.5 text-[10px] font-bold">
                            ATHLETE &amp; COACH
                        </span>
                        <span>Kelab Taekwondo UTeM • Kelab Taekwondo Jasin (WTF)</span>
                    </div>
                    <span>Click any Polaroid to inspect closer</span>
                </div>
            </div>

            {/* ================= FULLSCREEN PHOTO LIGHTBOX ================= */}
            {activePhoto && (
                <div
                    className="fixed inset-0 z-50 bg-carbon/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setLightboxId(null)}
                >
                    <div
                        className="animate-modal-in w-full max-w-3xl rounded-2xl bg-[#FAFBFD] text-[#080B0F] border-2 border-[#080B0F] overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top Bar */}
                        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b-2 border-[#080B0F] bg-[#F6F3EB]">
                            <div className="flex items-center gap-2.5 min-w-0">
                                <span className="rounded bg-[#080B0F] text-petronas-bright px-2 py-0.5 font-mono text-[10px] font-bold">
                                    {activePhoto.stamp}
                                </span>
                                <h3 className="font-serif-editorial text-2xl text-[#080B0F] truncate">
                                    {activePhoto.title}
                                </h3>
                            </div>

                            <button
                                type="button"
                                onClick={() => setLightboxId(null)}
                                aria-label="Close photo"
                                className="p-1.5 rounded-full bg-[#080B0F] text-snow hover:opacity-85 cursor-pointer shrink-0"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Large Photo View */}
                        <div className="relative bg-[#11161D] aspect-[16/10] w-full flex items-center justify-center overflow-hidden">
                            {!missingImages[activePhoto.src] ? (
                                <img
                                    key={activePhoto.src}
                                    src={activePhoto.src}
                                    alt={activePhoto.title}
                                    onError={() => markMissing(activePhoto.src)}
                                    className="animate-modal-in w-full h-full object-contain"
                                />
                            ) : (
                                <div className="text-center p-8 space-y-1.5">
                                    <p className="text-sm font-semibold text-snow">
                                        {activePhoto.title}
                                    </p>
                                    <p className="text-xs font-mono text-slate-400">
                                        Drop{' '}
                                        <span className="text-petronas-bright">
                                            {activePhoto.src}
                                        </span>{' '}
                                        into your /public folder
                                    </p>
                                </div>
                            )}

                            <button
                                type="button"
                                onClick={() => stepLightbox(-1)}
                                aria-label="Previous photo"
                                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#080B0F]/85 text-snow border border-snow/20 hover:bg-petronas hover:text-[#080B0F] transition-colors cursor-pointer"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                type="button"
                                onClick={() => stepLightbox(1)}
                                aria-label="Next photo"
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#080B0F]/85 text-snow border border-snow/20 hover:bg-petronas hover:text-[#080B0F] transition-colors cursor-pointer"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* Caption Footer */}
                        <div className="px-5 py-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <p className="text-sm text-[#334155]">{activePhoto.note}</p>
                            <div className="flex items-center gap-2 font-mono text-[11px] text-[#007A76] font-bold shrink-0">
                                <span>{activePhoto.location}</span>
                                <span>•</span>
                                <span>{activePhoto.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}