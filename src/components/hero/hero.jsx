import './hero.css'
import bgVideo from '../../assets/bgVideo.mp4'

export default function Hero() {
    return (
        <div id="hero">
            <div id="slogan">
                <h2>Solving Climate Crisis</h2>
                <h2>Takes One Thing</h2>
                <h1>YOU</h1>
            </div>
            <video src={bgVideo} autoPlay loop muted />
        </div>
    )
}