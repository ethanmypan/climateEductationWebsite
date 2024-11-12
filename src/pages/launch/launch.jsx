// src/pages/launch/Launch.jsx
import React, { useState, useEffect } from "react";
import "./launch.css";
import Hero from "../../components/hero/hero.jsx";
import TeacherStudent from '../../assets/teacher-student.jpg';
import ClimateTech from '../../assets/climateTech.jpg';
import EarlyClimateAction from '../../assets/earlyClimateAction.webp';
import PlantingTrees from '../../assets/plantingTrees.webp';

// Lazy load 3D elements
const HappyRobot = React.lazy(() => import('../../components/3d-elements/happyrobot.jsx'));
const Game = React.lazy(() => import('../../components/3d-elements/game.jsx'));
const Activity = React.lazy(() => import('../../components/3d-elements/activity.jsx'));

export default function Launch() {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [inView, setInView] = useState(false);

    const images = [
        { src: TeacherStudent, alt: "Teacher and Student" },
        { src: ClimateTech, alt: "Climate Tech" },
        { src: EarlyClimateAction, alt: "Early Climate Action" },
        { src: PlantingTrees, alt: "Planting Trees" },
    ];

    const valueProp = `
        We are here to empower Teachers.
        Give the tools to spark curiosity and engage students through hands-on learning.
    `;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true); // Load components once in view
                    observer.disconnect(); // Stop observing after load
                }
            },
            { threshold: 0.1 }
        );

        const threeDSection = document.getElementById('three-d-section');
        if (threeDSection) observer.observe(threeDSection);

        return () => observer.disconnect();
    }, []);

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
                    {inView && (
                        <React.Suspense fallback={<div>Loading 3D content...</div>}>
                            <HappyRobot />
                            <Game />
                            <Activity />
                        </React.Suspense>
                    )}
                </div>
            </div>
        </div>
    );
}
