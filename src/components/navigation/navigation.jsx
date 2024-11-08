import './navigation.css'
import logo from '../../assets/logo.png'

export default function Navigation() {
    return (
        <div id="navigation">
            <a href='/'><img src={logo} alt='logo' /></a>
            <div id="navigation_links">
                <button><a href="/about-us">About Us</a></button>
                <button><a href="/for-teachers">For Teachers</a></button>
            </div>
        </div>
    )
}