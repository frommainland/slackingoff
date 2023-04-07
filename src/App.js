import "the-new-css-reset/css/reset.css"
import './rootCss.scss'
import './font.css'
import Lenis from "@studio-freight/lenis";
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./Hompage/HomePage";
import NoMatch from "./404Page/NoMatch";
import { Routes, Route, Outlet, Link } from "react-router-dom";

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
    return (
        <div className="App">
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
