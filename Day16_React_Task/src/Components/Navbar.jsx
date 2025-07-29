import logo from '../assets/images/webwave-logo.png';
import '../styles/nav.css';
import phone from '../assets/images/phone.png'
import pc from '../assets/images/computer.png'
import tab from '../assets/images/tablet.png'
export function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="device-icons">
                <div className="icon-wrapper"><img src={pc} alt="pc" /></div>
                <div className="icon-wrapper"><img src={tab} alt="tab" /></div>
                <div className="icon-wrapper"><img src={phone} alt="phone" /></div>
            </div>
            <div className="left">
                <div className="txt">Try it for free <br /> - you risk nothing!</div>
                <div className="btn">
                    <button>get started</button>
                </div>
            </div>
        </nav>
    );
}
