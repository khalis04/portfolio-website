import { useEffect, useState } from 'react';
import {
    BookOpen,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Maximize2,
    X,
} from 'lucide-react';

const timelineChapters = [
    {
        id: 'madah',
        step: '01',
        stage: 'Secondary',
        school: 'MADRASAH AL-HIKMAH (MADAH)',
        place: 'Perak',
        desc: 'Secondary school years in Perak—building core study habits, discipline, and early leadership. Pernah juga dilantik sebagai ahli Badan Dakwah dan Rohani,BADAR sebagai exco multimedia dan atlet badminton sekolah. Exam: IDADI, PT3, SPM.',
        accent: '#2563EB',
        photos: [
            {
                id: 'madah-1',
                src: '/images/education/madah-1.jpg',
                title: 'Juara Rekacipta Peringkat Kebangsaan SEMI ABIM 2018',
                note: 'Secondary school days in Perak.',
                tapeColor: 'rgba(37, 99, 235, 0.36)',
                tilt: '-1.5deg',
            },
            {
                id: 'madah-2',
                src: '/images/education/madah-2.jpg',
                title: 'Graduation Day',
                note: 'School & community moments at MADAH.',
                tapeColor: 'rgba(0, 161, 156, 0.36)',
                tilt: '1.4deg',
            },
        ],
    },
    {
        id: 'matriculation',
        step: '02',
        stage: 'Pre-University',
        school: 'PERAK MATRICULATION COLLEGE (KMPK)',
        place: 'Perak',
        desc: 'Pre-university bridge in Perak—strengthening analytical thinking across computing, math, and sciences. Sijil Matrikulasi Malaysia (SMM) in Science Computer Course.',
        accent: '#00A19C',
        photos: [
            {
                id: 'matric-1',
                src: '/images/education/matric-1.jpg',
                title: 'Became a Moderator and conducted Islamic Forum.',
                note: 'Pre-university campus life in Perak.',
                tapeColor: 'rgba(0, 161, 156, 0.38)',
                tilt: '-1.2deg',
            },
            {
                id: 'matric-2',
                src: '/images/education/matric-2.jpg',
                title: 'Last year in KMPK.',
                note: 'Study sessions & pre-U milestones.',
                tapeColor: 'rgba(15, 23, 42, 0.24)',
                tilt: '1.6deg',
            },
        ],
    },
    {
        id: 'utem',
        step: '03',
        stage: 'Degree • Current',
        school: 'UNIVERSITI TEKNIKAL MALAYSIA MELAKA (UTeM)',
        place: 'Melaka',
        desc: 'Software development at FTMK, UTeM in Melaka—building web systems, Android apps, and structured software. Also one of the taekwondo athletes representing UTeM in varsity combat sport 2025 and sukipt 7 2026.',
        accent: '#00D2BE',
        photos: [
            {
                id: 'utem-1',
                src: '/images/education/utem-1.jpg',
                title: 'Anugerah Dekan FTMK',
                note: 'FTMK software development journey in Melaka.',
                tapeColor: 'rgba(0, 161, 156, 0.42)',
                tilt: '-1deg',
            },
            {
                id: 'utem-2',
                src: '/images/education/utem-2.jpg',
                title: 'Journey in Melaka',
                note: 'Taekwondo Team in Melaka.',
                tapeColor: 'rgba(0, 161, 156, 0.42)',
                tilt: '-1deg',
            },
        ],
    },
];

const allPhotos = timelineChapters.flatMap((ch) =>
    ch.photos.map((photo) => ({
        ...photo,
        step: ch.step,
        school: ch.school,
        place: ch.place,
    }))
);

