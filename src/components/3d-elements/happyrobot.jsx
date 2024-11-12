import './3d-elements.css'
import Spline from '@splinetool/react-spline';

export default function HappyRobot() {
    return (
      <div id='spline-robot' className='three-d-element'>
        <Spline classname='spline-elements' scene="https://prod.spline.design/iYanxO4CeSPXRL0v/scene.splinecode" />
      </div>
    );
}