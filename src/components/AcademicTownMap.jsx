import { useState } from 'react';
import { MapPin, X } from 'lucide-react';

const townHouses = [
    {
        id: 'madah-house',
        code: 'HOUSE 01',
        name: 'MADAH House',
        fullTitle: 'Madrasah Al-Hikmah (MADAH)',
        stage: 'Secondary Stage',
        location: 'Perak',
        desc: 'Where my secondary school routine, discipline, and early leadership started.',
        photo: '/images/education/madah-1.jpg',
        x: 175,
        y: 190,
        roofColor: '#2563EB',
        wallColor: '#EFF6FF',
    },
    {
        id: 'matric-house',
        code: 'HOUSE 02',
        name: 'Matriculation House',
        fullTitle: 'Matriculation (KMPK)',
        stage: 'Pre-University Stage',
        location: 'Perak',
        desc: 'Pre-university years in Perak building focus across computing, math, and sciences.',
        photo: '/images/education/matric-1.jpg',
        x: 450,
        y: 145,
        roofColor: '#00A19C',
        wallColor: '#F0FDFA',
    },
    {
        id: 'utem-house',
        code: 'HOUSE 03',
        name: 'UTeM House',
        fullTitle: 'Universiti Teknikal Malaysia Melaka',
        stage: 'Degree • Current',
        location: 'Melaka',
        desc: 'Software development at FTMK, UTeM in Melaka—building web systems and Android apps.',
        photo: '/images/education/utem-1.jpg',
        x: 725,
        y: 215,
        roofColor: '#0D9488',
        wallColor: '#F0FDFA',
    },
];

