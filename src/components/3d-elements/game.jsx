import './3d-elements.css'
import Spline from '@splinetool/react-spline';

export default function Game() {
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