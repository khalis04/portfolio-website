const TOOLS = [
    'Java', 'C++', 'React', 'MySQL', 'Python', 'JavaScript', 'Tailwind CSS', 'Vite',
    'Figma', 'Canva', 'Gemini AI', 'Git', 'Nikon DSLR',
];

// Scrolling tools ribbon (pauses on hover; slows to a stop for reduced-motion users)
export default function Marquee() {
    return (
        <section aria-label="Tools and technologies" className="border-y-2 border-ink bg-petronas-bright py-5 overflow-hidden">
            <div className="marquee-track flex w-max">
                {[0, 1].map((copy) => (
                    <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                        {TOOLS.map((t) => (
                            <li key={t} className="flex items-center font-display text-2xl sm:text-3xl font-semibold tracking-tight text-ink">
                                <span className="px-6 sm:px-8">{t}</span>
                                <span className="text-ink" aria-hidden="true">✦</span>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </section>
    );
}