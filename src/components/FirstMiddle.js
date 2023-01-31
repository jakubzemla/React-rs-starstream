import './FirstMiddle.css'
import pgmImg from '../images/pgm-image.jpg'
import previewImg from '../images/preview-img.jpg'


const FirstMiddle = () => {
    return (
        <div className="middle-item first-row">
            <div className="preview">
                <h3 className="grid-part-headline">Preview</h3>
                <div className="video-wrapper">
                    <img src={previewImg} alt="" />
                </div>
            </div>
            <div className="mixer-modes">
                <h3 className="grid-part-headline">Mixer Modes</h3>
                <ul className="modes-list">
                    <li className="modes-item"><button><i className="fa-solid fa-circle-play green"></i>Preview</button></li>
                    <li className="modes-item"><button><i className="fa-solid fa-forward"></i>Direct Out</button></li>
                    <li className="modes-item"><button><span><i className="fa-solid fa-circle-play green"></i><i className="fa-solid fa-circle-play red"></i></span>Combo</button></li>
                    <li className="modes-item"><button><span><i className="fa-solid fa-play"></i><i className="fa-solid fa-play rotate"></i></span>CrossFade</button></li>
                    <li className="modes-item"><button><i className="fa-solid fa-circle-play green red"></i>PGM Direct</button></li>
                    <li className="modes-item"><button><span><i className="fa-solid fa-play small"></i><i className="fa-solid fa-slash rotate small"></i><i className="fa-solid fa-play rotate small"></i></span>Transition</button></li>
                    <li className="modes-item full-line"><button><i className="fa-solid fa-gear"></i>Transition settings</button></li>
                    <li className="modes-item"><button><span className="icon">FTB</span> Fade to black</button></li>
                    <li className="modes-item"><button><i className="fa-solid fa-lock"></i>Unlock</button></li>
                </ul>
            </div>
            <div className="pgm">
                <ul className="pgm-navbar">
                    <li><a href="#result" className="active">PGM-1</a></li>
                    <li><a href="#result">PGM-2</a></li>
                    <li><a href="#result">PGM-3</a></li>
                    <li><a href="#result">PGM-4</a></li>
                    <li><a href="#result">PGM-5</a></li>
                </ul>
                <div className="video-wrapper">
                    <img src={pgmImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FirstMiddle