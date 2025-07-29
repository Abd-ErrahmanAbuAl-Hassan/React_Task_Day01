import '../styles/footer.css';
import facebook from '../assets/images/facebook.png';
import inst from '../assets/images/instagram.png';
import x from '../assets/images/twitter.png';

export function Footer() {
    return (
        <footer>
            <div className="links">
                <div>02-233 Warszawa</div>
                <div>email@contact.com</div>
                <div>Store Regulations</div>
                <div>Delivery</div>
                <div className="social">
                    <ul>
                        <li><img src={facebook} alt="Facebook" /></li>
                        <li><img src={inst} alt="Instagram" /></li>
                        <li><img src={x} alt="Twitter/X" /></li>
                    </ul>
                </div>
                <div>Al. Jerozolimskie 12</div>
                <div>+48 500 500 500</div>
                <div>Privacy policy</div>
                <div>Returns & exchanges</div>
            </div>
            <div className="license">
                <p>
                    Website created in white label responsive website builder <span className="web">Web</span><span className="wave">Wave.</span>
                </p>
            </div>
        </footer>
    );
}
