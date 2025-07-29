import "../styles/hero.css";
import logo from '../assets/images/logo.webp';
import cart from '../assets/images/cart.png';

export function Hero() {
    return (
        <div className="hero">
            <nav className="hero-nav">
                <div className="logo">
                    <img src={logo} alt="Studio Logo" />
                </div>
                <ul>
                    <a href="#"><li>Shop</li></a>
                    <a href="#"><li>Workshop</li></a>
                    <a href="#"><li>Blog</li></a>
                    <a href="#"><li>Contact</li></a>
                    <a href="#"><li><img src={cart} alt="Cart" /></li></a>
                </ul>
            </nav>

            <header className="content">
                <h1>Ceramics Studio</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat repellat debitis voluptates repudiandae eveniet eos quibusdam, odit labore, aliquid sequi, animi dolorum reiciendis ipsum. Vitae repellendus est cumque et nesciunt.
                </p>
                <button>Show More</button>
            </header>
        </div>
    );
}
