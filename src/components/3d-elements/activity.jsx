import './3d-elements.css'
import Spline from '@splinetool/react-spline';

export default function Activity() {
    return (
        <div id='activity' className='three-d-element'>
          <a href='/activity'>
              <h1>Activity</h1>
          </a>
          <p>Find sample activities the you can easily integrate in your classroom.</p>
          <Spline classname='spline-elements' scene="https://prod.spline.design/DgVvXZpLyYKGWdyD/scene.splinecode" /> 
          <h2 id='click-screws'>Click screws to interact.</h2>   
      </div>
    );
}