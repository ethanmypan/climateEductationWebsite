import './footer.css'
import logo from '../../assets/logo.png'
import TwitterX from '../../assets/TwitterX.png'
import Facebook from '../../assets/Facebook.png'
import Instagram from '../../assets/Instagram.png'

export default function Footer() {
    return (
        <div id="footer">
            <div id='logo-address'>
                <a href='/'><img src={logo} alt='logo' /></a>
                <p>Address:</p>
                <p>1234 Main Street</p>
                <p>City, State 12345</p>
            </div>
            <div id='location-contact'>
                <p>Phone:</p>
                <p>(123) 456-7890</p>
                <br />
                <p>Email:</p>
                <p>5V9x9@example.com</p>
            </div>
            <div id='links'>
                <p>Links:</p>
                <a href='#'>About Us</a>
                <a href='#'>For Teachers</a>
                <a href='#'>Games</a>
                <a href='#'>Activities</a>
                <a href='#'>AI Chat</a>
            </div>
            <div id='socials'>
                <p>Follow Us:</p>
                <div id='social-icons'>
                    <a href='#'><img src={TwitterX} alt='Twitter' /></a>
                    <a href='#'><img src={Facebook} alt='Facebook' /></a>
                    <a href='#'><img src={Instagram} alt='Instagram' /></a>
                </div>
            </div>
            
        </div>
    )
}