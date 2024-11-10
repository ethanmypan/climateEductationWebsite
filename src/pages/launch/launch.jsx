import React, { useState } from "react";
import "./launch.css";
import Hero from "../../components/hero/hero.jsx";
import TeacherStudent from '../../assets/teacher-student.jpg';
import ClimateTech from '../../assets/climateTech.jpg';
import EarlyClimateAction from '../../assets/earlyClimateAction.webp';
import PlantingTrees from '../../assets/plantingTrees.webp';
// import Games from '../../assets/games.png';
// import Activities from '../../assets/activities.png';
// import AI_Chat from '../../assets/AI_Chat.png';
import {HappyRobot, Game, Activity} from '../../components/3d-elements/3d-elements.jsx';
export default function Launch() {
    const [hoveredImage, setHoveredImage] = useState(null);

    const images = [
        { src: TeacherStudent, alt: "Teacher and Student" },
        { src: ClimateTech, alt: "Climate Tech" },
        { src: EarlyClimateAction, alt: "Early Climate Action" },
        { src: PlantingTrees, alt: "Planting Trees" },
    ];

    const valueProp = `
        We are here to empower Teachers.
        Give the tools to spark curiosity and engage students through hands-on learning.
        `

    return (
        <div id="launch-page">
            <Hero />
            <div id="mission-section">
                <h1 className="section-header">What we do</h1>
                <p>{valueProp}</p>
                <div id="image-container" onMouseLeave={() => setHoveredImage(null)}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={hoveredImage === index ? "visible" : hoveredImage !== null ? "hidden" : `clip-${index}`}
                        />
                    ))}

                    <div className="hover-zone" onMouseEnter={() => setHoveredImage(0)}> 
                        <h2>Empowering educators</h2>
                    </div>
                    <div className="hover-zone" onMouseEnter={() => setHoveredImage(1)}> 
                        <h2>Utilizing technology for better learning</h2>
                    </div>
                    <div className="hover-zone" onMouseEnter={() => setHoveredImage(2)}> 
                        <h2>Encouraging early climate action</h2>
                    </div>
                    <div className="hover-zone" onMouseEnter={() => setHoveredImage(3)}> 
                        <h2>Planting trees for a greener future</h2>
                    </div>
                </div>
                <h2> Let's drive Climate Action early!</h2>
            </div>
            
            <div id="three-d-section">
                <h1 className="section-header">Engage with us</h1>
                <div id="three-d-container">
                    <HappyRobot />
                    <Game />
                    <Activity />
                </div>
            </div>
        </div>
    );
}
