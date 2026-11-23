import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LaunchIntro from './components/LaunchIntro';
import Navbar from './components/Navbar';
import ScrollF1Car from './components/ScrollF1Car';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Media from './pages/Media';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

const SEPANG_MAIN_PATH =
  "M 660 485 L 270 532 C 242 535 244 480 272 482 C 288 483 294 495 300 482 C 304 470 282 440 276 410 C 266 350 282 280 330 250 L 472 175 C 490 165 496 175 498 195 L 512 285 C 518 335 548 368 585 352 C 605 344 612 315 636 312 C 655 310 672 328 690 355 L 748 488 C 756 505 752 522 738 552 C 728 575 722 582 700 584 L 542 608 C 518 612 518 632 536 644 C 562 662 576 688 574 730 C 572 775 556 815 544 832 C 534 846 522 842 504 824 L 444 745 C 425 720 412 710 392 722 C 362 742 332 740 312 712 C 296 688 296 655 322 648 L 664 538 C 688 530 686 482 660 485 Z";

const SEPANG_PIT_LANE =
  "M 680 495 C 672 452 662 435 642 438 C 618 442 595 470 555 476 L 365 500 C 345 503 332 515 320 525";

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* Placed at root level so fixed fullscreen overlay isn't affected by overflow-x-hidden */}
      {/* Set alwaysShow={true} while testing or presenting live */}
      <LaunchIntro alwaysShow={false} />

      <ScrollF1Car />

      <div className="relative min-h-screen flex flex-col bg-transparent text-snow selection:bg-petronas selection:text-ink overflow-x-hidden">
        {/* Fixed Giant Sepang International Circuit Watermark */}
        <div
          className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center overflow-hidden select-none"
          aria-hidden="true"
        >
          <svg
            viewBox="150 100 720 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[130vw] max-w-none md:w-[95vw] lg:w-[82vw] h-auto opacity-[0.15]"
          >
            <defs>
              <linearGradient id="petronasTrackGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D2BE" stopOpacity="1" />
                <stop offset="55%" stopColor="#00A19C" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.35" />
              </linearGradient>
              <filter id="trackGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <path
              d={SEPANG_MAIN_PATH}
              stroke="#FFFFFF"
              strokeWidth="22"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.14"
            />
            <path
              d={SEPANG_PIT_LANE}
              stroke="#00D2BE"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.55"
            />
            <path
              d={SEPANG_MAIN_PATH}
              stroke="url(#petronasTrackGrad)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#trackGlow)"
            />
            <path
              d={SEPANG_MAIN_PATH}
              stroke="#0A0D10"
              strokeWidth="2"
              strokeDasharray="8 10"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Foreground Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/media" element={<Media />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <footer className="bg-carbon/80 backdrop-blur-md border-t border-petronas/40 py-8 text-xs font-mono">
            <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-snow font-semibold">
                © {new Date().getFullYear()} Muhammad Khalis Fikri Bin Muhammad Fauzi.
              </span>
              <span className="text-snow">
                FTMK UTeM •{' '}
                <span className="text-petronas-bright font-bold">
                  High-Fidelity HCI Portfolio
                </span>
              </span>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}