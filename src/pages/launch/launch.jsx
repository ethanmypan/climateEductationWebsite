import "./launch.css"
import Hero from "../../components/hero/hero.jsx"
import TeacherStudent from '../../assets/teacher-student.jpg'
import Games from '../../assets/games.png'
import Activities from '../../assets/activities.png'
import AI_Chat from '../../assets/AI_Chat.png'
export default function Launch() {
    const mission_statement = "We are here to empower Teachers. Give the tools to spark curiosity and engage students through hands-on learning."
    const call_to_action = "Let’s drive climate action early."
    
    return (
        <div id="launch-page">
            <Hero />
            <div id="mission-section">
                <div id="statement">
                    <p>{mission_statement}</p>
                    <p>{call_to_action}</p>
                </div>
                <img src={TeacherStudent} />
            </div>
            <div id="icons">
                <a href="#"><img src={Games} /></a>
                <a href="#"><img src={Activities} /></a>
                <a href="#"><img src={AI_Chat} /></a>
            </div>
        </div>
    )
}