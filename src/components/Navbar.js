import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">streamstar</div>
            <ul className="menu">
                <li className="menu-item"><a href="#result"><i className="fa-solid fa-house fa-xl"></i>Home</a></li>
                <li className="menu-item"><a href="#result"><i className="fa-solid fa-calendar-days fa-xl"></i>Calender</a></li>
                <li className="menu-item"><a href="#result"><i className="fa-solid fa-table fa-xl"></i>Data</a></li>
                <li className="menu-item active"><a href="#result"><i className="fa-solid fa-play fa-xl"></i>Studio</a></li>
            </ul>
        </nav>
    )
}

export default Navbar