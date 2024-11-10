import './3d-elements.css'
import Spline from '@splinetool/react-spline';

function Activity() {
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

function Game() {
  return (
    <div id="game" className='three-d-element'>
        <a href='#'>
            <h1>Games</h1>
        </a>
        <p>Games to make your learning fun.</p>
      <Spline classname='spline-elements' scene="https://prod.spline.design/hxV4yfs5qsnKgtt1/scene.splinecode" />
    </div>
  );
}

function HappyRobot() {
    return (
      <div id='spline-robot' className='three-d-element'>
        <Spline classname='spline-elements' scene="https://prod.spline.design/iYanxO4CeSPXRL0v/scene.splinecode" />
      </div>
    );
  }

  export {HappyRobot, Game, Activity};