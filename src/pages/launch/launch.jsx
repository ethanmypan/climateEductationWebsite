import "./launch.css"
import Hero from "../../components/hero/hero.jsx"
import TeacherStudent from '../../assets/teacher-student.jpg'

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
        </div>
    )
}