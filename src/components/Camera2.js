import './Camera2.css'
import cam2 from '../images/cam2.jpg'

const Camera2 = () => {
    return (
        <div className="camera-item">
            <h3 className="grid-part-headline left-align">Cam 2</h3>
            <div className="video-wrapper">
                <img src={cam2} alt="" />
            </div>
        </div>
    )
}

export default Camera2