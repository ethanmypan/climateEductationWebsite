import './aboutUs.css'
import Meadow from '../../assets/meadow.jpg'
import SparklingEarth from '../../assets/earthSparks.webp'


export default function AboutUs() {
   
    return (
        <div id="about-us-page">
            <section id="banner">
                <img id='banner-img' src={Meadow} alt='Sparkling meadow grass with dews dripping.' />
                <img id='banner-gif' src={SparklingEarth} alt='Drawing of earth with sparkles embraced by a leafy vine' />
                <div id="banner-text">
                    <h2>Empowering K-12 Climate Education for a Sustainable Future</h2>
                    <h1>About Us</h1> 
                </div>
            </section>
            <section id='content'>
                <section id='mission'>
                    <h2>Our Mission</h2>
                    <h1>
                        Empowering educators with tools to engage students early on climate issues, 
                        fostering responsible future leaders.
                    </h1>
                </section>
                <section id='why-it-matters' className='about-us-content'>
                   <div className='about-us-section-text'>
                        <h3>Why Climate Education Matters?</h3>
                        <p>
                            There is a lack of comprehensive climate education in K-12 schools and leave students with only superficial knowledge. 
                            This delays their understanding of the crisis and limits opportunities for early engagement in meaningful climate action.
                        </p>
                   </div>
                    <img src='/images/earth.png' alt='earth' />
                </section>
                <section id='our-approach' className='about-us-content'>
                    <img src='/images/solarBattery.png' alt='solar battery' />
                    <div className='about-us-section-text'>
                        <h3>Our Approach</h3>
                        <h4>Hands-On Learning for Lasting Impact</h4>
                        <p>
                            Designed activities for students to learn experientially and for teachers to easily integrate in their classrooms thereby bridging the gap between theories and practical application.
                        </p>
                    </div>
                </section>
            </section>
        </div>
    )
}