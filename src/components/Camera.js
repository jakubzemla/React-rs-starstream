import './Camera.css'
import pgmImg from '../images/pgm-image.jpg'

const Camera = () => {
    return (
        <div className="camera-item">
            <h3 className="grid-part-headline left-align">Cam 1</h3>
            <div className="video-wrapper">
                <img src={pgmImg} alt="" />
            </div>
        </div>
    )
}

export default Camera