export default function AcademicScrapbook() {
    const [selectedFilter, setSelectedFilter] = useState('all'); // 'all' | 'madah' | 'matriculation' | 'utem'
    const [missingImages, setMissingImages] = useState({});
    const [lightboxId, setLightboxId] = useState(null);

    const filterOrder = ['all', ...timelineChapters.map((c) => c.id)];
    const currentIdx = Math.max(0, filterOrder.indexOf(selectedFilter));

    const stepFilter = (dir) => {
        const nextIdx = (currentIdx + dir + filterOrder.length) % filterOrder.length;
        setSelectedFilter(filterOrder[nextIdx]);
    };

    const markMissing = (src) => {
        setMissingImages((prev) => ({ ...prev, [src]: true }));
    };

    const lightboxIndex = allPhotos.findIndex((p) => p.id === lightboxId);
    const activeLightbox = lightboxIndex >= 0 ? allPhotos[lightboxIndex] : null;

    const stepLightbox = (dir) => {
        if (lightboxIndex < 0) return;
        const nextIdx = (lightboxIndex + dir + allPhotos.length) % allPhotos.length;
        setLightboxId(allPhotos[nextIdx].id);
    };

    useEffect(() => {
        if (!activeLightbox) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setLightboxId(null);
            if (e.key === 'ArrowRight') stepLightbox(1);
            if (e.key === 'ArrowLeft') stepLightbox(-1);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeLightbox, lightboxIndex]);

    const visibleChapters =
        selectedFilter === 'all'
            ? timelineChapters
            : timelineChapters.filter((c) => c.id === selectedFilter);

    return (
        <div className="relative rounded-[28px] border-2 border-[#080B0F] bg-[#FAFBFD] text-[#080B0F] shadow-[0_26px_64px_-22px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Clean Storybook Graph-Paper Backdrop */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(8, 11, 15, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 11, 15, 0.045) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            />

            {/* ================= HEADER & TIMELINE FILTER BAR ================= */}
            <div className="relative z-10 px-6 sm:px-9 pt-7 pb-5 border-b border-[#080B0F]/15 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#080B0F] text-snow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <BookOpen size={11} className="text-petronas-bright" />
                        <span>Timeline Scrapbook • 05 Frames</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-none text-[#080B0F]">
                        Academic{' '}
                        <span className="font-serif-editorial text-[#008C87] font-normal pr-1">
                            timeline.
                        </span>
                    </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                    {[
                        { id: 'all', label: 'All (5)' },
                        { id: 'madah', label: '01 MADAH (2)' },
                        { id: 'matriculation', label: '02 Matriculation (2)' },
                        { id: 'utem', label: '03 UTeM (1)' },
                    ].map((tab) => {
                        const active = selectedFilter === tab.id;
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setSelectedFilter(tab.id)}
                                className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] font-bold transition-all duration-150 cursor-pointer border ${active
                                    ? 'bg-[#080B0F] text-snow border-[#080B0F] shadow-[2px_2px_0px_#00A19C]'
                                    : 'bg-white text-[#475569] border-[#CBD5E1] hover:border-[#080B0F] hover:text-[#080B0F]'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}

                    <div className="inline-flex items-center gap-1 rounded-full bg-white border border-[#CBD5E1] px-1.5 py-1 ml-0.5">
                        <button
                            type="button"
                            onClick={() => stepFilter(-1)}
                            aria-label="Previous timeline stage"
                            className="p-1 rounded-full hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                        >
                            <ChevronLeft size={13} />
                        </button>
                        <span className="px-1.5 font-mono text-[10px] font-bold text-[#007A76] tabular-nums">
                            0{currentIdx + 1}/0{filterOrder.length}
                        </span>
                        <button
                            type="button"
                            onClick={() => stepFilter(1)}
                            aria-label="Next timeline stage"
                            className="p-1 rounded-full hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                        >
                            <ChevronRight size={13} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= CHRONOLOGICAL SCRAPBOOK TIMELINE ================= */}
            <div className="relative z-10 px-6 sm:px-9 py-8">
                <div className="relative space-y-8">
                    {/* Vertical Timeline Spine */}
                    <div
                        aria-hidden="true"
                        className="hidden sm:block absolute left-[19px] top-4 bottom-4 w-[2px] bg-[#080B0F]/15"
                    />

                    {visibleChapters.map((chapter) => (
                        <div
                            key={chapter.id}
                            className="animate-fade-up relative sm:pl-12"
                        >
                            {/* Timeline Step Node */}
                            <div
                                aria-hidden="true"
                                style={{ backgroundColor: chapter.accent }}
                                className="hidden sm:flex absolute left-0 top-5 w-10 h-10 rounded-full border-2 border-[#080B0F] items-center justify-center font-mono text-xs font-extrabold text-[#080B0F] shadow-[2px_2px_0px_#080B0F]"
                            >
                                {chapter.step}
                            </div>

                            <div className="rounded-2xl bg-white/95 border border-[#080B0F]/15 p-5 sm:p-7 shadow-[0_10px_30px_-20px_rgba(8,11,15,0.25)] space-y-5">
                                {/* Chapter Header + Simple Description */}
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-dashed border-[#080B0F]/15">
                                    <div className="space-y-1.5 max-w-2xl">
                                        <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest">
                                            <span className="sm:hidden rounded bg-[#080B0F] text-snow px-2 py-0.5">
                                                {chapter.step}
                                            </span>
                                            <span className="text-[#007A76]">{chapter.stage}</span>
                                            <span className="text-[#94A3B8]">•</span>
                                            <span className="inline-flex items-center gap-1 text-[#475569]">
                                                <MapPin size={11} className="text-[#00A19C]" />
                                                {chapter.place}
                                            </span>
                                        </div>

                                        <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#080B0F]">
                                            {chapter.school}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                                            {chapter.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Scrapbook Photo Frames */}
                                <div
                                    className={`grid gap-6 ${chapter.photos.length === 1
                                        ? 'max-w-md mx-auto grid-cols-1'
                                        : 'sm:grid-cols-2'
                                        }`}
                                >
                                    {chapter.photos.map((photo) => (
                                        <button
                                            key={photo.id}
                                            type="button"
                                            onClick={() => setLightboxId(photo.id)}
                                            style={{ transform: `rotate(${photo.tilt})` }}
                                            className="group relative text-left bg-[#FAFBFD] p-3 pb-3.5 rounded-xl border-2 border-[#080B0F] shadow-[4px_5px_0px_rgba(8,11,15,0.12)] hover:shadow-[7px_9px_0px_rgba(0,161,156,0.28)] hover:!rotate-0 hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A19C]"
                                        >
                                            <span
                                                aria-hidden="true"
                                                style={{ backgroundColor: photo.tapeColor }}
                                                className="pointer-events-none absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 border border-[#080B0F]/10"
                                            />

                                            <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#11161D] border border-[#080B0F]/15">
                                                {!missingImages[photo.src] && (
                                                    <img
                                                        src={photo.src}
                                                        alt={photo.title}
                                                        loading="lazy"
                                                        onError={() => markMissing(photo.src)}
                                                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                                                    />
                                                )}

                                                <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-[#080B0F]/85 text-snow px-2.5 py-0.5 font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <Maximize2 size={10} /> View
                                                </span>
                                            </div>

                                            <div className="pt-3 px-1 flex items-center justify-between gap-3">
                                                <div className="min-w-0">
                                                    <div className="font-display text-sm font-bold text-[#080B0F] truncate">
                                                        {photo.title}
                                                    </div>
                                                    <div className="text-xs text-[#475569] truncate">
                                                        {photo.note}
                                                    </div>
                                                </div>
                                                <span className="font-mono text-[10px] font-bold text-[#007A76] shrink-0">
                                                    {chapter.step}
                                                </span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= LIGHTBOX MODAL ================= */}
            {activeLightbox && (
                <div
                    className="fixed inset-0 z-50 bg-carbon/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setLightboxId(null)}
                >
                    <div
                        className="animate-modal-in w-full max-w-3xl rounded-2xl bg-[#FAFBFD] text-[#080B0F] border-2 border-[#080B0F] overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-[#080B0F]/15 bg-white">
                            <div className="min-w-0">
                                <div className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#007A76]">
                                    STEP {activeLightbox.step} • {activeLightbox.school} ({activeLightbox.place})
                                </div>
                                <h3 className="font-display text-lg font-extrabold text-[#080B0F] truncate">
                                    {activeLightbox.title}
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

                        <div className="relative bg-[#10151C] aspect-[16/10] w-full flex items-center justify-center overflow-hidden">
                            {!missingImages[activeLightbox.src] && (
                                <img
                                    key={activeLightbox.src}
                                    src={activeLightbox.src}
                                    alt={activeLightbox.title}
                                    onError={() => markMissing(activeLightbox.src)}
                                    className="animate-modal-in w-full h-full object-contain"
                                />
                            )}

                            {allPhotos.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => stepLightbox(-1)}
                                        aria-label="Previous photo"
                                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#080B0F]/85 text-snow border border-snow/15 hover:border-petronas hover:text-petronas-bright transition-colors cursor-pointer"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => stepLightbox(1)}
                                        aria-label="Next photo"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#080B0F]/85 text-snow border border-snow/15 hover:border-petronas hover:text-petronas-bright transition-colors cursor-pointer"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="px-5 py-3.5 bg-white flex items-center justify-between gap-4">
                            <p className="text-xs sm:text-sm text-[#334155]">
                                {activeLightbox.note}
                            </p>
                            <span className="font-mono text-[11px] font-bold text-[#007A76] shrink-0">
                                0{lightboxIndex + 1} / 0{allPhotos.length}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}