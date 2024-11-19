import './forTeachers.css'

export default function ForTeachers() {
    return (
        <div id="for-teachers-page"> 
            <h1><span>For</span> Teachers</h1>
            <div id="for-teachers-content">
                <div className='for-teachers-container'>
                    <h1>Topics</h1>
                    <div id='teachers-guide'>
                        <a href='/pdfFiles/Teacher Notes- Guide to Addressing the Climate Crisis.pdf' target='_blank'>
                            <h2>Guide to Addressing the Climate Crisis</h2>
                        </a>
                        <p>Don't have the confidence to teach about climate change? Don't worry! Read this guide to explore how best you can teach students about the climate.</p>
                    </div>
                    <div id='climate-change'>
                        <a href='/pdfFiles/Unit 1-  Climate Change & Fossil Fuels.pdf' target='_blank'><h2>Climate Change & Fossil Fuels</h2></a>
                        <p>What is climate change? Explore what it means and what causes it.</p>
                    </div>
                    <div id='renewable-energy'>
                        <a href='/pdfFiles/Unit 2- Renewable Energy.pdf' target='_blank'><h2>Renewable Energy</h2></a>
                        <p>Learn about renewable energy sources and how they can help reduce greenhouse gas emissions.</p>
                    </div>
                    <div id='climate-injustice'>
                        <a href='/pdfFiles/Disparities in Climate Change.pdf' target='_blank'><h2>Climate Injustice</h2></a>
                        <p>Resource for learning about the disparities in climate change and how to address them.</p>
                    </div>
                    <div id='Activities'>
                        <a href='/activity'><h2>Activities</h2></a>
                        <p>Find activities that you can easily entigrate in your classrooms</p>
                    </div>
                </div>

                <div id='related-links' className='for-teachers-container'>
                    <h1>Related links</h1>
                    <a target='_blank' href='https://www.epa.gov/climate-change/climate-change-resources-educators-and-students'>Climate Change Resources for Educators and Students</a>
                    <a target='_blank' href='https://climatekids.nasa.gov/'>Climate Kids</a>
                    <a target='_blank' href='https://www.jpl.nasa.gov/edu/resources/'>K-12 Education Resources</a>
                    <a target='_blank' href='https://www.wildcenter.org/our-work/youth-climate-program/resources/'>Climate Education Resources</a>
                    <a target='_blank' href='https://cleanet.org/index.html'>Teaching Climate and Energy</a>
                </div> 
            </div>
        </div>
    )
}