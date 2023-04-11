import "the-new-css-reset/css/reset.css"
import './rootCss.scss'
import './font.css'
import Lenis from "@studio-freight/lenis";
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./Hompage/HomePage";
import NoMatch from "./404Page/NoMatch";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const lenis = new Lenis(
    {
        // lerp: 0.01,
        smooth: true,
        direction: "vertical"
    })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <AnimatePresence mode="wait"
                onExitComplete={() => {
                    if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0, behavior: 'instant' })
                    }
                }}
            >
                <Routes location={location} key={location.pathname}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
}

export default App;
