import './3d-elements.css'
import Spline from '@splinetool/react-spline';

export default function Game() {
    return (
      <div id="game" className='three-d-element'>
          <a target='_blank' href='https://create.kahoot.it/share/syn-100-kahoot/c2b149ee-1b5e-4fb8-af62-9e2465f9ffe7'>
              <h1>Games</h1>
          </a>
          <p>Games to make your learning fun.</p>
        <Spline className='spline-elements' scene="https://prod.spline.design/hxV4yfs5qsnKgtt1/scene.splinecode" />
      </div>
    );
}
