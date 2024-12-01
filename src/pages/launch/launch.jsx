// src/pages/launch/Launch.jsx
import React, { useState, useEffect } from "react";
import "./launch.css";
import Hero from "../../components/hero/hero.jsx";
import TeacherStudent from '../../assets/teacher-student.jpg';
import ClimateTech from '../../assets/climateTech.jpg';
import EarlyClimateAction from '../../assets/earlyClimateAction.webp';
import PlantingTrees from '../../assets/plantingTrees.webp';
import testimonialsData from "./testimonials.json";
import Game from '../../components/3d-elements/game.jsx'
import Activity from '../../components/3d-elements/activity.jsx'

export default function Launch() {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [inView, setInView] = useState(false);
    const [testimonials, setTestimonials] = useState([]);

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
                    setInView(true); // Set in view
                } else {
                    setInView(false); // Mark as out of view
                }
            },
            { threshold: 0.1 }
        );
    
        const threeDContainer = document.getElementById("three-d-container");
        if (threeDContainer) observer.observe(threeDContainer);
    
        // Clean up observer when component unmounts
        return () => observer.disconnect();
    }, []);
    

    useEffect(() => {
        setTestimonials(testimonialsData);
    }, []);
    

    return (
        <div id="launch-page">
            <Hero />
            <section id="mission-section">
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
            </section>

            <section id="engagement-section">
                <h1 className="section-header">Engage with us</h1>
                <div id="three-d-container" className={inView ? "appear" : "disappear"}>
                    <Game />
                    <Activity />
                </div>
            </section>


            <section id="testimonial-section">
                <h1 className="section-header">Hear from the others</h1>
                <marquee behavior="alternate" direction="left">
                    <div id="testimonial-container">
                        {testimonials.map((testimonial, index) => (
                            <div className="testimonial" key={index}>
                                <h3 id="name">{testimonial.name}</h3>
                                <p id="stars">{"⭐".repeat(testimonial.stars)}</p>
                                <p id="testimonial-text">{testimonial.testimonial}</p>
                                <p id="role"><i>{testimonial.role}</i></p>
                            </div>
                        ))}
                    </div>
                </marquee>
            </section> 
        </div>
    );
}
