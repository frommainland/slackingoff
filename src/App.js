import "the-new-css-reset/css/reset.css"
import './rootCss.scss'
import './font.css'
import Lenis from "@studio-freight/lenis";
import AboutPage from "./AboutPage/AboutPage";

const lenis = new Lenis(
    {
        // lerp: 0.01,
        smooth: true,
        direction: "vertical"
    })

// lenis.on('scroll', (e) => {
//     console.log(e.current)
// })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {
    return (
        <div className="App">
            <AboutPage />
        </div>
    );
}

export default App;
