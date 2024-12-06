import './activity.css'
import KidsAndSolar from '../../assets/kidsAndSolar.jpg'

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
                    <a href='/solar-assembly'><img src={KidsAndSolar} /></a>
                    <div className="activity-text">
                        <a href='/solar-assembly'><h2>Solar Assembly Activity</h2></a>
                        <p>{solarAssemblyDescription}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}