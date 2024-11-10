import './aboutUs.css'
import SparklingEarth from '../../assets/earthSparks.webp'
import MeadowVideo from '../../assets/meadowVideo.mp4'
import HandsUnderRain from '../../assets/handsUnderRain.jpg'
import HandsonLearning from '../../assets/hands-onLearning.jpg'


export default function AboutUs() {

    const about_us = `
        At EcoSpark, we believe in the power of early education to inspire a sustainable future.
        The climate crisis is one of the greatest challenges of our time, however, climate education 
        is often overlooked in traditional curricula. EcoSpark exists to fill this gap, providing 
        educators with accessible, engaging tools and activities that make climate science and 
        sustainability relatable and actionable for K-12 students. We envision a world where every 
        student grows up with the knowledge and motivation to protect our planet.
    `

   
    return (
        <div id="about-us-page">
            <section id="banner">
                <video id='banner-video' src={MeadowVideo} autoPlay loop muted />
                <img id='banner-gif' src={SparklingEarth} alt='Drawing of earth with sparkles embraced by a leafy vine' />
                <div id="banner-text">
                    {/* <h2>Enhancing K-12 Climate Education for a Sustainable Future</h2> */}
                    <h1>About Us</h1> 
                    <p>{about_us}</p>
                </div>
            </section>
            <section id='content'>
                <section id='mission'>
                    <h1>Our Mission</h1>
                    {/* <h1>
                        Empowering educators with tools to engage students early on climate issues, 
                        fostering responsible future leaders.
                    </h1> */}
                    <div id='mission-statement'>
                        <h2><span className='green'>G</span><span className='meaning'>uiding our amazing teachers by providing them with</span></h2>
                        <h2><span className='green'>R</span><span className='meaning'>esources to teach climate education,</span></h2>
                        <h2><span className='green'>E</span><span className='meaning'>mpower them with accessible tools and</span></h2>
                        <h2><span className='green'>E</span><span className='meaning'>nable impactful, hands-on learning for students to</span></h2>
                        <h2><span className='green'>N</span><span className='meaning'>urture awareness in the next generation</span></h2>
                    </div>
                </section>
                <section id='why-it-matters' className='about-us-content'>
                   <div className='about-us-section-text'>
                        <h3>Why Climate Education Matters?</h3>
                        <p>
                            There is a lack of comprehensive climate education in K-12 schools which leave students with superficial knowledge. 
                            This delays their understanding of the crisis and limits opportunities for early engagement in meaningful climate action.
                        </p>
                   </div>
                    <img src={HandsUnderRain} alt='Hands holding a plant under the rain' />
                </section>
                <section id='our-approach' className='about-us-content'>
                    <img src={HandsonLearning} alt='learning technology hands-on' />
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