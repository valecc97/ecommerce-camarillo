import './NavBar.css';
import CartWidget from './CartWidget.js';
import pflogo from '../images/pf-logo.svg';

function NavBar() {
	return (
		<div className="navBar-wrapper">
			<ul className="navBar">
				<li className="navBar-item"><a href="#"><img src={pflogo} className="store-logo" alt="logo" /></a></li>
				<li className="navBar-item"><a href="#">Productos</a></li>
				<li className="navBar-item"><a href="#">Pretty Kits</a></li>
				<li className="navBar-item"><a href="#">Nosotros</a></li>
				<li className="navBar-icon"><CartWidget/></li>
				
			</ul>
		</div>
	)
}

export default NavBar;