import './activity.css'

export default function Activity() {
    const solarAssemblyDescription = `
        Give students a hands-on experience building a functional solar-powered battery kit. 
        This activity will provide them with knowledge about renewable energy and the 
        environmental benefits of solar power.
        `

    return (
        <div id="activity-page">
            <h1>Activity</h1>
            <section className="activity-section">
                <div id="solar-assembly">              
                    <img src='https://placehold.co/100' />
                    <div className="activity-text">
                        <h2>Solar Assembly Activity</h2>
                        <p>{solarAssemblyDescription}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}