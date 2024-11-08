import './hero.css'
import bgbanner from '../../assets/bgbanner.gif'

export default function Hero() {
    return (
        <div id="hero">
            <div id="slogan">
                <h2>Solving Climate Crisis</h2>
                <h2>Takes One Thing</h2>
                <h1>YOU</h1>
            </div>
            <img src={bgbanner} alt='green leafy branches swaying as the wind blows' />          
        </div>
    )
}