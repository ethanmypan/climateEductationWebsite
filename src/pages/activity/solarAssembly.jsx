import './solarAssembly.css'
import SUPS from '../../assets/SUPS.png'

export default function SolarAssembly() {
    const learning_obj = () => {
        return (
            <>
                <p>
                    <strong>A Clear Understanding of Solar Power</strong><br />
                    You’ll see how a solar panel generates power and transfers 
                    it to a battery, giving you hands-on experience with clean energy.
                </p>
                <p>
                    <strong>Insight into Power Conversion</strong><br />
                    You’ll learn how voltage is adjusted for different stages in the process, which is key for making solar power practical.
                </p>
                <p>
                    <strong>Knowledge of Battery Management</strong><br />
                    You’ll discover how microcontrollers can help protect batteries by controlling when they charge and discharge.
                </p>
                <p>
                    <strong>Skills in Working with Electrical Components</strong><br />
                    From assembly to disassembly, you’ll get comfortable connecting modules, handling connectors, and following safe disconnection practices.
                </p>
                <p>
                    <strong>An Idea of Real-World Applications</strong><br />
                    By using solar power to run USB devices, you’re seeing firsthand how renewable energy can be harnessed to power our everyday lives.
                </p>
            </>
        )
    }

    const overview_description = () => {
        return (
            <>
            <p>
                The SUPS kit is a way for you to dive into the world of solar power and energy storage. 
                It’s designed to show you, step-by-step, how solar energy flows from generation all the 
                way to powering everyday devices. You’ll be working with three main modules that each 
                play a crucial role in this journey: 
            </p>
            <p>
                Module 1: <strong>Solar Battery Charger</strong> <br />
                Think of this as the power station that converts and sends the energy on its way. 
            </p>
            <p>
                Module 2: <strong>Battery Monitor and Controller</strong> <br />
                This is the brain of the kit. Module 2 has a microcontroller that keeps an eye 
                on the battery, making sure it doesn’t get overcharged and only supplies 
                power to the other modules when it’s safe to do so. 
            </p>
            <p>
                Module 3:<strong>Power Output</strong> <br />
                Now for the exciting part—using the stored energy! Here, you’ll see how the energy 
                collected and stored in the battery can now be used to power USB-compatible devices.
            </p>
            </>
        )
    }

    const assembly = () => {
        return (
            <p>
                <ol>
                    <li>
                        Module 1 is the interface between the solar panel and the battery.  
                        It is a boost converter that steps up the solar panel’s 12V to 14.4V.  
                        14.4V is selected as it is the voltage at which the battery is fully charged, 
                        therefore, it is a solar battery charger.
                        <ol>
                            <li>Connect the solar panel’s connector to the connector labeled PANEL.</li>  
                            <li>Connect one end of an unused smaller double sided connector to EN_1.</li>
                            <li>Connect one end of an unused bigger double sided connector to MOD2.</li>
                        </ol>
                    </li>
                    <li>
                        Module 2 is the battery monitor and controller of the other modules.  It consists of 
                        an ATTINY1624 microcontroller that monitors the battery’s voltage and enables/disables 
                        the other 2 modules.  The enable/disable function for module 1 is used to control the 
                        output power of the module in order to protect the battery.  The enable/disable function 
                        for module 3 simply disables the buck converter, thus, removing power from the USB C port.
                        <ol>
                            <li>Connect the battery’s connector to the connector labeled BAT.</li>  
                            <li>Connect one end of an unused smaller double sided connector to EN_3.</li>
                            <li>Connect the other end of module 1’s EN_1 connector to the EN_1 connector on module 2.</li>
                            <li>Connect the other end of module 1’s MOD2 connector to the MOD1 connector on module 2.</li>
                            <li>Connect one end of an unused bigger double sided connector to MOD3.</li>
                            <li>Connect one end of an unused smaller double sided connector to EN_3.</li>
                        </ol>
                    </li>
                    <li>
                        Module 3 is the output stage.  This is where we can use the energy we collected from the solar panel 
                        and stored in the battery.  This module is a boost converter, and steps down the voltage from the 
                        battery to 5V.  This 5V appears on the USB C connector and can be used to deliver power to USB C 
                        compatible devices.
                        <ol>
                            <li>Connect the other end of module 2’s EN_3 connector to the EN_3 connector on module 3.</li>
                            <li>Connect the other end of module 2’s MOD3 connector to the MOD2 connector on module 3.</li>
                        </ol>
                    </li>
                </ol>
            </p>
        )
    }

    const disassembly = () => {
        return (
            <p>
                <ol>
                    <li>Disconnect any USB C device.</li>
                    <li>Disconnect the battery from module 2.</li>
                    <li>DIsconnect the solar panel from module 1.</li>
                    <li>Disconnect everything else in any order.</li>
                </ol>
            </p>
        )
    }

    const endingRemark = `
        By completing this activity, you’ve taken a hands-on journey through the basics of solar power generation, energy 
        storage, and power conversion. You've not only seen how renewable energy can be harnessed but also gained practical 
        skills in connecting and managing components safely. As you explore further, remember that the principles you’ve 
        learned here are the same ones that power sustainable energy systems worldwide. Your curiosity and effort today 
        are steps toward a brighter, greener future. Keep experimenting, keep learning, and let your understanding of 
        renewable energy grow!
    `

    return (
        <div id="solar-assembly-page">
            <h1 id='title'>Solar Assembly</h1>
            <section className='learning-objectives'>
                <h2>Learning Objectives</h2>
                <p>By the end of this activity, you'll walk away with:</p>
                {learning_obj()}
            </section>
            <section className='overview'>
                <img src={SUPS} />
                <div id='overview-desc'>
                    <h2>Overview</h2>
                    <p>{overview_description()}</p>
                    <a href='pdfFiles/SUPS_Manual.pdf' target='_new-blank'>View PDF</a>
                </div>
            </section>
            <section className='steps'>
                <h2>Assembly</h2>
                <div><strong>
                    *Be sure to connect all connectors with the proper orientation 
                    ie. if the connector isn’t connecting, flip it around.
                </strong></div>
                {assembly()}
                <h2>Disassembly</h2>
                <div><strong>
                *Do not pull connectors hard.  Using your fingernail, move the 
                plastic hook slightly outward and remove the connector.
                </strong></div>
                {disassembly()}
            </section>
            <section id="video-steps">
                <h2>How to video</h2>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/oznr-1-poSU" 
                    title="YouTube video player" 
                    allowFullScreen
                ></iframe>
            </section>
            <section id="summary">
                <p>{endingRemark}</p>
            </section>
        </div>
    )
}