export default function AcademicTownMap() {
    const [selectedHouse, setSelectedHouse] = useState(townHouses[0]);
    const [missingImages, setMissingImages] = useState({});

    const markMissing = (src) => {
        setMissingImages((prev) => ({ ...prev, [src]: true }));
    };

    return (
        <div className="relative rounded-[28px] border-2 border-[#080B0F] bg-[#FAFBFD] text-[#080B0F] shadow-[0_26px_64px_-22px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Subtle Town Grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(8, 11, 15, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(8, 11, 15, 0.045) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                }}
            />

            {/* Top Bar */}
            <div className="relative z-10 px-6 sm:px-9 pt-7 pb-4 border-b border-[#080B0F]/15 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-[#080B0F] text-snow px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider">
                        <MapPin size={11} className="text-petronas-bright" />
                        <span>Interactive Academic Town Map</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-[-0.03em] text-[#080B0F]">
                        Click a{' '}
                        <span className="font-serif-editorial text-[#008C87] font-normal">
                            house
                        </span>{' '}
                        on the map.
                    </h2>
                </div>

                <span className="font-mono text-xs text-[#475569]">
                    Select a house to view its note &amp; photo
                </span>
            </div>

            {/* Bigger Town Map Canvas */}
            <div className="relative z-10 p-4 sm:p-8 space-y-5">
                <div className="relative w-full rounded-2xl border-2 border-[#080B0F] bg-[#E8F1F2] overflow-hidden shadow-[5px_6px_0px_rgba(8,11,15,0.12)]">
                    <svg
                        viewBox="0 0 900 340"
                        className="w-full h-[270px] sm:h-[340px] md:h-[380px] block"
                        role="img"
                        aria-label="Academic town map with houses for MADAH, Matriculation, and UTeM"
                    >
                        {/* Soft Town Parks & Blocks */}
                        <rect x="40" y="45" width="180" height="75" rx="16" fill="#DCECE8" />
                        <rect x="340" y="35" width="210" height="62" rx="16" fill="#DCECE8" />
                        <rect x="640" y="55" width="210" height="78" rx="16" fill="#DCECE8" />

                        {/* Background Town Streets */}
                        <line x1="0" y1="265" x2="900" y2="265" stroke="#CBD5E1" strokeWidth="10" strokeLinecap="round" />
                        <line x1="280" y1="0" x2="280" y2="340" stroke="#CBD5E1" strokeWidth="8" />
                        <line x1="590" y1="0" x2="590" y2="340" stroke="#CBD5E1" strokeWidth="8" />

                        {/* Main Connecting Journey Road Between Houses */}
                        <path
                            d="M 175 215 C 275 215, 330 168, 450 168 C 575 168, 625 238, 725 238"
                            fill="none"
                            stroke="#080B0F"
                            strokeWidth="14"
                            strokeLinecap="round"
                        />
                        <path
                            d="M 175 215 C 275 215, 330 168, 450 168 C 575 168, 625 238, 725 238"
                            fill="none"
                            stroke="#00D2BE"
                            strokeWidth="4"
                            strokeDasharray="10 10"
                            strokeLinecap="round"
                        />

                        {/* Simple Town Trees */}
                        {[
                            [82, 235],
                            [315, 225],
                            [545, 120],
                            [825, 245],
                        ].map(([tx, ty], i) => (
                            <g key={i} transform={`translate(${tx}, ${ty})`}>
                                <circle cx="0" cy="-6" r="11" fill="#10B981" opacity="0.45" />
                                <rect x="-2" y="2" width="4" height="8" rx="1" fill="#475569" />
                            </g>
                        ))}

                        {/* Clickable Houses */}
                        {townHouses.map((house) => {
                            const isSelected = selectedHouse?.id === house.id;
                            return (
                                <g
                                    key={house.id}
                                    transform={`translate(${house.x}, ${house.y})`}
                                    onClick={() => setSelectedHouse(house)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedHouse(house);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Open ${house.name}`}
                                    className="cursor-pointer group"
                                >
                                    {/* Selection Ring */}
                                    {isSelected && (
                                        <circle
                                            cx="0"
                                            cy="-8"
                                            r="52"
                                            fill="rgba(0, 210, 190, 0.18)"
                                            stroke="#00A19C"
                                            strokeWidth="2.5"
                                            strokeDasharray="6 5"
                                        />
                                    )}

                                    {/* Ground Shadow */}
                                    <ellipse cx="0" cy="24" rx="40" ry="8" fill="rgba(8, 11, 15, 0.18)" />

                                    {/* House Walls */}
                                    <rect
                                        x="-30"
                                        y="-14"
                                        width="60"
                                        height="36"
                                        rx="5"
                                        fill={house.wallColor}
                                        stroke="#080B0F"
                                        strokeWidth="2.5"
                                    />

                                    {/* Pitched House Roof */}
                                    <polygon
                                        points="-38,-12 0,-42 38,-12"
                                        fill={house.roofColor}
                                        stroke="#080B0F"
                                        strokeWidth="2.5"
                                        strokeLinejoin="round"
                                    />

                                    {/* Door & Windows */}
                                    <rect
                                        x="-7"
                                        y="4"
                                        width="14"
                                        height="18"
                                        rx="2"
                                        fill="#080B0F"
                                    />
                                    <rect
                                        x="-22"
                                        y="-4"
                                        width="10"
                                        height="10"
                                        rx="2"
                                        fill="#FDE047"
                                        stroke="#080B0F"
                                        strokeWidth="1.6"
                                    />
                                    <rect
                                        x="12"
                                        y="-4"
                                        width="10"
                                        height="10"
                                        rx="2"
                                        fill="#FDE047"
                                        stroke="#080B0F"
                                        strokeWidth="1.6"
                                    />

                                    {/* House Label Pill */}
                                    <g transform="translate(0, 44)">
                                        <rect
                                            x="-64"
                                            y="-11"
                                            width="128"
                                            height="22"
                                            rx="11"
                                            fill={isSelected ? '#080B0F' : '#FFFFFF'}
                                            stroke="#080B0F"
                                            strokeWidth="1.8"
                                        />
                                        <text
                                            x="0"
                                            y="3.5"
                                            textAnchor="middle"
                                            fontSize="10.5"
                                            fontWeight="700"
                                            fontFamily="monospace"
                                            fill={isSelected ? '#00D2BE' : '#080B0F'}
                                        >
                                            {house.name}
                                        </text>
                                    </g>
                                </g>
                            );
                        })}
                    </svg>
                </div>

                {/* Popup Card When a House Is Clicked (Small Frameless Photo + Simple Description) */}
                {selectedHouse && (
                    <div className="animate-fade-up rounded-2xl bg-white border-2 border-[#080B0F] p-5 sm:p-6 shadow-[4px_5px_0px_#080B0F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 min-w-0">
                            {/* Small Frameless Photo */}
                            <div className="w-28 h-20 sm:w-32 sm:h-24 rounded-xl overflow-hidden bg-[#11161D] shrink-0">
                                {!missingImages[selectedHouse.photo] && (
                                    <img
                                        src={selectedHouse.photo}
                                        alt={selectedHouse.name}
                                        onError={() => markMissing(selectedHouse.photo)}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            {/* Simple Description */}
                            <div className="space-y-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-[#007A76]">
                                    <span>{selectedHouse.code}</span>
                                    <span>•</span>
                                    <span>{selectedHouse.stage}</span>
                                    <span>•</span>
                                    <span className="text-[#475569]">{selectedHouse.location}</span>
                                </div>
                                <h3 className="font-display text-lg sm:text-xl font-extrabold text-[#080B0F]">
                                    {selectedHouse.fullTitle}
                                </h3>
                                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed max-w-xl">
                                    {selectedHouse.desc}
                                </p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectedHouse(null)}
                            aria-label="Close house popup"
                            className="self-end sm:self-center p-2 rounded-full bg-[#080B0F] text-snow hover:opacity-85 transition-opacity cursor-pointer shrink-0"
                        >
                            <X size={15} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}