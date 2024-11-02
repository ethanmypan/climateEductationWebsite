import './navigation.css'
import logo from '../../assets/logo.png'

export default function Navigation() {
    return (
        <div id="navigation">
            <a href='/'><img src={logo} alt='logo' /></a>
            <div id="navigation_links">
                <button><a href="/about">About</a></button>
                <button><a href="/">For Teachers</a></button>
            </div>
        </div>
    )
}