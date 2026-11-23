import { useState } from 'react';
import {
    Camera,
    Code2,
    Database,
    FileText,
    Layers,
    Network,
    Palette,
    Sparkles,
    Terminal,
} from 'lucide-react';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function getLogosForLabel(label = '', isDark = true) {
    const text = label.toLowerCase();
    const logos = [];

    const add = (id, src, alt) => {
        if (!logos.some((item) => item.id === id)) {
            logos.push({ id, src, alt });
        }
    };

    // Languages & Frameworks
    if (text.includes('react')) add('react', `${DEVICON}/react/react-original.svg`, 'React');
    if (text.includes('vite')) add('vite', `${DEVICON}/vitejs/vitejs-original.svg`, 'Vite');
    if (text.includes('tailwind')) add('tailwind', `${DEVICON}/tailwindcss/tailwindcss-original.svg`, 'Tailwind CSS');
    if (text.includes('java') || text.includes('swing')) add('java', `${DEVICON}/java/java-original.svg`, 'Java');
    if (text.includes('c++') || text.includes('cpp')) add('cpp', `${DEVICON}/cplusplus/cplusplus-original.svg`, 'C++');
    if (text.includes('python')) add('python', `${DEVICON}/python/python-original.svg`, 'Python');
    if (/\br\b|rstudio/.test(text)) add('r', `${DEVICON}/r/r-original.svg`, 'R');
    if (text.includes('javascript') || /\bjs\b/.test(text)) add('js', `${DEVICON}/javascript/javascript-original.svg`, 'JavaScript');
    if (text.includes('html')) add('html', `${DEVICON}/html5/html5-original.svg`, 'HTML5');
    if (text.includes('css') && !text.includes('tailwind')) add('css', `${DEVICON}/css3/css3-original.svg`, 'CSS3');

    // Databases
    if (text.includes('mysql') || text.includes('phpmyadmin')) {
        add('mysql', `${DEVICON}/mysql/mysql-original.svg`, 'MySQL');
    }

    // Mobile, IDEs & Dev Tools
    if (text.includes('android')) {
        add('androidstudio', `${DEVICON}/androidstudio/androidstudio-original.svg`, 'Android Studio');
    }
    if (text.includes('vs code') || text.includes('vscode') || text.includes('visual studio code')) {
        add('vscode', `${DEVICON}/vscode/vscode-original.svg`, 'VS Code');
    } else if (text.includes('visual studio')) {
        add('visualstudio', `${DEVICON}/visualstudio/visualstudio-original.svg`, 'Visual Studio');
    }
    if (text.includes('eclipse')) add('eclipse', `${DEVICON}/eclipse/eclipse-original.svg`, 'Eclipse IDE');
    if (text.includes('github')) {
        add(
            'github',
            `https://cdn.simpleicons.org/github/${isDark ? 'FFFFFF' : '080B0F'}`,
            'GitHub'
        );
    }
    if (text.includes('git') && !text.includes('github')) {
        add('git', `${DEVICON}/git/git-original.svg`, 'Git');
    }
    if (text.includes('linux') || text.includes('kali') || text.includes('debian')) {
        add('linux', `${DEVICON}/linux/linux-original.svg`, 'Linux');
    }

    // Design, Networking & AI Apps
    if (text.includes('figma')) add('figma', `${DEVICON}/figma/figma-original.svg`, 'Figma');
    if (text.includes('canva')) add('canva', `${DEVICON}/canva/canva-original.svg`, 'Canva');
    if (text.includes('gemini') || /\bai\b/.test(text) || text.includes('hai')) {
        add('gemini', 'https://cdn.simpleicons.org/googlegemini/4285F4', 'Gemini AI');
    }
    if (text.includes('packet tracer') || text.includes('cisco')) {
        add('cisco', 'https://cdn.simpleicons.org/cisco/049FD9', 'Cisco Packet Tracer');
    }
    if (text.includes('wix')) {
        add('wix', `https://cdn.simpleicons.org/wix/${isDark ? 'FFFFFF' : '080B0F'}`, 'Wix');
    }
    if (text.includes('photoshop')) {
        add('photoshop', `${DEVICON}/photoshop/photoshop-original.svg`, 'Photoshop');
    }

    return logos;
}

function getFallbackIcon(label = '') {
    const text = label.toLowerCase();
    if (text.includes('sql') || text.includes('erd') || text.includes('database')) return Database;
    if (text.includes('lan') || text.includes('subnet') || text.includes('network')) return Network;
    if (text.includes('poster') || text.includes('layout') || text.includes('typo') || text.includes('visual') || text.includes('medal') || text.includes('apparel')) return Palette;
    if (text.includes('hci') || text.includes('ui') || text.includes('uml') || text.includes('system') || text.includes('web')) return Layers;
    if (text.includes('srs') || text.includes('word') || text.includes('doc')) return FileText;
    if (text.includes('nikon') || text.includes('dslr') || text.includes('photo')) return Camera;
    if (text.includes('oop') || text.includes('code') || text.includes('console')) return Terminal;
    if (text.includes('rank') || text.includes('streak') || text.includes('gamif')) return Sparkles;
    return Code2;
}

const VARIANT_CLASSES = {
    uno: 'inline-flex items-center gap-1.5 rounded-full bg-[#080B0F] text-snow border border-white/15 px-3 py-1 font-mono text-[10px] font-bold',
    dark: 'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-carbon-2 border border-snow/10 text-slate-200 font-mono text-[11px]',
    modal: 'inline-flex items-center gap-1.5 rounded-md bg-[#080B0F] text-petronas-bright font-mono text-[11px] font-semibold px-2.5 py-1',
    light: 'inline-flex items-center gap-1.5 rounded-md bg-[#F1F5F9] border border-[#CBD5E1] px-2.5 py-1 font-mono text-[10px] font-semibold text-[#1E293B]',
};

export default function ToolBadge({ label, variant = 'dark', className = '' }) {
    const [failedSrcs, setFailedSrcs] = useState({});
    const isDark = variant !== 'light';
    const logos = getLogosForLabel(label, isDark).filter((l) => !failedSrcs[l.src]);
    const FallbackIcon = getFallbackIcon(label);

    return (
        <span className={`${VARIANT_CLASSES[variant] || VARIANT_CLASSES.dark} ${className}`}>
            {logos.length > 0 ? (
                <span className="inline-flex items-center gap-1 shrink-0">
                    {logos.map((logo) => (
                        <img
                            key={logo.id}
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            onError={() =>
                                setFailedSrcs((prev) => ({ ...prev, [logo.src]: true }))
                            }
                            className="w-3.5 h-3.5 object-contain shrink-0"
                        />
                    ))}
                </span>
            ) : (
                <FallbackIcon
                    size={12}
                    className={`shrink-0 ${isDark ? 'text-petronas-bright' : 'text-[#007A76]'}`}
                />
            )}
            <span>{label}</span>
        </span>
    );
}